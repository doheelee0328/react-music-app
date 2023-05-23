import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const Heading = styled.h1`
  font-size: 50px;
  color: ${theme.color.black};
  font-weight: 900;
`

export const Span = styled.span`
  font-size: 50px;
  color: ${theme.color.pink};
  font-weight: 900;
`
export const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  image-rendering: optimizeQuality;

  @media (max-width: 900px) {
    /* Adjust the positioning for smaller screens */
    width: 100% !important; /* Set the width to 100% to override any conflicting styles */
    height: 40vh !important; /* Maintain the same height */
    object-fit: cover; /* Keep using cover to fill the available space */
  }
`
export const Paragraph = styled.p`
  font-size: 25px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-left: 100px;
  margin-top: 30px;
`
