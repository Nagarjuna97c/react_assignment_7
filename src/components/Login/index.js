import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import NxtWatch from '../../context/NxtWatch'

import {
  MainContainer,
  FormContainer,
  Logo,
  Label,
  Input,
  CheckBoxContainer,
  LoginButton,
  CheckBoxLabel,
  CheckboxInput,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {userName: '', password: '', showPassword: false, errorMsg: ''}

  changeUserName = event => {
    this.setState({userName: event.target.value, errorMsg: ''})
  }

  changePassword = event => {
    this.setState({password: event.target.value, errorMsg: ''})
  }

  changeShowPasword = () => {
    console.log('clicked')
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  submitPasword = async event => {
    event.preventDefault()
    const {userName, password} = this.state

    const userDetails = {
      username: userName,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const formattedResponse = await response.json()

    if (response.ok === true) {
      const jwtToken = formattedResponse.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: formattedResponse.error_msg})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatch.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {showPassword, userName, password, errorMsg} = this.state

          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <MainContainer dark={isDarkTheme}>
              <FormContainer dark={isDarkTheme} onSubmit={this.submitPasword}>
                <Logo src={logo} alt="website logo" />
                <Label dark={isDarkTheme} htmlFor="username">
                  USERNAME
                </Label>
                <Input
                  type="text"
                  id="username"
                  value={userName}
                  onChange={this.changeUserName}
                  placeholder="Username"
                />
                <Label dark={isDarkTheme} htmlFor="password">
                  PASSWORD
                </Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={this.changePassword}
                  placeholder="Password"
                />
                <CheckBoxContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    onClick={this.changeShowPasword}
                  />
                  <CheckBoxLabel dark={isDarkTheme} htmlFor="checkbox">
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorMsg !== '' && <Error>*{errorMsg}</Error>}
              </FormContainer>
            </MainContainer>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}

export default Login
