import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useLogin } from '../../context/LoginContext'
import FormControl from './FormControl'

const LogInPanel = () => {
  const {
    mailIn,
    setMailIn,
    passwordIn,
    setPasswordIn,
    onLoginIn
  } = useLogin()

  const onMailInChange = (e) => {
    setMailIn(e.target.value)
  }

  const onPasswordInChange = (e) => {
    setPasswordIn(e.target.value)
  }

  const loginInput = [
    {key: 1, type: 'text', placeholder: 'mail', value: mailIn, onChange: onMailInChange},
    {key: 2, type: 'password', placeholder: 'password', value: passwordIn, onChange: onPasswordInChange},
  ]

  const loginMenu = loginInput.map(el => 
    <FormControl 
        placeholder={el.placeholder} 
        value={el.value} 
        onChange={el.onChange} 
        key={el.key} 
        id={el.id} 
        type={el.type} 
    />
  )

  return (
    <div>
      <Row className='mt-5'>
        Log in to your account:  
      </Row>
      { loginMenu }
      <Row>
        <Button className='mt-3' onClick={ onLoginIn }>
          Log In
        </Button>
      </Row>
    </div>
  )
}

export default LogInPanel