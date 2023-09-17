import Dropdownmenu from './Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from './Dropdown/Dropdownmenu-mobile'
import Footer from './Footer'
import Banner from './Banner'
import HomepageVideo from './HomepageVideo'
import Popup from './Popup'
import Intro from './Intro'
import MobileCheck from './Dropdown/Mobile-check'
import Tafisa from './Tafisa'
import Gallery from './Gallery'

import '../styles/homepage.css'

export function Homepage() {
  const isMobile = MobileCheck()
  const popupImagePaths = ['/images/Popup/ad.jpeg']
  const imagePaths = [
    '/images/Gallery/image1.jpeg',
    '/images/Gallery/image2.jpeg',
    '/images/Gallery/image3.jpeg',
  ]
  return (
    <div className="page-container">
      <div>{isMobile ? <Dropdownmenu_mobile /> : <Dropdownmenu />}</div>
      <Banner />
      <Popup popupImagePaths={popupImagePaths} />
      <Tafisa />
      <div className="video-section">
        <HomepageVideo />
      </div>
      <div>
        <Intro />
        <Gallery imagePaths={imagePaths} />
        <Footer />
      </div>
    </div>
  )
}
