import React from 'react'
import { Buttons } from './Styled'

const Button = ({ displayText, styledProps }) => {
  return <Buttons styledProps={styledProps}>{displayText}</Buttons>
}

export default Button
