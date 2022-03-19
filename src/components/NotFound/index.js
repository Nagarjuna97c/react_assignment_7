import NxtWatch from '../../context/NxtWatch'

import Header from '../Header/Header'
import LeftNav from '../LeftNav'

import {
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsPara,
  MainContainer,
  HomeContent,
  HomeWatch,
  VideosContainer,
} from './styledComponents'

const SavedVideos = () => (
  <>
    <Header />
    <NxtWatch.Consumer>
      {value => {
        const {isDarkTheme} = value
        const notFoundImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <>
            <LeftNav />
            <MainContainer dark={isDarkTheme} data-testid="home">
              <HomeContent>
                <HomeWatch dark={isDarkTheme}>
                  <VideosContainer>
                    <NoResultsContainer dark={isDarkTheme}>
                      <NoResultsImage
                        src={notFoundImage}
                        alt="Not Found Image"
                      />
                      <NoResultsHeading as="h1" dark={isDarkTheme}>
                        Page Not Found
                      </NoResultsHeading>
                      <NoResultsPara as="p">
                        we are sorry, the page you requested could not be found.
                      </NoResultsPara>
                    </NoResultsContainer>
                  </VideosContainer>
                </HomeWatch>
              </HomeContent>
            </MainContainer>
          </>
        )
      }}
    </NxtWatch.Consumer>
  </>
)

export default SavedVideos
