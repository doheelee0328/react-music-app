import React from 'react'

const SongList = ({ listSongs, deleteSongs }) => {
  return (
    <>
      {listSongs.map((el, index) => (
        <div key={index}>
          <p>SongName: {el.songName}</p>
          <img src={el.songImage} alt={index} />

          <button onClick={() => deleteSongs(el)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default SongList
