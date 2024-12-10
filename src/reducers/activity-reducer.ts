import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeid', payload: { id: Activity['id'] } } |
    { type: 'delete-activity', payload: { id: Activity['id'] } }


export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

const localStorageActivities = (): Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        // aquí se maneja la lógica para actualizar el state
        let updatedActivities: Activity[] = []
        if (state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }
    if (action.type === 'set-activeid') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if (action.type === 'delete-activity') {
        const restActivity = state.activities.filter(act => act.id !== action.payload.id)
        return {
            ...state,
            activities: restActivity,
            activeId: ''
        }
    }
    return state
}