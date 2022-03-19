import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {GiSaveArrow} from 'react-icons/gi'

import NxtWatch from '../../context/NxtWatch'
import LeftNav from '../LeftNav'
import Header from '../Header/Header'

import {
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  CustomizedPlayer,
  MainContainer,
  SelectedVideo,
  TextContainer,
  VideoCardHeading,
  VideoActions,
  Views,
  Published,
  VideoDescription,
  ProfileImage,
  ChannelName,
  Description,
  ReactionButton,
} from './styledComponents'

const statusList = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    loadingStatus: statusList.loading,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const formattedResponse = await response.json()

    if (response.ok === true) {
      const formattedVideoDetails = {
        id: formattedResponse.video_details.id,
        title: formattedResponse.video_details.title,
        channel: {
          name: formattedResponse.video_details.channel.name,
          profileImageUrl:
            formattedResponse.video_details.channel.profile_image_url,
          subscribersCount:
            formattedResponse.video_details.channel.subscriber_count,
        },
        publishedAt: formattedResponse.video_details.published_at,
        thumbnailUrl: formattedResponse.video_details.thumbnail_url,
        viewCount: formattedResponse.video_details.view_count,
        videoUrl: formattedResponse.video_details.video_url,
        description: formattedResponse.video_details.description,
      }
      this.setState({
        videoDetails: formattedVideoDetails,
        loadingStatus: statusList.success,
      })
    } else {
      this.setState({loadingStatus: statusList.failure})
    }
  }

  renderLoading = isDarkTheme => (
    <LoadingContainer dark={isDarkTheme}>
      <div className="loader-container" data-testid="loader">
        <Loader
          type="ThreeDots"
          color={isDarkTheme ? '#ffffff' : '#3b82f6'}
          height="50"
          width="50"
        />
      </div>
    </LoadingContainer>
  )

  renderFailure = isDarkTheme => {
    const failureImage = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureContainer dark={isDarkTheme}>
        <FailureImage src={failureImage} alt="failure view" />
        <FailureHeading dark={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailurePara>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryButton type="button" onClick={this.getVideoDetails}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  render() {
    const {videoDetails, loadingStatus} = this.state
    const {
      id,
      title,
      channel,
      publishedAt,
      viewCount,
      videoUrl,
      description,
    } = videoDetails
    const newObj = {...channel}

    return (
      <>
        <Header />
        <NxtWatch.Consumer>
          {value => {
            const {
              isDarkTheme,
              addLike,
              addDisLike,
              saveVideo,
              likedVideos,
              dislikedVideos,
              savedVideos,
            } = value

            const liked = likedVideos.includes(id)
            const disliked = dislikedVideos.includes(id)
            const isVideoSaved =
              savedVideos.find(eachItem => eachItem.id === id) !== undefined

            return (
              <>
                <LeftNav />
                <MainContainer
                  dark={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {loadingStatus === statusList.loading &&
                    this.renderLoading(isDarkTheme)}
                  {loadingStatus === statusList.failure &&
                    this.renderFailure(isDarkTheme)}
                  {loadingStatus === statusList.success && (
                    <SelectedVideo>
                      <CustomizedPlayer url={videoUrl} />
                      <TextContainer>
                        <VideoCardHeading as="p" dark={isDarkTheme}>
                          {title}
                        </VideoCardHeading>
                        <VideoActions dark={isDarkTheme}>
                          <Views>{viewCount}</Views>
                          <Published>{publishedAt}</Published>
                          <ReactionButton
                            type="button"
                            onClick={() => addLike(id)}
                            liked={liked}
                          >
                            <AiFillLike size={25} />
                            Like
                          </ReactionButton>
                          <ReactionButton
                            type="button"
                            onClick={() => addDisLike(id)}
                            liked={disliked}
                          >
                            <AiFillDislike size={25} />
                            DisLike
                          </ReactionButton>
                          <ReactionButton
                            type="button"
                            onClick={() => saveVideo(videoDetails)}
                            liked={isVideoSaved}
                          >
                            <GiSaveArrow size={25} />
                            {isVideoSaved ? 'Saved' : 'Save'}
                          </ReactionButton>
                        </VideoActions>
                        <hr />
                        <VideoDescription>
                          <ProfileImage
                            src={newObj.profileImageUrl}
                            alt="channel logo"
                          />
                          <ChannelName>{newObj.name}</ChannelName>
                          <ChannelName>{newObj.subscribersCount}</ChannelName>
                          <Description>{description}</Description>
                        </VideoDescription>
                      </TextContainer>
                    </SelectedVideo>
                  )}
                </MainContainer>
              </>
            )
          }}
        </NxtWatch.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
