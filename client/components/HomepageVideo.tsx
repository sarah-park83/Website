import { CSSProperties } from 'react'
import '../styles/homepage-video.css'
/* eslint-disable jsx-a11y/iframe-has-title */
export default function HomepageVideo() {
  const videoVideoStyle = {
    width: '640px',
    height: '360px',
  }
  const iframeStyle = {
    width: '100%',
    height: '100%',
  }
  return (
    <div className="video-container">
      <div className="video-video" style={videoVideoStyle}>
        <div className="video-frame">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-Gh3OUIO2WA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="대한생활체육회를 소개합니다"
            style={iframeStyle}
            className="video-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
