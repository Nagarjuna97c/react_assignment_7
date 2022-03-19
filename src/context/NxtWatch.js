import React from 'react'

const NxtWatch = React.createContext({
  isDarkTheme: false,
  likedVideos: [],
  dislikedVideos: [],
  savedVideos: [],
  onToggleTheme: () => {},
  addLike: () => {},
  addDisLike: () => {},
  saveVideo: () => {},
})

export default NxtWatch
