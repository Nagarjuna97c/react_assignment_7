import styled from 'styled-components'

export const LoadingContainer = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  color: ${props => (!props.dark ? 'rgb(33,33,33)' : '#f9f9f9')};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  height: 30vh;
`

export const FailureHeading = styled.h1`
  font-size: 25px;
`

export const FailurePara = styled.p`
  font-size: 20px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  padding: 10px 17px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 30px;
`

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  padding-top: 80px;
  padding-left: 230px;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Banner = styled.div`
  height: 250px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`

export const Logo = styled.img`
  height: 35px;
`

export const BannerPara = styled.p`
  font-size: 22px;
  color: #181818;
  width: 420px;
`

export const BannerButton = styled.button`
  outline: none;
  background: none;
  padding: 12px 19px;
  border: 1px solid #181818;
  font-size: 20px;
  border-radius: 6px;
`

export const ButtonClose = styled.button`
  outline: none;
  background: none;
  border: none;
  align-self: flex-start;
`

export const HomeWatch = styled.div`
  background-color: ${props => (props.dark ? 'rgb(33,33,33)' : '#ebebeb')};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const GamingTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 200px;
  padding-left: 64px;
  background-color: ${props => (props.dark ? '#181818' : '#e2e8f0')};
`

export const GamingIconContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${props => (props.dark ? '#181818' : '#f1f1f1')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GamingHeading = styled.h1`
  color: ${props => (!props.dark ? 'rgb(33,33,33)' : '#ebebeb')};
`
