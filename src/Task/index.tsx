import styles from './Task.module.css';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ITasks } from '../App';

interface Props {
  task: ITasks;
  onDelete: (taskId: string) => void;
  onChecked: (taskId: string) => void;
}

export default function Task({ task, onDelete, onChecked }: Props) {

  return (
    <div className={styles['task']}>
      <button
        className={styles['checkContainer']}
        onClick={() => onChecked(task.id)}
      >
        {task.isChecked ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isChecked ? styles.textChecked : ''}>
        {task.title}
      </p>
      <button
        className={styles['deleteButton']}
        onClick={() => onDelete(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  )
}
