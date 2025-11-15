import { useState } from 'react'
import { TodosContext } from './TodoContext'

const todosTemplate = [
  {
    id: 0,
    label: 'Fix an ability to display all tasks',
    checked: false,
  },
  {
    id: 1,
    label: 'Fix a layout, checkboxes should be listed in a column',
    checked: false,
  },
  {
    id: 2,
    label: 'Fix an ability to add a new task',
    checked: false,
  },
  {
    id: 3,
    label: 'Fix an ability to toggle a task',
    checked: false,
  },
  {
    id: 4,
    label: 'Fix an ability to delete a task',
    checked: false,
  },
  {
    id: 5,
    label: 'Fix an ability to count completed tasks',
    checked: false,
  },
]

function TodosContextProvider({ children }) {
  const [todos, setTodos] = useState(() => todosTemplate)

  function addTodo(todo) {
    setTodos((prev) => [...prev, todo])
  }

  function toggleTodo(id) {
    const index = todos.findIndex((t) => t.id === id)
    const newItem = { ...todos[index], checked: !todos[index].checked }
    const newTodos = [
      ...todos.slice(0, index),
      newItem,
      ...todos.slice(index + 1),
    ]
    setTodos(newTodos)
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((t) => t.id !== id)
    setTodos(newTodos)
  }

  return (
    <TodosContext.Provider value={{ todos, toggleTodo, addTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
