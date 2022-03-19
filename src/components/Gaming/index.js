import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatch from '../../context/NxtWatch'

import Header from '../Header/Header'
import LeftNav from '../LeftNav'
import GameCard from '../GameCard'

import {
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  MainContainer,
  HomeContent,
  Banner,
  Logo,
  BannerPara,
  BannerButton,
  BannerContent,
  ButtonClose,
  HomeWatch,
  VideosContainer,
  GamingTop,
  GamingIconContainer,
  GamingHeading,
} from './styledComponents'

const statusList = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    displayBanner: true,
    loadingStatus: statusList.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(`https://apis.ccbp.in/videos/gaming`, options)
    const formattedResponse = await response.json()
    console.log(typeof formattedResponse)
    if (response.ok === true) {
      const changedResponseList = formattedResponse.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      console.log(changedResponseList)
      this.setState({
        videosList: changedResponseList,
        loadingStatus: statusList.success,
      })
    } else {
      this.setState({loadingStatus: statusList.failure})
    }
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
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
        <RetryButton type="button" onClick={this.getVideosData}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  render() {
    const {displayBanner, videosList, loadingStatus} = this.state
    return (
      <>
        <Header />
        <NxtWatch.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <>
                <LeftNav />
                <MainContainer dark={isDarkTheme} data-testid="gaming">
                  <HomeContent>
                    {displayBanner ? (
                      <Banner data-testid="banner">
                        <BannerContent>
                          <Logo
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <BannerPara>
                            Buy Nxt Watch Premium prepaid plans with UPI
                          </BannerPara>
                          <BannerButton type="button">GET IT NOW</BannerButton>
                        </BannerContent>
                        <ButtonClose onClick={this.closeBanner}>
                          <AiOutlineClose size={25} />
                        </ButtonClose>
                      </Banner>
                    ) : null}
                    <GamingTop dark={isDarkTheme}>
                      <GamingIconContainer dark={isDarkTheme}>
                        <SiYoutubegaming size={60} fill="#ff0000" />
                      </GamingIconContainer>
                      <GamingHeading dark={isDarkTheme}>Gaming</GamingHeading>
                    </GamingTop>
                    <HomeWatch dark={isDarkTheme}>
                      {loadingStatus === statusList.loading &&
                        this.renderLoading(isDarkTheme)}
                      {loadingStatus === statusList.failure &&
                        this.renderFailure(isDarkTheme)}
                      {loadingStatus === statusList.noresults &&
                        this.renderNoResults(isDarkTheme)}

                      {loadingStatus === statusList.success && (
                        <VideosContainer>
                          {videosList.map(eachItem => (
                            <GameCard
                              key={eachItem.id}
                              itemDetails={eachItem}
                            />
                          ))}
                        </VideosContainer>
                      )}
                    </HomeWatch>
                  </HomeContent>
                </MainContainer>
              </>
            )
          }}
        </NxtWatch.Consumer>
      </>
    )
  }
}

export default Gaming
