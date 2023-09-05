import Dropdownmenu from './Dropdown/Dropdownmenu'
import Photogallery from './Photogallery'
import Footer from './Footer'
import Banner from './Banner'
import HomepageVideo from './HomepageVideo'
import Popup from './Popup'
import Noticeboard from './Noticeboard'
import Associationintro from './Associationintro'

import '../styles/homepage.css'

export function Homepage() {
  return (
    <div className="page-container">
      <Dropdownmenu />
      <Banner />
      <Popup />
      <Noticeboard />
      <div className="video-section">
        <HomepageVideo />
      </div>
      <div>
        <Associationintro />
        <Photogallery />
        <Footer />
      </div>
    </div>
  )
}
