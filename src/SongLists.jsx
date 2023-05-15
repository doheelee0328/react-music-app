import { useState } from 'react'
import HeartIcons from './icons/HeartIcons'
import ColouredHeartIcons from './icons/ColourHeartIcons'

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

  const songLists = filterSongs.map(({ id, name, releaseDate, coverArt }) => (
    <div key={id}>
      <p>{name}</p>
      <p>{releaseDate}</p>
      <img src={coverArt} alt='songs' />
      {likes}
    </div>
  ))

  return <>{songLists}</>
}

export default SongLists
