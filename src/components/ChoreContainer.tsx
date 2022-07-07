import { ChoreType } from "../chores/mandatoryChores"
import Chore from "./Chore"

type Props = {
    chores: ChoreType[],
}
const ChoreContainer = ({ chores }: Props) => {

    return (
        <div className="chore_container">
            {chores.filter(chore => chore.placed === false).map(chore => {
                return (
                    <Chore chore={chore} key={chore.id} />
                )
            })}
        </div>
    )
}

export default ChoreContainer