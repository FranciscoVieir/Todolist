import todoLogo from '../../assets/Logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles['header']}>
      <img
        src={todoLogo}
        alt="Todo Logotipo"
      />

      <form className={styles.taskForm}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
        />

        <button
        >
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
