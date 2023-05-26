import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;

  p {
    font-size: 40px;
    text-align: center;
    font-weight: 900;
  }

  input {
    width: 40vw;
    height: 4vh;
    border: 2px solid ${theme.color.pink};
    box-shadow: 0 4px 5px rgb(0, 0, 0, 0.25);
    text-align: center;
    font-weight: 900;
    font-size: 18px;
  }
  :focus {
    outline: none;
  }

  i {
    color: ${theme.color.pink};
    font-size: 20px;
    transform: translate(-38px, 0px);
  }

  span {
    color: ${theme.color.pink};
  }
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
