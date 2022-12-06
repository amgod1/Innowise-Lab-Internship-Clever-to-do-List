import { Button, Row } from 'react-bootstrap'
import { useLogin } from '../../context/LoginContext'
import FormControl from './FormControl'
import { useTheme } from '../../context/ThemeContext'

const CreateAccountPanel = () => {
  const { setTextColor } = useTheme()
  const {
    mailReg,
    setMailReg,
    passwordReg,
    setPasswordReg,
    onCreateAccount,
  } = useLogin()

  const onMailRegChange = (e) => {
    setMailReg(e.target.value)
  }

  const onPasswordRegChange = (e) => {
    setPasswordReg(e.target.value)
  }

  const registerInput = [
    {
      key: 1, type: 'text', placeholder: 'mail', value: mailReg, onChange: onMailRegChange,
    },
    {
      key: 2, type: 'text', placeholder: 'password', value: passwordReg, onChange: onPasswordRegChange,
    },
  ]

  const registerMenu = registerInput.map((el) => (
    <FormControl
      placeholder={el.placeholder}
      value={el.value}
      onChange={el.onChange}
      key={el.key}
      type={el.type}
    />
  ))

  return (
    <div>
      <Row className={`mt-4 ${setTextColor()}`}>
        Or create new one:
      </Row>
      { registerMenu }
      <Row>
        <Button className="mt-3" onClick={onCreateAccount}>
          Create Account
        </Button>
      </Row>
    </div>
  )
}

export default CreateAccountPanel
