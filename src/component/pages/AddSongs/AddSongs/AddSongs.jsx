import React, { useState } from 'react'
import Form from '../Form/Form'
import SongList from '../SongList/SongList'

const AddSongs = () => {
  const [listSongs, setListSongs] = useState([])

  const addSongs = (song) => {
    setListSongs((prev) => {
      return [song, ...prev]
    })
  }

  const deleteSongs = (id) => {
    const remove = listSongs.filter((el) => el !== id)
    setListSongs(remove)
  }

  let song = <p>No more songs? Add more!</p>

  if (listSongs.length > 0) {
    song = <SongList listSongs={listSongs} deleteSongs={deleteSongs} />
  }

  return (
    <>
      <Form addSongs={addSongs} />
      {song}
    </>
  )
}

export default AddSongs
