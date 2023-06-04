import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const AddSongContainer = styled.div`
  .addSongsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    flex-direction: column;
    margin-top: 20px;
    font-weight: 900;
    gap: 20px;
    max-width: auto;
    max-height: auto;
  }

  .songTitle {
    color: ${theme.color.pink};
  }

  .songImage {
    width: 30vw;
    height: 50vh;
  }
`
