import { Container, Alert } from 'react-bootstrap'
import { useLogin } from '../../context/LoginContext'
import LogInPanel from './LogInPanel'
import CreateAccountPanel from './CreateAccountPanel'

const LogIn = () => {
  const { text, show } = useLogin()
  return (
    <Container>
      {!!show
        && (
        <Alert className="mt-4 text-center" variant="danger">
          {text}
        </Alert>
        )}
      <Container className="d-flex justify-content-around flex-column flex-md-row">
        <LogInPanel />
        <CreateAccountPanel />
      </Container>
    </Container>
  )
}

export default LogIn
