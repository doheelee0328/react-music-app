import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const SongDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${theme.color.black};
  audio {
    margin-top: 5px;
  }
  .detailSong {
    font-size: 30px;
    font-weight: 900;
  }

  img {
    width: 20vw;
  }

  .english,
  .korean {
    max-width: 280px;
    text-align: center;
    line-height: 30px;
    font-weight: 900;
    letter-spacing: 1px;
  }
  .firstButton {
    margin-top: 10px;
  }
`
