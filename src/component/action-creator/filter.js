export const filterSong = (song) => {
  return { type: 'FINDSONGS', payload: song }
}

export const showFilterComponent = (show) => {
  return { type: 'SHOWSONG', payload: show }
}
