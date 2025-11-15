import { createContext, useState } from 'react'

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

export const TodosContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
})

function TodosContextProvider({ children }) {
  console.log('TodosContextProvider')
  const [todos, setTodos] = useState(() => todosTemplate)

  function addTodo(todo) {
    setTodos((prev) => [...prev, todo])
  }

  function deleteTodo(id) {}

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
