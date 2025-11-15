import { Heading } from '@carbon/react'
import { useTodos } from '../../hooks/useTodos'
import TodoItem from '../TodoItem'
import Styles from './TodoList.module.scss'
import { TodoItem as TodoType } from '../../contexts/TodosContextProvider'

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodos()

  const toggleCheck = (id: number) => {
    toggleTodo(id)
  }

  const handleKeyUp = (event: React.KeyboardEvent, id: number) => {
    if (event.keyCode === 13) {
      toggleCheck(id)
    }
  }

  const handleDelete = (id: number) => {
    deleteTodo(id)
  }

  return (
    <div className={Styles.list}>
      <Heading className={Styles.title}>Things to do:</Heading>
      {todos.length > 0 ? (
        <div className={Styles.content}>
          {todos.map((todo: TodoType) => (
            <TodoItem
              key={todo.id}
              label={todo.label}
              checked={todo.checked}
              onClick={() => toggleCheck(todo.id)}
              onKeyUp={(e) => handleKeyUp(e, todo.id)}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </div>
      ) : (
        <div className={Styles.noTodos}>
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  )
}

export default TodoList


