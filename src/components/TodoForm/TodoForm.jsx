import { Button, TextInput } from '@carbon/react'
import { useState } from 'react'
import { useTodos } from '../../hooks/useTodos'

import Styles from './TodoForm.module.scss'

function TodoForm() {
  const [task, setTask] = useState('')
  const { addTodo } = useTodos()
  const isDisabled = task.trim().length === 0

  const handleAddTodo = (event) => {
    event.preventDefault()

    if (!isDisabled) {
      const newTodo = { id: Math.random(), label: task, checked: false }
      addTodo(newTodo)
      setTask('')
    }
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo()
    }
  }

  return (
    <form className={Styles.form} onSubmit={handleAddTodo}>
      <TextInput
        placeholder='Enter new task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <Button size='sm' type='submit' disabled={isDisabled}>
        Add task
      </Button>
    </form>
  )
}

export default TodoForm
