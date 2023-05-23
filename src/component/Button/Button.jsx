import React from 'react'
import { Buttons } from './Styled'

const Button = ({ displayText, styledProps, navigate }) => {
  return (
    <Buttons styledProps={styledProps} onClick={navigate}>
      {displayText}
    </Buttons>
  )
}

export default Button
