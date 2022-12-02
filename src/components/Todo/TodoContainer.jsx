import { Col, Container } from 'react-bootstrap'
import { useTodo } from '../../context/TodoContext'
import RenderDay from './RenderDay'
import TodoInfo from './TodoInfo'

const TodoContainer = () => {
  const { createDayData, showInfo } = useTodo()
  return (
    <Container>
      <Col className='mt-4 pb-4 d-flex' style={{overflow: "auto"}}>
        {createDayData(30).map(el => 
          <RenderDay
            key={el}
            day={el.getDate()}
            month={el.getMonth()}
            weekday={el.getDay()}
            year={el.getYear() + 1900}
          />)
        }
      </Col>
      {!!showInfo && <TodoInfo />}
    </Container>
  )
}

export default TodoContainer