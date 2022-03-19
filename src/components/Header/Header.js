import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import NxtWatch from '../../context/NxtWatch'
import {
  MainContainer,
  StyledLink,
  Logo,
  ThemeButton,
  Image,
  LogOutButton,
  LogOutPopup,
  LogoutConfirmationText,
  PopupButtonsContainer,
  LogoutCancel,
  LogOutConfirmationButton,
} from './styledComponents'

const Header = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatch.Consumer>
      {value => {
        const {isDarkTheme, onToggleTheme} = value

        const logo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <MainContainer dark={isDarkTheme}>
            <StyledLink to="/">
              <Logo src={logo} alt="website logo" />
            </StyledLink>
            {!isDarkTheme ? (
              <ThemeButton
                type="button"
                onClick={() => onToggleTheme()}
                data-testid="theme"
              >
                <FaMoon size={30} />
              </ThemeButton>
            ) : (
              <ThemeButton
                type="button"
                onClick={() => onToggleTheme()}
                data-testid="theme"
              >
                <FiSun color="white" size={30} />
              </ThemeButton>
            )}
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={<LogOutButton dark={isDarkTheme}>Logout</LogOutButton>}
            >
              {close => (
                <LogOutPopup dark={isDarkTheme}>
                  <LogoutConfirmationText>
                    Are you sure, you want to logout?
                  </LogoutConfirmationText>
                  <PopupButtonsContainer>
                    <LogoutCancel
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </LogoutCancel>
                    <LogOutConfirmationButton
                      dark={isDarkTheme}
                      onClick={logOut}
                    >
                      Confirm
                    </LogOutConfirmationButton>
                  </PopupButtonsContainer>
                </LogOutPopup>
              )}
            </Popup>
          </MainContainer>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default withRouter(Header)
