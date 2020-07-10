import React from 'react'
import {StyledLink, StyledButton} from './styles'

export default function Button ({children, href, onClick}) {
  return href
    ? <StyledLink href={href}>{children}</StyledLink>
    : <StyledButton onClick={onClick}>{children}</StyledButton>
}