import { useState } from 'react'
const Form = ({ addSongs }) => {
  const [input, setInputText] = useState('')

  const inputTextHandlder = (e) => {
    setInputText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    addSongs(input)
    setInputText('')
  }
  return (
    <form onSubmit={submitHandler}>
      <label>Add songs</label>
      <input type='text' onChange={inputTextHandlder} value={input} />
      <input type='submit' value='Add' />
    </form>
  )
}

export default Form
