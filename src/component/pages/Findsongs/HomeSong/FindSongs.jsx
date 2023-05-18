import React, { useState } from 'react'
import { songs } from '../ArtistSongs/ArtistSongs'
import { Form, SongLists } from '..'

const FindSongs = () => {
  const [filterSongs, setFilterSongs] = useState(songs)
  const [showSongs, setShowSongs] = useState(false)

  const filterHandler = (songName) => {
    const filteredSongs = songs.filter((song) =>
      song.name.toLowerCase().includes(songName.toLowerCase())
    )
    setFilterSongs(filteredSongs)
    setShowSongs(true)
  }

  let songData = <SongLists filterSongs={filterSongs} />
  if (filterSongs.length === 0) {
    songData = <p>Cannot find the song name, please try again</p>
  }

  return (
    <>
      <h1>My favorite Artist</h1>
      <Form filterHandler={filterHandler}></Form>
      {showSongs && songData}
    </>
  )
}

export default FindSongs
