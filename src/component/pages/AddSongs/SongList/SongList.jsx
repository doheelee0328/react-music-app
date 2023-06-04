import React from 'react'
import { AddSongContainer } from './SongList.styled'
import Button from '../../../Button/Button'
import { smallButton } from '../../../Button/Styled'
const SongList = ({ listSongs, deleteSongs }) => {
  return (
    <AddSongContainer>
      {listSongs.map((el, index) => (
        <div className='addSongsContainer' key={index}>
          {/* <SongParagraph>SongName: {el.songName}</SongParagraph> */}
          <p className='songName'>
            <span className='songTitle'>Song Title</span>: {el.songName}
          </p>
          <img className='songImage' src={el.songImage} alt={index} />
          <Button
            styledprops={smallButton}
            buttonsProps={() => deleteSongs(el)}
            displayText='Delete'
          ></Button>
          {/* <button onClick={() => deleteSongs(el)}>Delete</button> */}
        </div>
      ))}
    </AddSongContainer>
  )
}

export default SongList
