import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeid', payload: { id: Activity['id'] } }


export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        // aquí se maneja la lógica para actualizar el state
        // Esta idea filtro y exluyo(si existe) el del id y luego siempre se agrega el nuevo
        const restOfActivities = state.activities.filter(act => act.id !== action.payload.newActivity.id)
        return {
            ...state,
            activities: [...restOfActivities, action.payload.newActivity]
        }
        /*return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }*/
    }
    if (action.type === 'set-activeid') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }
    return state
}