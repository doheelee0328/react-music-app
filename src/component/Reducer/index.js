// this is where u store the state

import { combineReducers } from 'redux'
import { filterSongs, showSong } from './FilterSongs'

const allReducers = combineReducers({
  filterSong: filterSongs,
  showSong: showSong,
})

export default allReducers
