import { useTodos } from '../../hooks/useTodos'

import Styles from './TodoResults.module.scss'

function TodoResults() {
  const { todos } = useTodos()

  const calculateChecked = () => {
    return todos.filter((t) => t.checked).length
  }

  return (
    <div className={Styles.results}>
      Completed Tasks:&nbsp;{calculateChecked()}
    </div>
  )
}

export default TodoResults
