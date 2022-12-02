import { Container } from 'react-bootstrap'
import { useTodo } from '../../context/TodoContext'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

const TodoInfo = () => {
  const { fullDate, currentDayTodos } = useTodo()
  return (
    <Container className='mt-4'>
      <h1>Todos for {fullDate}:</h1>
      <CreateTodo />
      {!!currentDayTodos && currentDayTodos.map(el => 
        <TodoItem 
          key={el.info.split(' ').join('-')} 
          title={el.title} 
          info={el.info}
          done={el.done}
          id={el.id}
        />
      )}
    </Container>
  )
}

export default TodoInfo