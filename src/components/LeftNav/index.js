import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {FaSave} from 'react-icons/fa'

import {
  MainContainer,
  LinksList,
  ListItem,
  ListText,
  StyledLink,
  ContactContainer,
  Heading,
  IconsContainer,
  Para,
  ContactImage,
} from './styledComponents'
import NxtWatch from '../../context/NxtWatch'

class LeftNav extends Component {
  render() {
    const {match} = this.props
    let {path} = match
    const {isExact} = match

    path = isExact ? path : undefined

    return (
      <NxtWatch.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainContainer dark={isDarkTheme}>
              <LinksList>
                <StyledLink to="/" dark={isDarkTheme}>
                  <ListItem selected={path === '/'}>
                    <AiFillHome size={25} />
                    <ListText dark={isDarkTheme}>Home</ListText>
                  </ListItem>
                </StyledLink>
                <StyledLink to="/trending" dark={isDarkTheme}>
                  <ListItem selected={path === '/trending'}>
                    <AiFillFire size={25} />
                    <ListText dark={isDarkTheme}>Trending</ListText>
                  </ListItem>
                </StyledLink>
                <StyledLink to="/gaming" dark={isDarkTheme}>
                  <ListItem selected={path === '/gaming'}>
                    <SiYoutubegaming size={25} />
                    <ListText dark={isDarkTheme}>Gaming</ListText>
                  </ListItem>
                </StyledLink>
                <StyledLink to="/saved-videos" dark={isDarkTheme}>
                  <ListItem selected={path === '/saved-videos'}>
                    <FaSave size={25} />
                    <ListText dark={isDarkTheme}>Saved videos</ListText>
                  </ListItem>
                </StyledLink>
              </LinksList>
              <ContactContainer>
                <Heading as="p" dark={isDarkTheme}>
                  CONTACT US
                </Heading>
                <IconsContainer>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <Para dark={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </ContactContainer>
            </MainContainer>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}

export default withRouter(LeftNav)
