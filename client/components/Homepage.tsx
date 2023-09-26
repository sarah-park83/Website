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
import popupImage from '../images/Popup/ad.jpeg'
import badmintonImage from '../images/Gallery/Badminton/badminton1.JPG?url'
import basketballImage from '../images/Gallery/Basketball/basketball1.JPG?url'
import groupPhotoImage from '../images/Gallery/Group-Photo/groupPhoto5.JPG?url'
import hockeyImage from '../images/Gallery/Hockey/hockey4.JPG?url'
import leaderImage from '../images/Gallery/Leader-Election/election1.JPG?url'
import poolImage from '../images/Gallery/Pool/pool1.JPG?url'
import soccerImage from '../images/Gallery/Soccer/soccer1.JPG?url'
import swimmingImage from '../images/Gallery/Swimming/swimming1.JPG?url'
import tennisImage from '../images/Gallery/Tennis/tennis1.JPG?url'
import trophyImage from '../images/Gallery/Trophy/trophy1.JPG?url'

import '../styles/homepage.css'

export function Homepage() {
  const isMobile = MobileCheck()
  const popupImagePaths = [popupImage]
  const imageLinks = [
    {
      path: badmintonImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/badminton',
    },
    {
      path: basketballImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/basketball',
    },
    {
      path: groupPhotoImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/groupPhotos',
    },
    {
      path: hockeyImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/hockey',
    },
    {
      path: leaderImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/election',
    },
    {
      path: poolImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/pool',
    },
    {
      path: soccerImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/soccer',
    },
    {
      path: swimmingImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/swimming',
    },
    {
      path: tennisImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/tennis',
    },
    {
      path: trophyImage,
      link: 'https://www.nzksfaa.co.nz//article/photo/trophy',
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
