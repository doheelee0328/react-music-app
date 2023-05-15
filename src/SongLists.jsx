import { useState } from 'react'
import { songs } from './ArtistSongs'
import HeartIcons from './icons/HeartIcons'
import ColouredHeartIcons from './icons/ColourHeartIcons'

const SongLists = () => {
  const [colourHeart, setColourHeart] = useState(false)

  const changeColourHandler = () => {
    setColourHeart((prev) => !prev)
  }

  return (
    <>
      {songs.map(({ id, name, releaseDate, coverArt }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{releaseDate}</p>
          <img src={coverArt} alt='songs' />
          {colourHeart ? (
            <ColouredHeartIcons changeColourHandler={changeColourHandler} />
          ) : (
            <HeartIcons changeColourHandler={changeColourHandler}></HeartIcons>
          )}
        </div>
      ))}
    </>
  )
}

export default SongLists
