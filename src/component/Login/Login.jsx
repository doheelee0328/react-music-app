import React, { useState, useEffect, useRef } from 'react'
import { useAuthentication } from '../context/context'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import BlackPinkImage from '../../images/blackpink.png'

import { Form, Input, Image } from './Styled.jsx'
import { primaryButton } from '../Button/Styled'

const Login = () => {
  const directTo = useNavigate()

  const { setUser } = useAuthentication()

  const [inputName, setInputName] = useState('')

  const inputNameHandler = (e) => {
    setInputName(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setUser(inputName)
    directTo('/')
    setInputName('')
  }

  const nameRef = useRef()

  useEffect(() => {
    nameRef.current.focus()
    // allows to provide focus on the input when user refreshes the page
  }, [])

  // console.log(inputRef.current.value)
  return (
    <Form onSubmit={submitHandler}>
      {/* <form onSubmit={submitHandler}> */}
      <Image>
        <img src={BlackPinkImage} alt='blackpink' />
      </Image>
      <Input>
        <label htmlFor='name'>Enter Your Favourite Blackpink Member</label>
        <input
          type='type'
          onChange={inputNameHandler}
          value={inputName}
          ref={nameRef}
        />
        <Button
          displayText='Submit'
          type='submit'
          styledProps={primaryButton}
        ></Button>
      </Input>
    </Form>
  )
}

export default Login
