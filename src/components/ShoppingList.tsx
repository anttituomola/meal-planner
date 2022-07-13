import { Recipe } from "../recipes/types"
import cuid from "cuid"

type Props = {
    recipes: Recipe[],
}
const ShoppingList = ({ recipes }: Props) => {
    // Get placed recipes
    const placedRecipes = recipes.filter(recipe => recipe.placed === true)
    // Get all ingredients from placedRecipes
    const ingredients = placedRecipes.map(recipe => recipe.ingredients).flat()
    const renderIngredients = ingredients.map(ingredient => {
        return (
            <li key={cuid()}>{ingredient.name}: {ingredient.quantity} {ingredient.unit}</li>
        )
    })

    return (
        <div>
            <h1>Shopping List</h1>
            {renderIngredients}
        </div>
    )
}
export default ShoppingList