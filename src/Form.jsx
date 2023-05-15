import { useState } from 'react'
// import SongLists from './SongLists'

const Form = ({ filterHandler, showSongsHandlder }) => {
  const [text, setText] = useState('')
  // const [submit, setSubmit] = useState('')
  const inputTextHandler = (e) => {
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    showSongsHandlder()
    filterHandler(text)
    setText('')
  }
  return (
    <form onSubmit={submitHandler}>
      <p>Find you favourite song name</p>
      <input type='text' onChange={inputTextHandler} value={text}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
