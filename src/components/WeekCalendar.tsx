
type Props = {}

const WeekCalendar = (props: Props) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
        <div className="weekdays_container">
            {weekDays.map((day, index) => {
                return (
                    <div className="weekday" key={index}>
                        <h3>{day}</h3>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default WeekCalendar