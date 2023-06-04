import React, { useEffect } from 'react'
import { useAuthentication } from '../../context/Context'
import BlackpinkRectangle from '../../../images/Rectangle 10 (2).png'
import {
  Heading,
  Span,
  Image,
  Paragraph,
  Container,
  Paragraph2,
  Container2,
  SongContainer,
  MoreContainer,
  Heading2,
} from './Styled'
import { useDispatch } from 'react-redux'
import { loggedIn } from '../../action-creator/filter'

const Home = () => {
  const { user } = useAuthentication()
  const dispatch = useDispatch()

  const rose = 'rose'
  const jisoo = 'jisoo'
  const jennie = 'jennie'
  const lisa = 'lisa'

  let message

  switch (user.toLowerCase()) {
    case rose.toLowerCase():
      message =
        'Rose is an amazing choice! Her vocals are incredible and she brings so much energy to the stage!'
      break
    case jisoo.toLowerCase():
      message = "Jisoo is a fantastic choice! She's talented and beautiful!"
      break
    case jennie.toLowerCase():
      message =
        "Jennie is an awesome choice! She's a powerful rapper and a charismatic performer!"
      break
    case lisa.toLowerCase():
      message =
        "Lisa is an incredible choice! She's a phenomenal dancer and has a unique sense of style!"
      break
    default:
      message = 'That is not the name of the blackpink member but welcome!!!'
  }

  return (
    <>
      <Image src={BlackpinkRectangle} alt='blackpink' />
      <MoreContainer>
        <Container>
          <Heading>
            You chose <Span>{user}!</Span>
          </Heading>
          <Paragraph>{message}</Paragraph>
        </Container>
        <Container2>
          <Heading2>Songs</Heading2>
          <MoreContainer>
            <SongContainer>
              <Paragraph2>Whistle</Paragraph2>
              <Paragraph2>Playing With Fire</Paragraph2>
              <Paragraph2>How You Like That</Paragraph2>
              <Paragraph2>Typa Girl</Paragraph2>
              <Paragraph2>DuDuDu</Paragraph2>
            </SongContainer>
            <SongContainer>
              <Paragraph2>As If It’s Your Last</Paragraph2>
              <Paragraph2>Love Sick</Paragraph2>
              <Paragraph2>See U Later</Paragraph2>
              <Paragraph2>Really</Paragraph2>
              <Paragraph2>Boombayah</Paragraph2>
            </SongContainer>
          </MoreContainer>
        </Container2>
      </MoreContainer>
    </>
  )
}

export default Home
