import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  align-items: center;
  gap: 10px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
`

export const ThumbnailImage = styled.img`
  height: 350px;
`

export const VideoCardBottom = styled.div`
  display: flex;
  gap: 8px;
`

export const Image = styled.img`
  height: 50px;
`

export const VideoCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  gap: 10px;
`
export const VideoCardHeading = styled.h1`
  font-size: 18px;
`
export const ChannelName = styled.p`
  color: #616e7c;
`
export const ViewsAndPublished = styled.div`
  font-size: 18px;
  color: #616e7c;
  display: flex;
  gap: 10px;
`

export const Views = styled.p`
  font-size: 16px;
  color: #616e7c;
`

export const Published = styled.p`
  font-size: 16px;
  color: #616e7c;
  list-style-type: circle;
`
