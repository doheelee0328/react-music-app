import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const Heading = styled.h1`
  font-size: 80px;
  color: ${theme.color.black};

  span {
    color: ${theme.color.pink};
  }
`

export const Heading2 = styled.h2`
  font-size: 40px;
  color: ${theme.color.pink};
`
export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 30px;

  span {
    color: ${theme.color.pink};
    font-weight: 900;
  }
`
export const Container = styled.div`
  max-width: 600px;
  gap: 30px;
`
export const Image = styled.img`
  width: 40vw;
`
export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
`
export const ButtonContainer = styled.div`
  padding-top: 15px;
`
