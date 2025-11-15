import { useTodos } from '../../hooks/useTodos'
import Styles from './TodoResults.module.scss'
import { TodoItem } from '../../contexts/TodosContextProvider'

function TodoResults() {
  const { todos } = useTodos()

  const calculateChecked = (): number => {
    return (todos as TodoItem[]).filter((t) => t.checked).length
  }

  return (
    <div className={Styles.results}>
      Completed Tasks:&nbsp;{calculateChecked()}
    </div>
  )
}

export default TodoResults


