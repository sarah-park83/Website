import Dropdownmenu from './Dropdown/Dropdownmenu'
import Photogallery from './Photogallery'
import Footer from './Footer'
import Banner from './Banner'
import HomepageVideo from './HomepageVideo'

import '../styles/homepage.css'

export function Homepage() {
  return (
    <div className="page-container">
      <Dropdownmenu />
      <Banner />
      <div className="video-section">
        <HomepageVideo />
      </div>
      <Photogallery />
      <Footer />
    </div>
  )
}
