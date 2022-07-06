import { useDrag } from 'react-dnd'

type Props = {
  id: number,
  name: string
}

const Chore = (props: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'chore',
    item: { chore: props.name, id: props.id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div ref={drag} style={{border: isDragging ? "4px solid red" : "0px"}}>{props.name}</div>
  )
}
export default Chore