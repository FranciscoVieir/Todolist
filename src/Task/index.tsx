import styles from './Task.module.css'
import { TbTrash } from 'react-icons/tb'
import { ITasks } from '../App'

interface Props {
  task: ITasks
}

export default function Task({ task }: Props) {
  return (
    <div className={styles['task']}>
      <button
        className={styles['checkContainer']}
      >
        <div />
      </button>

      <p>
        {task.title}
      </p>
      <button
        className={styles['deleteButton']}
      >
        <TbTrash size={20} />
      </button>
    </div>
  )
}
