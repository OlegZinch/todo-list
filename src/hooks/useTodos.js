import { useContext } from 'react'
import { TodosContext } from '../contexts/TodoContext'

export function useTodos() {
  const ctx = useContext(TodosContext)

  if (ctx === undefined)
    throw new Error(
      'TodosContext was used outside of the TodosContextProvider.'
    )

  return ctx
}
