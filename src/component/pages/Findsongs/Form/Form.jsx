import { useState } from 'react'
// import SongLists from './SongLists'
import { FormContainer, ButtonContainer, InputWrapper } from './Form.styled'
import Button from '../../../Button/Button'

const Form = ({ filterHandler }) => {
  const [text, setText] = useState('')
  // const [submit, setSubmit] = useState('')
  const inputTextHandler = (e) => {
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (text !== '') {
      filterHandler(text)
      setText('')
    }
  }
  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <p>
          <span> Find </span>Songs
        </p>
        <InputWrapper>
          <input type='text' onChange={inputTextHandler} value={text}></input>
          <ButtonContainer>
            <i className='fa-solid fa-magnifying-glass' type='submit'></i>
          </ButtonContainer>
        </InputWrapper>
      </form>
    </FormContainer>
  )
}

export default Form
