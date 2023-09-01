import Dropdownmenu from './Dropdown/Dropdownmenu'
import Photogallery from './Photogallery'
import Footer from './Footer'
import Banner from './Banner'
import HomepageVideo from './HomepageVideo'
import Popup from './Popup'

import '../styles/homepage.css'

export function Homepage() {
  return (
    <div className="page-container">
      <Dropdownmenu />
      <Banner />
      <Popup />
      <div className="video-section">
        <HomepageVideo />
      </div>
      <Photogallery />
      <Footer />
    </div>
  )
}
