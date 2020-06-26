import React from 'react'
import {useRoute, Link} from 'wouter'

import useUser from 'hooks/useUser'

import './Header.css'

export default function Header () {
  const {isLogged, logout} = useUser()
  const [match] = useRoute("/login");

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLoginButtons = ({isLogged}) => {
    return isLogged
      ? <Link to='#' onClick={handleClick}>
      Logout
      </Link>
      : <>
        <Link to='/login'>
          Login
        </Link>
        <Link to='/register'>
          Register
        </Link>
        </>
  }

  const content = match
    ? null
    : renderLoginButtons({isLogged})

  return (
    <header className='gf-header'>
      {content}
    </header>
  )
}