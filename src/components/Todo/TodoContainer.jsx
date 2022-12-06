import { useState, useEffect, useRef } from 'react'
import { Col, Container } from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'
import { useTodo } from '../../context/TodoContext'
import RenderDay from './RenderDay'
import TodoInfo from './TodoInfo'

const TodoContainer = () => {
  const { setTextColor } = useTheme()
  const {
    createDayData, showInfo, getUserTodos, onSwap,
  } = useTodo()
  const [count, setCount] = useState(1)
  const allDaysRef = useRef()

  useEffect(() => {
    getUserTodos()
    onSwap(allDaysRef, setCount, count)
  }, [count])

  return (
    <Container>
      <Col className="pt-4 pb-4 d-flex" ref={allDaysRef} id="allDays" style={{ overflow: 'auto' }}>
        {createDayData(count * 30).map((el) => (
          <RenderDay
            key={el}
            day={el.getDate()}
            month={el.getMonth()}
            weekday={el.getDay()}
            year={el.getYear() + 1900}
          />
        ))}
      </Col>
      {showInfo
        ? <TodoInfo />
        : <h1 className={`text-center mt-5 ${setTextColor()}`}>Start your beautiful day with a to-do list!</h1>}
    </Container>
  )
}

export default TodoContainer
