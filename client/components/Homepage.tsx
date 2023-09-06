import Dropdownmenu from './Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from './Dropdown/Dropdownmenu-mobile'
import Photogallery from './Photogallery'
import Footer from './Footer'
import Banner from './Banner'
import HomepageVideo from './HomepageVideo'
import Popup from './Popup'
import Noticeboard from './Noticeboard'
import Intro from './Intro'

import '../styles/homepage.css'

import { useState, useEffect } from 'react'

export function Homepage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 870)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="page-container">
      <div>{isMobile ? <Dropdownmenu_mobile /> : <Dropdownmenu />}</div>
      <Banner />
      <Popup />
      <Noticeboard />
      <div className="video-section">
        <HomepageVideo />
      </div>
      <div>
        <Intro />
        <Photogallery />
        <Footer />
      </div>
    </div>
  )
}
