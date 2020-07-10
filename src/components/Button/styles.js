import {Link} from 'wouter'
import styled from '@emotion/styled'

export const StyledLink = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid transparent;
  color: var(--theme-body-txt);
  cursor: pointer;
  font-size: 1rem;
  padding: .5rem 1rem;

  &:hover {
    background-color: var(--brand-color_6);
  }
`

export const StyledButton = StyledLink.withComponent('button')