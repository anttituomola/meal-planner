import Chore from "./Chore"
import cuid from "cuid"
import { mandatoryChores, ChoreType } from "../chores/mandatoryChores"

type Props = {}
const ChoreContainer = (props: Props) => {
    return (
        <div className="chore_container">
            {mandatoryChores.map(chore => {
                return (
                    <div className="chore_element" key={cuid()}>
                        <Chore name={chore.name} id={chore.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default ChoreContainer