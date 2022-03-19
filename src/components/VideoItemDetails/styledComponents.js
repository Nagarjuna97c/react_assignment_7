import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const LoadingContainer = styled.div`
  padding-left: 50%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  padding-left: 20%;
  color: ${props => (!props.dark ? '#0f0f0f' : '#f9f9f9')};
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
  width: 100vw;
`

export const SelectedVideo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const CustomizedPlayer = styled(ReactPlayer)`
  align-self: center;
  width: 800px !important;
  height: 450px !important;
`

export const TextContainer = styled.div`
  margin-top: 30px;
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const VideoCardHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (!props.dark ? 'rgb(33,33,33)' : '#f9f9f9')};
`

export const VideoActions = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: 60px 1fr 75px 95px 95px;
  align-items: center;
  gap: 10px;
  color: ${props => (!props.dark ? 'rgb(33,33,33)' : '#f9f9f9')};
  margin-bottom: 30px;
`

export const ReactionButton = styled.button`
  outline: none;
  border: none;
  background: none;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
`

export const Views = styled.p`
  font-size: 20px;
  color: #616e7c;
`

export const Published = styled.p`
  font-size: 20px;
  color: #616e7c;
`

export const VideoDescription = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
`

export const ProfileImage = styled.img`
  height: 60px;
  grid-row: 1/-4;
`

export const ChannelName = styled.p`
  color: #616e7c;
  margin-bottom: 10px;
  font-weight: 600;
`

export const Description = styled.p`
  margin-top: 20px;
  color: #616e7c;
`
