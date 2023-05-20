export const filterSong = (song) => {
  return (dispatch) => {
    dispatch({
      type: 'FINDSONGS',
      payload: song,
    })
  }
}

export const showFilterComponent = (show) => {
  return (dispatch) => {
    dispatch({
      type: 'showSong',
      payload: show,
    })
  }
}
