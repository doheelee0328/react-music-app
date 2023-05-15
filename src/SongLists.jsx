import { songs } from './ArtistSongs.jsx'

const SongLists = () => {
  return (
    <>
      {songs.map(({ id, name, releaseDate, coverArt }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{releaseDate}</p>
          <img src={coverArt} alt='songs' />
        </div>
      ))}
    </>
  )
}

export default SongLists
