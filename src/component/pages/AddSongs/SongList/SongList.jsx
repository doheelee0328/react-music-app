import React from 'react'

const SongList = ({ listSongs, deleteSongs }) => {
  return (
    <>
      {listSongs.map((el, index) => (
        <div key={index}>  
          <p>SongName: {el.songName}</p>
          <img src={el.songImage} alt={index} />
          <audio controls className='audio'>
            <source src={el.songAudio} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          <button onClick={() => deleteSongs(el)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default SongList
