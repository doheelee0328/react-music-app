import {
  Heading,
  Heading2,
  Paragraph,
  Container,
  Image,
  AboutContainer,
  ButtonContainer,
} from './Styled'
import BlackpinkImage from '../../../images/screen-0 2.png'
import Button from '../../Button/Button'
import { primaryButton } from '../../Button/Styled'
import { useNavigate } from 'react-router-dom'

const ArtistInfo = () => {
  const navigate = useNavigate()

  const navigateFindSongs = () => {
    navigate('/findSongs')
  }
  return (
    <>
      <AboutContainer>
        <Container>
          <Heading>
            Black<span>pink</span>
          </Heading>
          <Heading2>Kpop</Heading2>
          <Paragraph data-testid='blackpink-description' role='paragraph'>
            Blackpink is a four-member South Korean girl group consisting of
            <span> Jisoo, Jennie, Rosé, </span> and <span>Lisa </span> . Known
            for their energetic performances and catchy pop music, they have
            gained global recognition as one of the most popular K-pop acts,
            breaking records and amassing a massive fanbase worldwide!
          </Paragraph>
          <ButtonContainer>
            <Button
              navigate={navigateFindSongs}
              styledProps={primaryButton}
              displayText='Explore Songs'
            ></Button>
          </ButtonContainer>
        </Container>
        <Image src={BlackpinkImage} />
      </AboutContainer>
    </>
  )
}

export default ArtistInfo
