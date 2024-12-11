import { useMemo } from "react"
import type { Activity } from "../types"

type CalorieTrackerProp = {
    activities: Activity[]
}
export default function CalorieTracker({ activities }: CalorieTrackerProp) {
    const caloriesComsumed = useMemo(() => activities.reduce((total, act) => act.category === 1 ? total + act.calories : total, 0), [activities])
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                <span className="font-black text-6xl text-orange-300">{caloriesComsumed}</span>
                Consumidas</p>
        </>)
}