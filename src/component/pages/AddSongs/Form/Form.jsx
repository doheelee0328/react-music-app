import { useState } from 'react'
const Form = () => {
  const [input, setInputText] = useState('')

  const inputTextHandlder = (e) => {
    setInputText(e.target.value)
  }
  return (
    <form onSubmit={inputTextHandlder}>
      <label>Add songs</label>
      <input type='text' onChange={input} />
      <input type='submit' value='Add' />
    </form>
  )
}

export default Form
