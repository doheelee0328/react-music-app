import { useState } from 'react'
import { ColouredHeartIcons, HeartIcons } from '../../..'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SongContainer, AudioLikes } from './SongList.sytled'

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
      <SongContainer key={songId}>
        <p className='name' role='name'>
          {name}
        </p>

        <Link to={`/findSongs/${songId}`}>
          <img src={coverArt} alt={name} />
        </Link>
        {/* <p className='date' role='date'>
          {releaseDate}
        </p> */}
        <span className='click'>Click On The Image To Read The Lyrics</span>
        <AudioLikes>
          <audio controls className='audio' data-testid='audio'>
            <source src={audio} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
          {likes}
        </AudioLikes>
      </SongContainer>
    )
  )

  return <>{songLists}</>
}

export default SongLists
