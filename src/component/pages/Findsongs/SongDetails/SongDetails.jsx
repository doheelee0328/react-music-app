import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { songs } from '../ArtistSongs/ArtistSongs'

import { SongDetailsContainer } from './SongDetails.styled'
import Button from '../../../Button/Button'
import { sqaureButton, smallButton } from '../../../Button/Styled'

const SongDetails = () => {
  const [showKorean, setShowKorean] = useState(false)
  const { id } = useParams()

  const back = useNavigate()

  const songId = parseInt(id)
  const filter = songs.find((el) => el.songId === songId)

  const goBackButton = () => {
    back('/findSongs')
  }

  const showKoreanHandler = () => {
    setShowKorean((prev) => !prev)
  }

  return (
    <>
      <SongDetailsContainer>
        <p className='detailSong'>{filter.name}</p>
        <img src={filter.coverArt} alt={filter.name} />

        <audio controls className='audio' data-testid='audio'>
          <source src={filter.audio} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
        {/* <button onClick={showKoreanHandler}>
          Show Korean / Roman Characters
        </button> */}
        <div className='firstButton'>
          <Button
            styledprops={sqaureButton}
            displayText='Show Korean / Roman Characters'
            buttonsProps={showKoreanHandler}
          ></Button>
        </div>
        {showKorean ? (
          <p className='english'>{filter.lyrics2}</p>
        ) : (
          <p className='korean'>{filter.lyrics}</p>
        )}
        <Button
          styledprops={smallButton}
          displayText=' Back'
          buttonsProps={goBackButton}
        ></Button>
      </SongDetailsContainer>
    </>
  )
}

export default SongDetails
