import { PropsWithChildren } from 'react'
import Task from '../../Task'
import styles from './TaskMenu.module.css'
import { ITasks } from '../../App'
import { TbClipboardText } from 'react-icons/tb';

interface Props {
  tasksTodo: ITasks[],
  onDelete: (taskID: string) => void;
  onChecked: (taskID: string) => void;
}

export default function TaskMenu({ tasksTodo, onDelete, onChecked }: Props) {
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
            onDelete={onDelete}
            onChecked={onChecked}
          />
        ))}

        {tasksTodo.length <= 0 && (
          <section className={styles['empty']}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
