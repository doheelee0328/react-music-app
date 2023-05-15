import { useState } from 'react'
import { songs } from './ArtistSongs'
import HeartIcons from './icons/HeartIcons'
import ColouredHeartIcons from './icons/ColourHeartIcons'

const SongLists = () => {
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

  return (
    <>
      {songs.map(({ id, name, releaseDate, coverArt }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{releaseDate}</p>
          <img src={coverArt} alt='songs' />
          {likes}
        </div>
      ))}
    </>
  )
}

export default SongLists
