import rocketLogo from '../../assets/rocket.svg'
import todoLogo from '../../assets/todo.svg'

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles['container-header']}>
      <img
        src={rocketLogo}
        alt="Rocket Logo"
        className={styles['rocket-logo']}
      />
      <div>

        <img
          src={todoLogo}
          alt="Logo todolist"
          className={styles['todo-logo']}
        />
      </div>
    </header>
  )
}
