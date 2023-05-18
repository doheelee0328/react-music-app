import { useState, useRef } from 'react'
import { ColouredHeartIcons, HeartIcons } from '../../..'

const SongLists = ({ filterSongs }) => {
  const [colourHeart, setColourHeart] = useState(false)

  const changeColourHandler = () => {
    setColourHeart((prev) => !prev)
  }

  let likes = (
    <HeartIcons changeColourHandler={changeColourHandler}></HeartIcons>
  )

  if (colourHeart) {
    likes = <ColouredHeartIcons changeColourHandler={changeColourHandler} />
  }

  const audioRef = useRef()
  const songLists = filterSongs.map(
    ({ id, name, releaseDate, coverArt, audio }) => (
      <div key={id}>
        <p>{name}</p>
        <p>{releaseDate}</p>
        <img src={coverArt} alt='songs' />

        {/* <audio controls ref={audioRef}>
          <source src={audio} type='audio/mpeg' style={{ width: '10px' }} />
          Your browser does not support the audio element.
        </audio> */}

        {likes}
      </div>
    )
  )

  return <>{songLists}</>
}

export default SongLists
