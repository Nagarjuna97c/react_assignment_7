import NxtWatch from '../../context/NxtWatch'
import {StyledLink} from '../LeftNav/styledComponents'
import {
  VideoItem,
  ThumbnailImage,
  VideoCardBottom,
  Image,
  VideoCardDetails,
  VideoCardHeading,
  ChannelName,
  ViewsAndPublished,
  Views,
  Published,
} from './styledComponents'

const VideoCard = props => {
  const {itemDetails} = props
  const {
    id,
    title,
    publishedAt,
    thumbnailUrl,
    viewCount,
    channel: {name, profileImageUrl},
  } = itemDetails

  return (
    <NxtWatch.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoItem as="li">
            <StyledLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottom>
                <Image src={profileImageUrl} alt="channel logo" />
                <VideoCardDetails dark={isDarkTheme}>
                  <VideoCardHeading as="p">{title}</VideoCardHeading>
                  <ChannelName>{name}</ChannelName>
                  <ViewsAndPublished>
                    <Views>{viewCount}</Views>
                    <Published>{publishedAt}</Published>
                  </ViewsAndPublished>
                </VideoCardDetails>
              </VideoCardBottom>
            </StyledLink>
          </VideoItem>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default VideoCard
