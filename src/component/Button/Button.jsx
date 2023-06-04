import React from 'react'
import { StyledButton } from './Styled'
const Button = ({ displayText, buttonsProps, styledprops }) => {
  return (
    <StyledButton onClick={buttonsProps} styledprops={styledprops}>
      {displayText}
    </StyledButton>
  )
}

export default Button
