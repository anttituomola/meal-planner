import './App.css'
import ChoreContainer from './components/ChoreContainer'
import WeekCalendar from './components/WeekCalendar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'
import { Recipe } from "./recipes/types"
import { recipes } from "./recipes/recipes"
import ShoppingList from './components/ShoppingList'

function App() {
  const [stateRecipes, setRecipes] = useState<Recipe[]>(recipes)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <WeekCalendar setRecipes={setRecipes} recipes={stateRecipes} />
        <ChoreContainer setRecipes={setRecipes} recipes={stateRecipes} />
        <ShoppingList recipes={stateRecipes} />
      </div>
    </DndProvider>
  )
}

export default App
