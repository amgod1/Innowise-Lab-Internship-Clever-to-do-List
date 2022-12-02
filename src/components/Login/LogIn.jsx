import React from 'react'
import { Container } from 'react-bootstrap'
import LogInPanel from './LogInPanel'
import CreateAccountPanel from './CreateAccountPanel'

const LogIn = (props) => {
    return (
      <Container>
        <Container className='d-flex justify-content-around flex-column flex-md-row'>
          <LogInPanel />
          <CreateAccountPanel />
        </Container>
      </Container>
    )
}

export default LogIn