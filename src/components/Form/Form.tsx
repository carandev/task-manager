import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { TasksContext } from "../../context/TasksContext"

const Form = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const {tasks, setTasks} = useContext(TasksContext)

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault() 

    setTasks([...tasks,{
      id: Math.random() * 100,
      title: title || '',
      description: description || '',
      isChecking: false
    }])

    setTitle('')
    setDescription('')
  }

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value, id} = target 

    id === 'title' ? setTitle(value) : setDescription(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={title} type='text' id='title' onChange={handleChange} label='Título de la tarea' />
      <Input value={description} type='text' id='description' onChange={handleChange} label='Descripción' />
      <Button label='Agregar tarea' />
    </form>
  )
}

export default Form
