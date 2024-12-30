import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed: number
    caloriesBurned: number
    netCalories: number
}
export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    // const { activities } = state

    const caloriesConsumed = useMemo(() => state.activities.reduce((total, act) => act.category === 1 ? total + act.calories : total, 0), [state.activities])
    const caloriesBurned = useMemo(() => state.activities.reduce((total, act) => act.category === 2 ? total + act.calories : total, 0), [state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [state.activities])

    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            netCalories
        }
        }>
            {children}
        </ActivityContext.Provider>
    )
}