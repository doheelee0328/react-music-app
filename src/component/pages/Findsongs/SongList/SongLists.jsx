import { useState } from 'react'
import { ColouredHeartIcons, HeartIcons } from '../../..'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SongLists = () => {
  const [colourHeart, setColourHeart] = useState(false)

  const filterSongs = useSelector((state) => state.filterSong)

  // const dispatch = useDispatch()

  // const { filterSong } = bindActionCreators(actionCreators, dispatch)

  const changeColourHandler = () => {
    setColourHeart((prev) => !prev)
  }

  let likes = (
    <HeartIcons
      data-testid='no-colour'
      changeColourHandler={changeColourHandler}
    />
  )

  if (colourHeart) {
    likes = <ColouredHeartIcons changeColourHandler={changeColourHandler} />
  }

  const songLists = filterSongs.map(
    ({ songId, name, releaseDate, coverArt, audio }) => (
      <div key={songId}>
        <p role='name'>{name}</p>
        <p role='date'>{releaseDate}</p>
        <Link to={`/findSongs/${songId}`}>
          <img src={coverArt} alt={name} />
        </Link>

        <audio controls className='audio' data-testid='audio'>
          <source src={audio} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
        {likes}
      </div>
    )
  )

  return <>{songLists}</>
}

export default SongLists
