import { createContext } from 'react'
import { TodoItem } from './TodosContextProvider'

export interface TodosContextType {
  todos: TodoItem[]
  toggleTodo: (id: number) => void
  addTodo: (todo: TodoItem) => void
  deleteTodo: (id: number) => void
}

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined
)
