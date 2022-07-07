import { useState } from 'react'
import { useDrop } from 'react-dnd'
import cuid from "cuid"
import { ChoreType } from "../chores/mandatoryChores"
import Chore from "./Chore"

type Props = {
    day: string,
    setChores: React.Dispatch<React.SetStateAction<ChoreType[]>>,
    chores: ChoreType[]
}

const Weekday = (props: Props) => {
    const [weekdayChores, setWeekdayChores] = useState<ChoreType[]>([])

    const [{ isOver }, drop] = useDrop({
        accept: 'chore',
        drop: (item: ChoreType, monitor) => {
            props.setChores(props.chores.map(chore => {
                if (chore.id === item.id) {
                    chore.location = props.day
                    chore.placed = true
                    console.log(chore)
                }
                console.log(props.chores)
                return chore
            }))
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })


    return (
        <div className={isOver ? "weekday-over" : "weekday"} ref={drop} key={cuid()}>
            <div>{props.day}</div>
            {props.chores.filter(chore => chore.placed === true && chore.location === props.day).map(chore => <Chore chore={chore}/>)}
        </div>
    )
}
export default Weekday