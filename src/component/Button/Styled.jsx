import styled, { css } from 'styled-components'
import { theme } from '../../theme/theme'

export const StyledButton = styled.button`
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

  ${({ styledprops }) => css`
    width: ${styledprops.width};
    height: ${styledprops.height};
    border-radius: ${styledprops.borderRadius};
    font-size: ${styledprops.fontSize};
  `}
`
export const primaryButton = {
  width: '20vw',
  height: '5vh',
  borderRadius: '20px',
}

export const sqaureButton = {
  width: '22vw',
  height: '4vh',
  fontSize: '15px',
}

export const smallButton = {
  width: '8vw',
  height: '4vh',
  borderRadius: '20px',
  fontSize: '15px',
}
