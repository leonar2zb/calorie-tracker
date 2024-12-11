import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProp = {
    activities: Activity[]
}
export default function CalorieTracker({ activities }: CalorieTrackerProp) {
    const caloriesConsumed = useMemo(() => activities.reduce((total, act) => act.category === 1 ? total + act.calories : total, 0), [activities])
    const caloriesBurned = useMemo(() => activities.reduce((total, act) => act.category === 2 ? total + act.calories : total, 0), [activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay calorie={caloriesConsumed} text="Consumidas" />
                <CalorieDisplay calorie={caloriesBurned} text="Quemadas" />
                <CalorieDisplay calorie={netCalories} text="Diferencia" />
            </div>
        </>)
}