import { useState } from 'react'
const Form = ({ addSongs }) => {
  const [inputName, setInputName] = useState('')
  const [inputImage, setInputImage] = useState('')
  const [inputAudio, setInputAudio] = useState('')

  const inputTextHandlder = (e) => {
    setInputName(e.target.value)
  }
  const inputImageHandlder = (e) => {
    setInputImage(e.target.value)
  }

  const inputAudioHandler = (e) => {
    setInputAudio(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const add = {
      songName: inputName,
      songImage: inputImage,
      songAudio: inputAudio,
    }
    addSongs(add)
    setInputName('')
    setInputImage('')
    setInputAudio('')
  }
  return (
    <form onSubmit={submitHandler}>
      <h1>Add songs</h1>
      <label>Song Title</label>
      <input type='text' onChange={inputTextHandlder} value={inputName} />
      <label>Image</label>
      <input type='text' onChange={inputImageHandlder} value={inputImage} />
      <label>Audio</label>
      <input type='text' onChange={inputAudioHandler} value={inputAudio} />
      <input type='submit' value='Add' />
    </form>
  )
}

export default Form
