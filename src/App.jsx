import Header from './components/Header/Header'
import LogIn from './components/Login/LogIn'
import TodoContainer from './components/Todo/TodoContainer'
import { useLogin } from './context/LoginContext'
import { useTheme } from './context/ThemeContext'

const App = () => {
  const { user } = useLogin()
  const { setBackgroundColor } = useTheme()
  return (
    <div className={setBackgroundColor()} id="app">
      <Header />
      {!user
        ? <LogIn />
        : <TodoContainer />}
    </div>
  )
}

export default App
