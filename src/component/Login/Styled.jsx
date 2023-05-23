import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Form = styled.form`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 60px;
  padding-top: 60px;

  label {
    font-size: 34px;
    color: ${theme.color.pink};
    font-weight: 900;
    width: 400px;
    text-align: center;
  }

  input {
    border-top: none;
    border-left: none;
    border-right: none;
    width: 20vw;
    text-align: center;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }
`

export const Image = styled.div`
  img {
    height: 100%;
    width: 50vw;
  }
`
