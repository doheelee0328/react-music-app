import React from 'react'

const SongList = ({ listSongs, deleteSongs }) => {
  if (listSongs.length === 0) {
    return <p>Please Enter a song name</p>
  }
  return (
    <>
      {listSongs.map((el, index) => (
        <div key={index}>
          <p>SongName: {el}</p>
          <button onClick={() => deleteSongs(el)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default SongList
