import { PropsWithChildren } from 'react'
import Task from '../../Task'
import styles from './TaskMenu.module.css'
import { ITasks } from '../../App'

interface Props {
  tasksTodo: ITasks[],
}

export default function TaskMenu({ tasksTodo }: Props) {
  const taskQuantity = tasksTodo.length;
  const completedTasks = tasksTodo.filter((task) => task.isChecked).length

  return (
    <section className={styles['tasks']}>
      <header className={styles['header']}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles['textPurple']}>Concluídas</p>
          <span>{completedTasks} de {taskQuantity}</span>
        </div>
      </header>

      <div className={styles['list']}>
        {tasksTodo.map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </section>
  )
}
