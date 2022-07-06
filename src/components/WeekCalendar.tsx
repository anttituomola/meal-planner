import Weekday from './Weekday'

type Props = {}

const WeekCalendar = (props: Props) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
        <div className="weekdays_container">
            {weekDays.map((day, index) => {
                return (
                    <div className="weekday" key={index}>
                        <Weekday day={day} />
                    </div>
                )
            }
            )}
        </div>
    )
}

export default WeekCalendar