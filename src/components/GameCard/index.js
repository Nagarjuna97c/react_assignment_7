import NxtWatch from '../../context/NxtWatch'
import {StyledLink} from '../LeftNav/styledComponents'
import {
  VideoItem,
  ThumbnailImage,
  VideoCardBottom,
  VideoCardDetails,
  VideoCardHeading,
  Views,
} from './styledComponents'

const GameCard = props => {
  const {itemDetails} = props
  const {id, title, thumbnailUrl, viewCount} = itemDetails

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
                  <Views>{viewCount} Watching Worldwide</Views>
                </VideoCardDetails>
              </VideoCardBottom>
            </StyledLink>
          </VideoItem>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default GameCard
