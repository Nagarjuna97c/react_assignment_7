import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'
import NxtWatch from './context/NxtWatch'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    likedVideos: [],
    dislikedVideos: [],
    savedVideos: [],
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addLike = videoId => {
    const {likedVideos, dislikedVideos} = this.state

    const isVideoAlredyLiked = likedVideos.includes(videoId)
    const isVideoDisliked = dislikedVideos.includes(videoId)

    if (!isVideoAlredyLiked) {
      likedVideos.push(videoId)
      this.setState({likedVideos})
      if (isVideoDisliked) {
        const updatedDislikedVideoLists = dislikedVideos.filter(
          eachItem => eachItem !== videoId,
        )
        this.setState({dislikedVideos: updatedDislikedVideoLists})
      }
    }
  }

  addDisLike = videoId => {
    const {likedVideos, dislikedVideos} = this.state

    const isVideoAlredyDisliked = dislikedVideos.includes(videoId)
    const isVideoLiked = likedVideos.includes(videoId)

    if (!isVideoAlredyDisliked) {
      dislikedVideos.push(videoId)
      this.setState({dislikedVideos})
      if (isVideoLiked) {
        const updatedLikedVideoLists = likedVideos.filter(
          eachItem => eachItem !== videoId,
        )
        this.setState({likedVideos: updatedLikedVideoLists})
      }
    }
  }

  saveVideo = video => {
    console.log('save here')
    const {savedVideos} = this.state

    const isVideoAlreadySaved = savedVideos.find(
      eachItem => eachItem.id === video.id,
    )
    if (isVideoAlreadySaved === undefined) {
      savedVideos.push(video)
      this.setState({savedVideos})
    } else {
      const newSavedVideoList = savedVideos.filter(
        eachItem => eachItem.id !== video.id,
      )
      this.setState({savedVideos: newSavedVideoList})
    }
  }

  render() {
    const {isDarkTheme, likedVideos, dislikedVideos, savedVideos} = this.state

    return (
      <NxtWatch.Provider
        value={{
          isDarkTheme,
          likedVideos,
          dislikedVideos,
          savedVideos,
          onToggleTheme: this.onToggleTheme,
          addLike: this.addLike,
          addDisLike: this.addDisLike,
          saveVideo: this.saveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </NxtWatch.Provider>
    )
  }
}

export default App
