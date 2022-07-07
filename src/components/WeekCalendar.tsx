import Weekday from './Weekday'
import cuid from "cuid"
import { ChoreType } from '../chores/mandatoryChores'


type Props = {
    setChores: React.Dispatch<React.SetStateAction<ChoreType[]>>,
    chores: ChoreType[]
}

const WeekCalendar = ({ setChores, chores }: Props) => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
        <div className="weekdays_container">
            {weekDays.map((day, index) => {
                return (
                    <Weekday day={day} key={cuid()} setChores={setChores} chores={chores} />
                )
            }
            )}
        </div>
    )
}

export default WeekCalendar