
export type Task = {
  id: number
  title: string
  description: string
  isChecking: boolean
}

export type TaskContext = {
  tasks: Task[]
  setTasks: (_task : Task[]) => void
}
