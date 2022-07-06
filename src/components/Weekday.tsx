import { useState } from 'react'
import { useDrop } from 'react-dnd'
import cuid from "cuid"

type Props = {
    day: string
}

const Weekday = (props: Props) => {
    const [chores, setChores] = useState<string[]>([])

    const [{ isOver }, drop] = useDrop({
        accept: 'chore',
        drop: (item: any) => {
            setChores([...chores, item.chore])
            console.log(item.chore)
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div className="weekday" ref={drop} key={cuid()}>
            <div>{props.day}</div>
            {chores.map(chore => <div key={cuid()}>{chore}</div>)}
        </div>
    )
}
export default Weekday