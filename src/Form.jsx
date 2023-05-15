import { useState } from 'react'

const Form = () => {
  const [text, setText] = useState('')
  const [submit, setSubmit] = useState('')
  const inputTextHandler = (e) => {
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()

    setSubmit(text)
    setText('')
  }
  return (
    <form onClick={submitHandler}>
      <input type='text' onChange={inputTextHandler} value={text}></input>
      <button type='button'>Submit</button>
      {submit}
    </form>
  )
}

export default Form
