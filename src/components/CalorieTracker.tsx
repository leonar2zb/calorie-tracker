import type { Activity } from "../types"

type CalorieTrackerProp = {
    activities: Activity[]
}
export default function CalorieTracker({ activities }: CalorieTrackerProp) {
    return (
        <div>
            Calorie tracker
        </div>)
}