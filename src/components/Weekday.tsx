import { useState } from 'react'
import { useDrop } from 'react-dnd'
import cuid from "cuid"
import { ChoreType } from "../chores/mandatoryChores"

type Props = {
    day: string
}

const Weekday = (props: Props) => {
    const [chores, setChores] = useState<ChoreType[]>([])

    const [{ isOver }, drop] = useDrop({
        accept: 'chore',
        drop: (item: ChoreType) => {
            setChores([...chores, item])
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div className="weekday" ref={drop} key={cuid()}>
            <div>{props.day}</div>
            {chores.map(chore => <div key={cuid()}>{chore.name}</div>)}
        </div>
    )
}
export default Weekday