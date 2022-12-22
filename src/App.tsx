import { useEffect, useState } from 'react'
import Header from './Components/Header'
import TaskMenu from './Components/TaskMenu'

const LOCAL_STORAGE_KEY = 'todoSavedTasks';
export interface ITasks {
  id: string,
  title: string,
  isChecked: boolean,
}


function App() {
  const [tasksTodo, setTasksTodo] = useState<ITasks[]>([]);

  function loadingSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasksTodo(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadingSavedTasks();
  }, [])

  function setTasksAndSave(newTasks: ITasks[]) {
    setTasksTodo(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasksTodo,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isChecked: false,
      },
    ]);
  }

  function toggleTaskChecked(taskId: string) {
    const newTasks = tasksTodo.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }


  function deleteTaskById(taskId: string) {
    const taskWithoutDeleted = tasksTodo.filter((task) => task.id !== taskId);
    setTasksAndSave(taskWithoutDeleted);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <TaskMenu
        tasksTodo={tasksTodo}
        onDelete={deleteTaskById}
        onChecked={toggleTaskChecked}
      />
    </div>
  )
}

export default App
