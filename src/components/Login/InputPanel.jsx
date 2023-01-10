import { Button, Row } from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'
import { useLogin } from '../../context/LoginContext'
import FormControl from './FormControl'

const InputPanel = ({ inputType }) => {
  const { setTextColor } = useTheme()
  const {
    mailIn,
    setMailIn,
    passwordIn,
    setPasswordIn,
    onLoginIn,
    mailReg,
    setMailReg,
    passwordReg,
    setPasswordReg,
    onCreateAccount,
  } = useLogin()

  const sampleInput = inputType === 'login' ? [
    {
      key: 1, type: 'text', placeholder: 'mail', value: mailIn, onChange: (e) => setMailIn(e.target.value),
    },
    {
      key: 2, type: 'password', placeholder: 'password', value: passwordIn, onChange: (e) => setPasswordIn(e.target.value),
    },
  ] : [
    {
      key: 1, type: 'text', placeholder: 'mail', value: mailReg, onChange: (e) => setMailReg(e.target.value),
    },
    {
      key: 2, type: 'text', placeholder: 'password', value: passwordReg, onChange: (e) => setPasswordReg(e.target.value),
    },
  ]

  return (
    <div>
      <Row className={`mt-4 ${setTextColor()}`}>
        {inputType === 'login'
          ? 'Log in to your account:'
          : 'Or create new one:'}
      </Row>
      {sampleInput.map((el) => (
        <FormControl
          placeholder={el.placeholder}
          value={el.value}
          onChange={el.onChange}
          key={el.key}
          type={el.type}
        />
      ))}
      <Row>
        <Button className="mt-3" onClick={inputType === 'login' ? onLoginIn : onCreateAccount}>
          {inputType === 'login' ? 'Log In' : 'Create Account'}
        </Button>
      </Row>
    </div>
  )
}

export default InputPanel
