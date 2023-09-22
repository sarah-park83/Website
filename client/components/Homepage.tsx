import Dropdownmenu from './Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from './Dropdown/Dropdownmenu-mobile'
import Footer from './Footer'
import Banner from './Banner'
import HomepageVideo from './HomepageVideo'
import Popup from './Popup'
import MobileCheck from './Dropdown/Mobile-check'
import Tafisa from './Tafisa'
import Gallery from './Gallery'
import TafisaIntro from './TafisaIntro'

import '../styles/homepage.css'

export function Homepage() {
  const isMobile = MobileCheck()
  const popupImagePaths = ['/images/Popup/ad.jpeg']
  const imageLinks = [
    {
      path: '/images/Gallery/Badminton/badminton1.JPG?url',
      link: 'http://localhost:5173/article/photo/badminton',
    },
    {
      path: '/images/Gallery/Basketball/basketball1.JPG?url',
      link: 'http://localhost:5173/article/photo/basketball',
    },
    {
      path: '/images/Gallery/Group-Photo/groupPhoto5.JPG?url',
      link: 'http://localhost:5173/article/photo/groupPhotos',
    },
    {
      path: '/images/Gallery/Hockey/hockey4.JPG?url',
      link: 'http://http://localhost:5173/article/photo/hockey',
    },
    {
      path: '/images/Gallery/Leader-Election/election1.JPG?url',
      link: 'http://localhost:5173/article/photo/election',
    },
    {
      path: '/images/Gallery/Pool/pool1.JPG?url',
      link: 'http://localhost:5173/article/photo/pool',
    },
    {
      path: '/images/Gallery/Soccer/soccer1.JPG?url',
      link: 'http://localhost:5173/article/photo/soccer',
    },
    {
      path: '/images/Gallery/Swimming/swimming1.JPG?url',
      link: 'http://localhost:5173/article/photo/swimming',
    },
    {
      path: '/images/Gallery/Tennis/tennis1.JPG?url',
      link: 'http://localhost:5173/article/photo/tennis',
    },
    {
      path: '/images/Gallery/Trophy/trophy1.JPG?url',
      link: 'http://localhost:5173/article/photo/trophy',
    },
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
        <TafisaIntro />
        <Gallery images={imageLinks} />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
