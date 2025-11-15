import TodosContextProvider from './contexts/TodoContext'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <TodosContextProvider>
      <TodoList />
      <TodoForm />
    </TodosContextProvider>
  )
}

export default App
