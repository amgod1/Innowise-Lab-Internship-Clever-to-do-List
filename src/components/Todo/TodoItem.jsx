import { useState } from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import { useTodo } from '../../context/TodoContext'
import UpdateModal from './UpdateModal'

const TodoItem = (props) => {
  const {
    setDoneUndone, removeTodo, setUpdatedTitle, setUpdatedInfo,
  } = useTodo()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setUpdatedTitle(props.title)
    setUpdatedInfo(props.info)
    setShow(true)
  }

  return (
    <>
      <UpdateModal handleClose={handleClose} show={show} id={props.id} />
      <ListGroup className="mt-4 mb-3">
        <ListGroup.Item variant={props.done ? 'success' : 'danger'}>
          <h4>
            {props.done
              ? <s>{props.title}</s>
              : props.title}
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>{props.info}</ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <Button onClick={() => setDoneUndone(props.id, props.done)}>
              Mark as
              {props.done
                ? ' undone'
                : ' done'}
            </Button>
            <ButtonGroup>
              <Button variant="light" onClick={handleShow}>Edit</Button>
              <Button variant="danger" onClick={() => removeTodo(props.id)}>Delete</Button>
            </ButtonGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default TodoItem
