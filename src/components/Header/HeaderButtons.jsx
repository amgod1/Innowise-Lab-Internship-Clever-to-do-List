import {
  Button, Col, Container, Row,
} from 'react-bootstrap'
import { useLogin } from '../../context/LoginContext'

const HeaderButtons = () => {
  const { user, onLogOut } = useLogin()
  return (
    <Container>
      <Row className="mx-1 d-flex justify-content-between">
        <Col className="d-flex align-items-center">
          {!!user
            && <h6 className="text-white mt-2">{user}</h6>}
        </Col>
        <Col className="d-flex justify-content-end">
          {!!user
          && (
          <Button variant="light" onClick={onLogOut}>
            Log Out
          </Button>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderButtons
