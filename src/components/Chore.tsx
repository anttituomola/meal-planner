import { useDrag } from 'react-dnd'
import { ChoreType } from "../chores/mandatoryChores"

type Props = {
  chore: ChoreType,
}

const Chore = ({ chore: { name, id } }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'chore',
    item: { name, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  })

  return (
    <div className='chore_element' ref={drag} style={{ border: isDragging ? "1px solid lightgreen" : "1px solid lightgrey" }}>{name}</div>
  )
}
export default Chore