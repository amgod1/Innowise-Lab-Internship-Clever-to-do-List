import { Container } from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'
import { useTodo } from '../../context/TodoContext'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

const TodoInfo = () => {
  const { setTextColor } = useTheme()
  const { fullDate, todosArray } = useTodo()
  const thisDayTodos = (todosArray) ? todosArray.filter((el) => el.date === fullDate.split(' ').join('-')) : ''
  return (
    <Container className="mt-4">
      <h1 className={setTextColor()}>
        Todos for
        {' '}
        {fullDate}
        :
      </h1>
      <CreateTodo />
      {!!thisDayTodos && thisDayTodos.map((el) => (
        <TodoItem
          key={el.info.split(' ').join('-')}
          title={el.title}
          info={el.info}
          done={el.done}
          id={el.id}
        />
      ))}
    </Container>
  )
}

export default TodoInfo
