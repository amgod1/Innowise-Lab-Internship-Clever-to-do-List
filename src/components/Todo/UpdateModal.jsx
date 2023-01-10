import {
  Button, Modal, InputGroup, Form,
} from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'
import { useTodo } from '../../context/TodoContext'

const UpdateModal = ({ id, show, handleClose }) => {
  const { setTextColor, setBackgroundColor } = useTheme()
  const {
    updatedTitle,
    setUpdatedTitle,
    updatedInfo,
    setUpdatedInfo,
    updateTitleAndInfo,
  } = useTodo()

  const onUpdateTitleAndInfo = () => {
    updateTitleAndInfo(id)
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
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
        <Button variant="secondary" onClick={handleClose}>
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
