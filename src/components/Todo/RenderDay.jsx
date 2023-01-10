import { Button, Col } from 'react-bootstrap'
import { useTodo } from '../../context/TodoContext'
import TodoAmount from './TodoAmount'

const RenderDay = ({
  day, month, weekday, year,
}) => {
  const {
    months, weekdays, showTodos, fullDate, showDatabaseDayInfo, todosArray,
  } = useTodo()
  const thisDay = showDatabaseDayInfo(month, day, year)
  const thisDayTodos = (todosArray) ? todosArray.filter((el) => el.date === thisDay) : ''

  return (
    <Col className="d-flex flex-column">
      <Button
        className="border border-primary rounded p-2 mx-2 text-center"
        variant={(fullDate.split(' ').join('-') === thisDay) ? 'primary' : 'outline-primary'}
        style={{ minWidth: '80px' }}
        onClick={() => showTodos(month, day, year, thisDayTodos)}
      >
        <div>{`${months[month]}, ${(day)}`}</div>
        <div>{weekdays[weekday]}</div>
      </Button>
      <div className="d-flex flex-wrap justify-content-center mx-3" style={{ columnGap: '5px' }}>
        {!!thisDayTodos && thisDayTodos.map((el) => <TodoAmount key={el.info.split(' ').join('-')} done={el.done} />)}
      </div>
    </Col>
  )
}

export default RenderDay
