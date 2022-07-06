import Chore from "./Chore"

type Props = {}
const ChoreContainer = (props: Props) => {
    const chores = [
        "Gym: legs",
        "Gym: abs",
        "Gym: arms",
        "Clean kitchen",
        "Clean toilets",
        "Clean bedroom",
        "Prepare meals",
    ]

    return (
        <div className="chore_container">
                {chores.map(chore => {
                    return (
                        <div className="chore_element">
                            <Chore chore={chore} />
                        </div>
                    )
                })}
            </div>
    )
}
export default ChoreContainer