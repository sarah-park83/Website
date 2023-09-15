import { useState } from 'react'

import '../styles/homepage-video.css'

export default function HomepageVideo() {
  const [isHovered, setIsHovered] = useState(false)

  const onPlayVideo = () => {
    setIsHovered(true)
  }

  const onPauseVideo = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={`video-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onPlayVideo}
      onMouseLeave={onPauseVideo}
    >
      <div className="video-video">
        <div className="video-frame">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-Gh3OUIO2WA?autoplay=1&mute=1"
            title="대한생활체육회를 소개합니다"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
