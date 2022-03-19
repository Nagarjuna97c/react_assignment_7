import styled from 'styled-components'

export const NoResultsContainer = styled.div`
  color: ${props => (!props.dark ? 'rgb(33,33,33)' : '#f9f9f9')};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const NoResultsImage = styled.img`
  height: 30vh;
`

export const NoResultsHeading = styled.h1`
  font-size: 25px;
`

export const NoResultsPara = styled.p`
  font-size: 20px;
`

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.dark ? 'rgb(33,33,33)' : '#f9f9f9')};
  display: flex;
  padding-top: 80px;
  padding-left: 230px;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HomeWatch = styled.div`
  background-color: ${props => (props.dark ? 'rgb(33,33,33)' : '#ebebeb')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px;
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
