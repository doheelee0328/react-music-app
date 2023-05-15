import ArtistProfile from './ArtistInfo'
import SongLists from './SongLists'
import { songs } from './ArtistSongs'
import { useState } from 'react'
import Form from './Form'

function App() {
  const [filterSongs, setFilterSongs] = useState(songs)
  const [showSongs, setShowSongs] = useState(false)

  const filterHandler = (songName) => {
    const filteredSongs = songs.filter((song) =>
      song.name.toLowerCase().includes(songName.toLowerCase())
    )
    setFilterSongs(filteredSongs)
  }

  const showSongsHandlder = () => {
    setShowSongs(true)
  }

  let error = <SongLists filterSongs={filterSongs} />
  if (filterSongs.length === 0) {
    error = <p>Cannot find the song name, please try again</p>
  }

  return (
    <>
      <h1>My favorite Artist</h1>
      <ArtistProfile />
      <Form
        filterHandler={filterHandler}
        showSongsHandlder={showSongsHandlder}
      ></Form>
      {showSongs && error}
    </>
  )
}

export default App
