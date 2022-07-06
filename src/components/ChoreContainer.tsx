import Chore from "./Chore"
import { mandatoryChores } from "../chores/mandatoryChores"
import { useState } from "react"
import {ChoreType} from "../chores/mandatoryChores"

type Props = {}
const ChoreContainer = (props: Props) => {
    const [chores, setChores] = useState<ChoreType[]>(mandatoryChores)
    return (
        <div className="chore_container">
            {chores.map(chore => {
                return (
                        <Chore name={chore.name} id={chore.id} key={chore.id}/>
                )
            })}
        </div>
    )
}

export default ChoreContainer