import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'

const TodoItem = (props) => {
  return (
    <>
      <ListGroup className='mt-4 mb-3'>
        <ListGroup.Item variant={props.done ? 'success' : 'danger'}>
          <h4>
            {props.done 
              ? <s>{props.title}</s>
              : <>{props.title}</>
            }
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>{props.info}</ListGroup.Item>
        <ListGroup.Item>
          <div className='d-flex justify-content-between'>
            <Button onClick={() => console.log(props.id, props.done)}>
              Mark as
              {props.done 
                ? ' undone'
                : ' done'
              }
            </Button>
            <ButtonGroup>
              <Button variant="light">Edit</Button>
              <Button variant="danger">Delete</Button>
            </ButtonGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default TodoItem