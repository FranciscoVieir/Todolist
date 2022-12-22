import todoLogo from '../../assets/Logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './Header.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export default function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles['header']}>
      <img
        src={todoLogo}
        alt="Todo Logotipo"
      />

      <form
        className={styles.taskForm}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
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
