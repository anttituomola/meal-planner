import { useDrag } from 'react-dnd'
import { Recipe } from "../recipes/types"

type Props = {
  recipe: Recipe,
}

const RecipeEl = ({ recipe: { name, id } }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'chore',
    item: { name, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  })

  return (
    <div className='chore_element'
      ref={drag}
      style={{ border: isDragging ? "1px solid lightgreen" : "1px solid lightgrey" }}>
      {name}
    </div>
  )
}
export default RecipeEl