import Form from './components/Form/Form'
import TasksList from './components/Tasks/TasksList'
import TasksContextProvider from './context/TasksContext'

const App = () => {

  return (
    <>
      <TasksContextProvider>
        <TasksList />
        <Form />
      </TasksContextProvider>
    </>
  )
}

export default App
