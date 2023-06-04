import { useState } from 'react'
import { Heading, Span, LabelContainer } from './Form.styled'
import { FormContainer } from '../../Findsongs/Form/Form.styled'
import { primaryButton } from '../../../Button/Styled'
import Button from '../../../Button/Button'

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
    <FormContainer>
      <form onSubmit={submitHandler}>
        <Heading>
          <Span>Add</Span> songs
        </Heading>
        <LabelContainer>
          <div className='title'>
            <label>Song Title</label>
            <input type='text' onChange={inputTextHandlder} value={inputName} />
          </div>
          <div className='image'>
            <label>Image</label>
            <input
              type='text'
              onChange={inputImageHandlder}
              value={inputImage}
            />
          </div>
          <Button styledprops={primaryButton} displayText='Add'></Button>
        </LabelContainer>
      </form>
    </FormContainer>
  )
}

export default Form
