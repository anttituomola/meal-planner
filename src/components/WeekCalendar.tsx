import Weekday from './Weekday'
import cuid from "cuid"
import { Recipe } from "../recipes/types"


type Props = {
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>,
    recipes: Recipe[]
}

const WeekCalendar = ({ setRecipes, recipes }: Props) => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
        <div className="weekdays_container">
            {weekDays.map((day, index) => {
                return (
                    <Weekday day={day} key={cuid()} setRecipes={setRecipes} recipes={recipes} />
                )
            }
            )}
        </div>
    )
}

export default WeekCalendar