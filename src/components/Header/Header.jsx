import React from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import HeaderButtons from './HeaderButtons'

const Header = () => {
  return (
    <Container className='border border-primary rounded-bottom bg-primary'>
      <Row className='my-2 d-flex justify-content-center flex-column flex-md-row' >
        <HeaderButtons />
      </Row>
    </Container>
  )
}

export default Header