import React from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import { useTodo } from '../../context/TodoContext'

const CreateTodo = () => {
  const { title, setTitle, info, setInfo, createTodo } = useTodo()
  return (
    <Card
      bg='light'
      text='dark'
      className="mt-4"
    >
      <Card.Body>
        <Card.Title className='mb-4'>Create new todo:</Card.Title>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
              placeholder="Todo's title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1">Info</InputGroup.Text>
            <Form.Control
              placeholder="Todo's info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </InputGroup>
          <div className='d-flex justify-content-end'>
            <Button onClick={createTodo}>
              Create
            </Button>
          </div>
      </Card.Body>
    </Card>
  )
}

export default CreateTodo