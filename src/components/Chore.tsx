import { useDrag, useDrop } from 'react-dnd'

type Props = {
  id: number,
  name: string
}

const Chore = (props: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'chore',
    item: { name: props.name, id: props.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div className='chore_element' ref={drag} style={{border: isDragging ? "1px solid lightgreen" : "1px solid lightgrey"}}>{props.name}</div>
  )
}
export default Chore