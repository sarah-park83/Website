import { useState } from 'react'
import YouTube from 'react-youtube'

import '../styles/homepage-video.css'

export default function HomepageVideo() {
  const [isHovered, setIsHovered] = useState(false)

  const onPlayVideo = () => {
    setIsHovered(true)
  }

  const onPauseVideo = () => {
    setIsHovered(false)
  }

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  }

  return (
    <div
      className={`video-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onPlayVideo}
      onMouseLeave={onPauseVideo}
    >
      <div className="video-video">
        <div className="video-frame">
          <YouTube
            videoId="-Gh3OUIO2WA"
            opts={videoOptions}
            // onReady={(e) => e.target.pauseVideo()}
          />
        </div>
      </div>
    </div>
  )
}
