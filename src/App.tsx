import './App.css'
import ChoreContainer from './components/ChoreContainer'
import WeekCalendar from './components/WeekCalendar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'
import { mandatoryChores, ChoreType } from "./chores/mandatoryChores"

function App() {
  const [chores, setChores] = useState<ChoreType[]>(mandatoryChores)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <WeekCalendar setChores={setChores} chores={chores} />
        <ChoreContainer setChores={setChores} chores={chores} />
      </div>
    </DndProvider>
  )
}

export default App
