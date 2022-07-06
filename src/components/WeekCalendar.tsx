import Weekday from './Weekday'
import cuid from "cuid"


type Props = {}

const WeekCalendar = (props: Props) => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
        <div className="weekdays_container">
            {weekDays.map((day, index) => {
                return (
                    <Weekday day={day} key={cuid()}/>
                )
            }
            )}
        </div>
    )
}

export default WeekCalendar