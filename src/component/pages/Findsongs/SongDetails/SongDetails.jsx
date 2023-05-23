import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { songs } from '../ArtistSongs/ArtistSongs'

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
      <p>{filter.name}</p>
      <img src={filter.coverArt} alt={filter.name} />

      <audio controls className='audio' data-testid='audio'>
        <source src={filter.audio} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <button onClick={showKoreanHandler}>
        Show Korean / Roman Characters
      </button>
      {showKorean ? <p>{filter.lyrics2}</p> : <p>{filter.lyrics}</p>}

      <button onClick={goBackButton}>Back</button>
    </>
  )
}

export default SongDetails
