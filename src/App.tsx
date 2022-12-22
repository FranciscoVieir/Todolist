import { useState } from 'react'
import Header from './Components/Header'
import TaskMenu from './Components/TaskMenu'

export interface ITasks {
  id: string,
  title: string,
  isChecked: boolean,
}

function App() {
  const [tasksTodo, setTasksTodo] = useState<ITasks[]>([{
    id: '1',
    title: 'ola',
    isChecked: true,
  },
  {
    id: '2',
    title: 'Teste 2',
    isChecked: false,
  }]);

  function addTask(taskTitle: string) {
    setTasksTodo([
      ...tasksTodo,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isChecked: false,
      },
    ]);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <TaskMenu tasksTodo={tasksTodo} />
    </div>
  )
}

export default App
