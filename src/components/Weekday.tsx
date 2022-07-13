import { useDrop } from 'react-dnd'
import cuid from "cuid"
import { ChoreType } from "../chores/mandatoryChores"
import { Recipe } from "../recipes/types"
import RecipeEl from "./RecipeEl"

type Props = {
    day: string,
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>,
    recipes: Recipe[]
}

const Weekday = (props: Props) => {

    const [{ isOver }, drop] = useDrop({
        accept: 'chore',
        drop: (item: ChoreType, monitor) => {
            props.setRecipes(props.recipes.map(recipe => {
                if (recipe.id === item.id) {
                    recipe.location = props.day
                    recipe.placed = true
                    console.log(recipe)
                }
                return recipe
            }))
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })


    return (
        <div className={isOver ? "weekday-over" : "weekday"} ref={drop} key={cuid()}>
            <div>{props.day}</div>
            {props.recipes.filter(recipe => recipe.placed === true && recipe.location === props.day).map(recipe => <RecipeEl key={recipe.id} recipe={recipe} />)}
        </div>
    )
}
export default Weekday