import TodosContextProvider from './contexts/TodosContextProvider'

import TodoList from './components/TodoList'
import TodoResults from './components/TodoResults'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <TodosContextProvider>
      <TodoList />
      <TodoResults />
      <TodoForm />
    </TodosContextProvider>
  )
}

export default App
