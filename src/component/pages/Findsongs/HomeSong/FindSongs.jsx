import React from 'react'
import { songs } from '../ArtistSongs/ArtistSongs'
import { Form, SongLists } from '..'
import { useSelector, useDispatch } from 'react-redux'
import { filterSong, showFilterComponent } from '../../../action-creator/filter'
import { theme } from '../../../../theme/theme'

// used to extract data from the Redux store

const FindSongs = () => {
  // initial state
  const filterSongs = useSelector((state) => state.filterSong)
  const showSong = useSelector((state) => state.showSong)
  // filtering out the song based on the user search
  const dispatch = useDispatch()
  // this is the update state

  const filterHandler = (songName) => {
    const filteredSongs = songs.filter(
      (song) => song.name.toLowerCase() === songName.toLowerCase()
    )
    dispatch(filterSong(filteredSongs))
    dispatch(showFilterComponent(true))
  }

  let songData = <SongLists />
  if (filterSongs.length === 0) {
    songData = (
      <p
        style={{
          fontSize: '30px',
          textAlign: 'center',
          color: theme.color.black,
          marginTop: '8%',
          fontWeight: '900',
        }}
      >
        Cannot find the song name, please try again
      </p>
    )
  }

  return (
    <>
      <Form filterHandler={filterHandler}></Form>
      {showSong && songData}
    </>
  )
}

export default FindSongs
