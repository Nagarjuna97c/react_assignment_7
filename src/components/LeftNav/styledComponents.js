import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  width: 230px;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding-bottom: 20px;
  position: fixed;
  bottom: 0;
  top: 80px;
`
export const LinksList = styled.ul`
  padding-left: 15px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  color: ${props => (props.selected ? '#ff0b37' : null)};
`

export const ListText = styled.p`
  color: black;
  font-size: 20px;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  gap: 20px;
  padding-left: 20px;
`

export const Heading = styled.h1`
  font-size: 22px;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const ContactImage = styled.img`
  height: 40px;
`

export const Para = styled.p`
  font-size: 20px;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
`
