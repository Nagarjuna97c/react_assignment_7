import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const ThumbnailImage = styled.img`
  width: 500px;
  height: 300px;
`

export const VideoCardBottom = styled.div`
  display: flex;
  gap: 8px;
`

export const VideoCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  gap: 15px;
`
export const VideoCardHeading = styled.h1`
  font-size: 22px;
  line-height: 1.7;
`
export const ChannelName = styled.p`
  font-size: 20px;
  color: #616e7c;
`
export const ViewsAndPublished = styled.div`
  font-size: 19px;
  color: #616e7c;
  display: flex;
  gap: 10px;
`

export const Views = styled.p``

export const Published = styled.p`
  list-style-type: circle;
`
