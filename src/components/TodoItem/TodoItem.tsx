import { IconButton, Checkbox } from '@carbon/react'
import { TrashCan } from '@carbon/react/icons'
import Styles from './TodoItem.module.scss'

interface TodoItemProps {
  onClick: () => void
  checked: boolean
  onDelete: () => void
  label: string
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

function TodoItem({ onClick, checked, onDelete, label, onKeyUp }: TodoItemProps) {
  return (
    <div className={Styles.item}>
      <Checkbox
        labelText={label}
        id={`checkbox-label-${label}`}
        onChange={onClick}
        checked={checked}
        onKeyUp={onKeyUp}
      />
      <IconButton size='sm' label='delete' onClick={onDelete}>
        <TrashCan />
      </IconButton>
    </div>
  )
}

export default TodoItem


