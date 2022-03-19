import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  height: 80px;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: grid;
  grid-template-columns: 1fr 70px 70px 100px;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 50px;
  position: fixed;
  width: 100vw;
`

export const Logo = styled.img`
  height: 35px;
`

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background: none;
`

export const Image = styled.img`
  height: 50px;
`

export const LogOutPopup = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  color: ${props => (!props.dark ? '#181818' : '#f9f9f9')};

  height: 180px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const LogoutConfirmationText = styled.p`
  font-size: 20px;
`

export const LogoutCancel = styled.button`
  outline: none;
  border: 1px solid #616e7c;
  background-color: transparent;
  font-size: 20px;
  border-radius: 6px;
  color: #616e7c;
  padding: 7px 14px;
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const LogOutButton = styled.button`
  outline: none;
  border: 1px solid ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  font-size: 20px;
  border-radius: 6px;
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  padding: 7px 14px;
`

export const LogOutConfirmationButton = styled.button`
  outline: none;
  border: none;
  background-color: #3b82f6;
  font-size: 20px;
  border-radius: 6px;
  color: #ffffff;
  padding: 7px 14px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
`
