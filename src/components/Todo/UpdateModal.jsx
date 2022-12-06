import {
  Button, Modal, InputGroup, Form,
} from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'
import { useTodo } from '../../context/TodoContext'

const UpdateModal = (props) => {
  const { setTextColor, setBackgroundColor } = useTheme()
  const {
    updatedTitle,
    setUpdatedTitle,
    updatedInfo,
    setUpdatedInfo,
    updateTitleAndInfo,
  } = useTodo()

  const onUpdateTitleAndInfo = () => {
    updateTitleAndInfo(props.id)
    props.handleClose()
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header className={`${setBackgroundColor()} ${setTextColor()}`} closeButton>
        <Modal.Title>Update Menu:</Modal.Title>
      </Modal.Header>
      <Modal.Body className={setBackgroundColor()}>
        <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
          <Form.Control
            placeholder="Todo's title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">Info</InputGroup.Text>
          <Form.Control
            as="textarea"
            placeholder="Todo's info"
            value={updatedInfo}
            onChange={(e) => setUpdatedInfo(e.target.value)}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer className={setBackgroundColor()}>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onUpdateTitleAndInfo}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateModal
