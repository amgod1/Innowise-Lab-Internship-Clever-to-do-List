import { useState, useEffect } from 'react'
import { Button, Col } from 'react-bootstrap'
import { useTodo } from '../../context/TodoContext'
import TodoAmount from './TodoAmount'

const RenderDay = (props) => {
  const { months, weekdays, showTodos, getDataFromThisDay } = useTodo()
  const [thisDayTodos, setThisDayTodos] = useState('')
  
  useEffect(() => {
    getDataFromThisDay(props.month, props.day, props.year, setThisDayTodos)
  }, [])

  return (
    <Col className='d-flex flex-column'>
      <Button
        className='border border-primary rounded p-2 mx-2 text-center'
        variant="outline-primary"
        style={{minWidth: "80px"}}
        onClick={() => showTodos(props.month, props.day, props.year, thisDayTodos)}
      >
        <div>{`${months[props.month]}, ${(props.day)}`}</div>
        <div>{weekdays[props.weekday]}</div>
      </Button>
      <div className='d-flex flex-wrap justify-content-around'>
        {!!thisDayTodos && thisDayTodos.map(el => 
          <TodoAmount key={el.info.split(' ').join('-')} done={el.done} />
        )}
      </div>
    </Col>

  )
}

export default RenderDay