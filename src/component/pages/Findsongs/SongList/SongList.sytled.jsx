import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.color.black};

  img {
    width: 20vw;
  }

  img:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
  }

  .name {
    font-size: 25px;
    font-weight: 900;
  }

  /* .date {
    font-weight: 900;
  } */

  .click {
    font-weight: 900;
    margin-top: 18px;
    margin-bottom: 15px;
  }
`
export const AudioLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`
