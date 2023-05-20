import { songs } from '../pages/Findsongs/ArtistSongs/ArtistSongs'

// this is where u define the state
const initialState = {
  filterSong: songs,
  showSong: false,
}

export const filterSongs = (state = initialState.filterSong, action) => {
  switch (action.type) {
    // specify which component you want to put the state in
    // the action.type can be any value you choose. It is a string that represents the
    // type or category of the action being dispatched.
    case 'FINDSONGS':
      return action.payload
    default:
      return state
  }
}

export const showSong = (state = initialState.showSong, action) => {
  switch (action.type) {
    // specify which component you want to put the state in
    // the action.type can be any value you choose. It is a string that represents the
    // type or category of the action being dispatched.
    case 'FINDSONGS':
      return action.payload
    default:
      return state
  }
}
