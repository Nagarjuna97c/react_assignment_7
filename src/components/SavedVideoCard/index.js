import NxtWatch from '../../context/NxtWatch'
import {
  VideoItem,
  ThumbnailImage,
  VideoCardBottom,
  VideoCardDetails,
  VideoCardHeading,
  ChannelName,
  ViewsAndPublished,
  Views,
  Published,
  StyledLink,
} from './styledComponents'

const SavedVideoCard = props => {
  const {itemDetails} = props
  const {
    id,
    title,
    publishedAt,
    thumbnailUrl,
    viewCount,
    channel: {name},
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

export default SavedVideoCard
