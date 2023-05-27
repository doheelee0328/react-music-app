import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const Heading = styled.h1`
  text-align: center;
  color: ${theme.color.black};
  font-size: 40px;
  margin-bottom: 50px;
`
export const Span = styled.span`
  color: ${theme.color.pink};
`
export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 45px;

  label {
    font-size: 20px;
    font-weight: 900;
  }

  .title,
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  input {
    width: 30vw;
    height: 5vh;
    border: 2px solid ${theme.color.pink};
    box-shadow: 0 4px 5px rgb(0, 0, 0, 0.25);
    text-align: center;
    font-weight: 900;
    font-size: 15px;
  }
`
