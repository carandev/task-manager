import { ChangeEvent, useContext } from 'react'
import { Task } from '../../types'
import { TasksContext } from '../../context/TasksContext'

type Props = {
  task: Task
}

const TaskCard = ({task}: Props) => {

  const {tasks, setTasks} = useContext(TasksContext)

  const handleChange = ({target} : ChangeEvent<HTMLInputElement>) => {

    const taskIndex = tasks.findIndex(currentTask => currentTask.id === task.id)
    const newTasks = tasks
    newTasks[taskIndex] = { ...task, isChecking: target.checked }
    // newTasks.splice(taskIndex, 1, {...task, isChecking: target.checked})

    setTasks([...newTasks])
  }

  return (
    <section style={{textDecoration: task.isChecking ? 'line-through' : 'none'}}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <input type="checkbox" checked={task.isChecking} onChange={handleChange} />
    </section>
  )
}

export default TaskCard
