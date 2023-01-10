import { useState } from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import { useTodo } from '../../context/TodoContext'
import UpdateModal from './UpdateModal'

const TodoItem = ({
  id, title, info, done,
}) => {
  const {
    setDoneUndone, removeTodo, setUpdatedTitle, setUpdatedInfo,
  } = useTodo()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setUpdatedTitle(title)
    setUpdatedInfo(info)
    setShow(true)
  }

  return (
    <>
      <UpdateModal handleClose={handleClose} show={show} id={id} />
      <ListGroup className="mt-4 pb-3">
        <ListGroup.Item variant={done ? 'success' : 'danger'}>
          <h4>
            {done
              ? <s>{title}</s>
              : title}
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>{info}</ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <Button onClick={() => setDoneUndone(id, done)}>
              Mark as
              {done
                ? ' undone'
                : ' done'}
            </Button>
            <ButtonGroup>
              <Button variant="light" onClick={handleShow}>Edit</Button>
              <Button variant="danger" onClick={() => removeTodo(id)}>Delete</Button>
            </ButtonGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default TodoItem
