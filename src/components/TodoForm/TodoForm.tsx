import { Button, TextInput } from '@carbon/react'
import { useState } from 'react'
import { useTodos } from '../../hooks/useTodos'
import { TodoItem } from '../../contexts/TodosContextProvider'

import Styles from './TodoForm.module.scss'

function TodoForm() {
  const [task, setTask] = useState<string>('')
  const { addTodo } = useTodos()
  const isDisabled = task.trim().length === 0

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault()
    if (!isDisabled) {
      const newTodo: TodoItem = {
        id: Math.random(),
        label: task,
        checked: false,
      }
      addTodo(newTodo)
      setTask('')
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      handleAddTodo(event as unknown as React.FormEvent)
    }
  }

  return (
    <form className={Styles.form} onSubmit={handleAddTodo}>
      <TextInput
        id='new-task'
        labelText='Add new task'
        hideLabel={true}
        placeholder='Enter new task'
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTask(e.target.value)
        }
        onKeyUp={handleKeyUp}
      />
      <Button
        className={Styles.btn}
        size='sm'
        type='submit'
        disabled={isDisabled}
      >
        Add task
      </Button>
    </form>
  )
}

export default TodoForm
