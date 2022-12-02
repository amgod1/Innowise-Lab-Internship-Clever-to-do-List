import React from 'react'
import { useLogin } from '../../context/LoginContext'
import { Button, Row } from 'react-bootstrap'
import FormControl from './FormControl'


const CreateAccountPanel = () => {
  const {
    mailReg,
    setMailReg,
    passwordReg,
    setPasswordReg,
    onCreateAccount
  } = useLogin()

  const onMailRegChange = (e) => {
    setMailReg(e.target.value)
  }

  const onPasswordRegChange = (e) => {
    setPasswordReg(e.target.value)
  }

  const registerInput = [
    {key: 1, type: 'text', placeholder: 'mail', value: mailReg, onChange: onMailRegChange},
    {key: 2, type: 'text', placeholder: 'password', value: passwordReg, onChange: onPasswordRegChange}
  ]

  const registerMenu = registerInput.map(el => 
    <FormControl 
        placeholder={el.placeholder} 
        value={el.value} 
        onChange={el.onChange} 
        key={el.key} 
        type={el.type} 
    />
  )

  return (
    <div>
    <Row className='mt-5'>
      Or create new one:
    </Row>
    { registerMenu }
    <Row>
      <Button className='mt-3' onClick={ onCreateAccount }>
        Create Account
      </Button>
    </Row>
    </div>
  )
}

export default CreateAccountPanel