import { useContext } from 'react'
import TaskCard from './TaskCard'
import { TasksContext } from '../../context/TasksContext'

const TasksList = () => {
  const { tasks } = useContext(TasksContext)

  return (
    tasks.map(task => <TaskCard task={task} key={task.id} />)
  )
}

export default TasksList
