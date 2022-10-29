import React from 'react'
import Login from 'components/Login'
import { Container } from 'style-components'

export default function LoginPage() {
  return <>
    <Container>
      <h2 style={{textAlign: "center"}} >Login</h2>
      <Login />
    </Container>
  </>
}