import { IconButton, Checkbox } from '@carbon/react'
import { TrashCan } from '@carbon/react/icons'

import Styles from './TodoItem.module.scss'

function TodoItem({ onClick, checked, onDelete, label, onKeyUp }) {
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
