import RecipeEl from "./RecipeEl"
import { useDrop } from 'react-dnd'
import { Recipe } from "../recipes/types"

type Props = {
    setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>,
    recipes: Recipe[],
}
const ChoreContainer = ({ setRecipes, recipes }: Props) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'chore',
        drop: (item: Recipe, monitor) => {
            setRecipes(recipes.map(recipe => {
                if (recipe.id === item.id) {
                    recipe.placed = false
                    recipe.location = "ChoreContainer"
                }
                return recipe
            }
            ))
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div className={isOver ? "chore_container_over" : "chore_container"} ref={drop}>
            {recipes.filter(recipe => recipe.placed === false && recipe.location === "ChoreContainer").map(recipe => {
                return (
                    <RecipeEl recipe={recipe} key={recipe.id} />
                )
            })}
        </div>
    )
}

export default ChoreContainer