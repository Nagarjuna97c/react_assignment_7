import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import NxtWatch from '../../context/NxtWatch'

import Header from '../Header/Header'
import LeftNav from '../LeftNav'
import VideoCard from '../VideoCard'

import {
  HomeContainer,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsPara,
  MainContainer,
  Banner,
  Logo,
  BannerPara,
  BannerButton,
  BannerContent,
  ButtonClose,
  HomeWatch,
  Input,
  InputContainer,
  SearchIconContainer,
  VideosContainer,
} from './styledComponents'

const statusList = {
  loading: 'LOADING',
  success: 'SUCCESS',
  noresults: 'NORESULTS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    displayBanner: true,
    loadingStatus: statusList.loading,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      options,
    )
    const formattedResponse = await response.json()

    if (response.ok === true) {
      const changedResponseList = formattedResponse.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))

      if (changedResponseList.length > 0) {
        this.setState({
          videosList: changedResponseList,
          loadingStatus: statusList.success,
        })
      } else {
        this.setState({videosList: [], loadingStatus: statusList.noresults})
      }
    } else {
      this.setState({loadingStatus: statusList.failure})
    }
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredVideos = () => {
    this.setState({loadingStatus: statusList.loading})
    this.getVideosData()
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

  renderNoResults = isDarkTheme => {
    const noResultsImage =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
    return (
      <NoResultsContainer dark={isDarkTheme}>
        <NoResultsImage src={noResultsImage} alt="no videos" />
        <NoResultsHeading dark={isDarkTheme}>
          No Search results found
        </NoResultsHeading>
        <NoResultsPara>
          Try different key words or remove search filter
        </NoResultsPara>
        <RetryButton type="button" onClick={this.getVideosData}>
          Retry
        </RetryButton>
      </NoResultsContainer>
    )
  }

  render() {
    const {displayBanner, videosList, searchInput, loadingStatus} = this.state

    return (
      <>
        <NxtWatch.Consumer>
          {value => {
            const {isDarkTheme} = value

            return (
              <HomeContainer dark={isDarkTheme} data-testid="home">
                <Header />
                <LeftNav />
                <MainContainer dark={isDarkTheme}>
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
                      <ButtonClose
                        onClick={this.closeBanner}
                        data-testid="close"
                      >
                        <AiOutlineClose size={25} />
                      </ButtonClose>
                    </Banner>
                  ) : null}
                  <HomeWatch dark={isDarkTheme}>
                    <InputContainer>
                      <Input
                        type="search"
                        onChange={this.changeSearchInput}
                        value={searchInput}
                      />
                      <SearchIconContainer
                        as="button"
                        type="button"
                        onClick={this.getFilteredVideos}
                        data-testid="searchButton"
                        placeholder="Search"
                      >
                        <AiOutlineSearch size={25} />
                      </SearchIconContainer>
                    </InputContainer>
                    {loadingStatus === statusList.loading && (
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
                    )}
                    {loadingStatus === statusList.failure &&
                      this.renderFailure(isDarkTheme)}
                    {loadingStatus === statusList.noresults &&
                      this.renderNoResults(isDarkTheme)}

                    {loadingStatus === statusList.success && (
                      <VideosContainer>
                        {videosList.map(eachItem => (
                          <VideoCard key={eachItem.id} itemDetails={eachItem} />
                        ))}
                      </VideosContainer>
                    )}
                  </HomeWatch>
                </MainContainer>
                )
              </HomeContainer>
            )
          }}
        </NxtWatch.Consumer>
      </>
    )
  }
}

export default Home
