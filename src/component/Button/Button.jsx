import React from 'react'
import { Buttons } from './Styled'

const Button = ({ displayText, buttonsProps, styledProps }) => {
  return (
    <Buttons type='submit' onClick={buttonsProps} styledProps={styledProps}>
      {displayText}
    </Buttons>
  )
}

export default Button
