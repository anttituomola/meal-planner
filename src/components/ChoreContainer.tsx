import { ChoreType } from "../chores/mandatoryChores"
import Chore from "./Chore"
import { useDrop } from 'react-dnd'

type Props = {
    setChores: React.Dispatch<React.SetStateAction<ChoreType[]>>,
    chores: ChoreType[],
}
const ChoreContainer = ({ setChores, chores }: Props) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'chore',
        drop: (item: ChoreType, monitor) => {
            setChores(chores.map(chore => {
                if (chore.id === item.id) {
                chore.placed = false
                chore.location = "ChoreContainer"
                }
                return chore
            }
            ))
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div className={isOver ? "chore_container_over" : "chore_container"} ref={drop}>
            {chores.filter(chore => chore.placed === false && chore.location === "ChoreContainer").map(chore => {
                return (
                    <Chore chore={chore} key={chore.id} />
                )
            })}
        </div>
    )
}

export default ChoreContainer