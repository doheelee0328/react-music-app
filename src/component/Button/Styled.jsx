import styled, { css } from 'styled-components'
import { theme } from '../../theme/theme'

export const Buttons = styled.button`
  border: solid 2px ${theme.color.pink};
  background-color: ${theme.color.white};
  color: ${theme.color.pink};
  font-weight: 900;
  font-size: 17px;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${theme.color.pink};
    color: ${theme.color.white};
    font-weight: 900;
    font-size: 17px;
    box-shadow: 5px 5px 2px rgba(209, 145, 162, 0.5);
  }

  ${({ styledProps }) => css`
    width: ${styledProps.width};
    height: ${styledProps.height};
    border-radius: ${styledProps.borderRadius};
  `}
`
export const primaryButton = {
  width: '20vw',
  height: '4.5vh',
  borderRadius: '20px',
}
