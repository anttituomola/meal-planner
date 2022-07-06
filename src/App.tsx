import './App.css'
import ChoreContainer from './components/ChoreContainer'
import WeekCalendar from './components/WeekCalendar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <WeekCalendar />
        <ChoreContainer />
      </div>
    </DndProvider>
  )
}

export default App
