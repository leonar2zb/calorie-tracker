import { useMemo } from "react"
import type { Activity } from "../types"

type CalorieTrackerProp = {
    activities: Activity[]
}
export default function CalorieTracker({ activities }: CalorieTrackerProp) {
    const caloriesConsumed = useMemo(() => activities.reduce((total, act) => act.category === 1 ? total + act.calories : total, 0), [activities])
    const caloriesBurned = useMemo(() => activities.reduce((total, act) => act.category === 2 ? total + act.calories : total, 0), [activities])
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-orange-50">{caloriesConsumed}</span>
                    Consumidas</p>
                <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-orange-50">{caloriesBurned}</span>
                    Quemadas</p>
            </div>
        </>)
}