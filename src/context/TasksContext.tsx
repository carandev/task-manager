import { PropsWithChildren, createContext, useState } from "react"
import { Task, TaskContext } from "../types"

export const TasksContext = createContext<TaskContext>({
  tasks: [],
  setTasks: () => {}
})

const TasksContextProvider = ({children} : PropsWithChildren) => {

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1', isChecking: false },
    { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2', isChecking: true },
    { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3', isChecking: false }
  ])

  return (
    <TasksContext.Provider value={{tasks, setTasks}} >
      {children}
    </TasksContext.Provider>
  )
}

export default  TasksContextProvider
