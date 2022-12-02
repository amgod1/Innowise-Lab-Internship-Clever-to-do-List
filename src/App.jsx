import Header from './components/Header/Header'
import LogIn from './components/Login/LogIn'
import TodoContainer from './components/Todo/TodoContainer'
import { useLogin } from './context/LoginContext'

const App = () => {
  const { user } = useLogin()
  return (
    <>
      <Header />
      {!user
        ? <LogIn />
        : <TodoContainer />
      }
    </>
  )
}

export default App
