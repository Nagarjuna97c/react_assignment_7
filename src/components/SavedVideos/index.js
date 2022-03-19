import {Component} from 'react'
import {AiOutlineClose, AiFillFire} from 'react-icons/ai'

import NxtWatch from '../../context/NxtWatch'

import Header from '../Header/Header'
import LeftNav from '../LeftNav'
import SavedVideoCard from '../SavedVideoCard'

import {
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsPara,
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

class SavedVideos extends Component {
  state = {
    displayBanner: true,
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
  }

  renderNoResults = isDarkTheme => {
    const noResultsImage =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
    return (
      <NoResultsContainer dark={isDarkTheme}>
        <NoResultsImage src={noResultsImage} alt="no saved videos" />
        <NoResultsHeading dark={isDarkTheme}>
          No saved videos found
        </NoResultsHeading>
        <NoResultsPara>
          You can save your videos while watching them
        </NoResultsPara>
      </NoResultsContainer>
    )
  }

  render() {
    const {displayBanner} = this.state
    return (
      <>
        <Header />
        <NxtWatch.Consumer>
          {value => {
            const {isDarkTheme, savedVideos} = value

            return (
              <>
                <LeftNav />
                <MainContainer dark={isDarkTheme} data-testid="home">
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
                        <AiFillFire size={60} fill="#ff0000" />
                      </GamingIconContainer>
                      <GamingHeading dark={isDarkTheme}>
                        Saved Videos
                      </GamingHeading>
                    </GamingTop>
                    <HomeWatch dark={isDarkTheme}>
                      {savedVideos.length === 0 ? (
                        this.renderNoResults(isDarkTheme)
                      ) : (
                        <VideosContainer>
                          {savedVideos.map(eachItem => (
                            <SavedVideoCard
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

export default SavedVideos
