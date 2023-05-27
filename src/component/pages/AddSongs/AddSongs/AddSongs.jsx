import React, { useState } from 'react'
import Form from '../Form/Form'
import SongList from '../SongList/SongList'
import { theme } from '../../../../theme/theme'

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

  let song = (
    <p
      style={{
        textAlign: 'center',
        fontWeight: 900,
        fontSize: '18px',
        marginTop: '40px',
      }}
    >
      No more songs? <span style={{ color: theme.color.pink }}>Add more!</span>
    </p>
  )

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
