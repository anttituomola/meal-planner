type Props = {
    day: string
}

const Weekday = (props: Props) => {
    return (
        <div>{props.day}</div>
    )
}
export default Weekday