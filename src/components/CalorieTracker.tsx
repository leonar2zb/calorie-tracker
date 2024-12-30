import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../types/hooks/useActivity"

export default function CalorieTracker() {
    const { caloriesConsumed, caloriesBurned, netCalories } = useActivity()
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