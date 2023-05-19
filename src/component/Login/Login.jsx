import React, { useState, useEffect, useRef } from 'react'
import { useAuthentication } from '../context/context'
import { useNavigate } from 'react-router-dom'

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
    <form onSubmit={submitHandler}>
      <video loop muted autoPlay preload='auto' className='video'>
        <source
          src='https://liam87.oceansaver.in/pacific/?Ae5UTXezL8MLOF9zHCoIQYdpOIR'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      <label htmlFor='name'>Choose Your Favourite Blackpink Member</label>
      <input
        type='type'
        onChange={inputNameHandler}
        value={inputName}
        ref={nameRef}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Login
