import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeid', payload: { id: Activity['id'] } }


type ActivityState = {
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
        console.log('desde el type save-actitity')
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }
    if (action.type === 'set-activeid') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }
    return state
}