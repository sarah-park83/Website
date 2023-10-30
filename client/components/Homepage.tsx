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

import logo from '../images/logo.png'

import badminton1 from '../images/Gallery/Badminton/badminton.jpeg'
import badminton2 from '../images/Gallery/Badminton/badminton2.jpeg'
import badminton3 from '../images/Gallery/Badminton/competition.jpeg'
import badminton4 from '../images/Gallery/Badminton/competition1.jpeg'
import badminton5 from '../images/Gallery/Badminton/competition2.jpeg'

import basketball1 from '../images/Gallery/Basketball/basketball.jpeg'
import basketball2 from '../images/Gallery/Basketball/basketball2.jpeg'
import basketball3 from '../images/Gallery/Basketball/basketball3.jpeg'
import basketball4 from '../images/Gallery/Basketball/basketball4.jpeg'
import basketball5 from '../images/Gallery/Basketball/basketball5.jpeg'
import basketball6 from '../images/Gallery/Basketball/basketball6.jpeg'
import basketball7 from '../images/Gallery/Basketball/basketball7.jpeg'

import groupPhoto from '../images/Gallery/Groupphoto/airport.jpeg'

import hockey1 from '../images/Gallery/Hockey/hockey.jpeg'
import hockey2 from '../images/Gallery/Hockey/hockey2.jpeg'
import hockey3 from '../images/Gallery/Hockey/hockey3.jpeg'
import hockey4 from '../images/Gallery/Hockey/hockey4.jpeg'
import hockey5 from '../images/Gallery/Hockey/hockey5.jpeg'
import hockey6 from '../images/Gallery/Hockey/hockey6.jpeg'
import hockey7 from '../images/Gallery/Hockey/hockey7.jpeg'
import hockey8 from '../images/Gallery/Hockey/hockey8.jpeg'

import leaderImage from '../images/Gallery/President/president.jpeg'

import swimmingImage from '../images/Gallery/Swimming/swimming.jpeg'

import soccer1 from '../images/Gallery/Soccer/soccer.jpeg'
import soccer2 from '../images/Gallery/Soccer/soccer2.jpeg'
import soccer3 from '../images/Gallery/Soccer/soccer3.jpeg'

import jeonju1 from '../images/Gallery/Jeonju/jeonju.jpeg'
import jeonju2 from '../images/Gallery/Jeonju/jeonju2.jpeg'
import jeonju3 from '../images/Gallery/Jeonju/jeonju3.jpeg'
import jeonju4 from '../images/Gallery/Jeonju/jeonju4.jpeg'

import '../styles/homepage.css'

export function Homepage() {
  const isMobile = MobileCheck()
  const popupImagePaths = [popupImage]
  const images = [
    {
      path: logo,
    },
    {
      path: badminton1,
    },
    {
      path: badminton2,
    },
    {
      path: badminton3,
    },
    {
      path: badminton4,
    },
    {
      path: badminton5,
    },
    {
      path: basketball1,
    },
    {
      path: basketball2,
    },
    {
      path: basketball3,
    },
    {
      path: basketball4,
    },
    {
      path: basketball5,
    },
    {
      path: basketball6,
    },
    {
      path: basketball7,
    },
    {
      path: groupPhoto,
    },
    {
      path: hockey1,
    },
    {
      path: hockey2,
    },
    {
      path: hockey3,
    },
    {
      path: hockey4,
    },
    {
      path: hockey5,
    },
    {
      path: hockey6,
    },
    {
      path: hockey7,
    },
    {
      path: hockey8,
    },
    {
      path: leaderImage,
    },
    {
      path: swimmingImage,
    },
    {
      path: soccer1,
    },
    {
      path: soccer2,
    },
    {
      path: soccer3,
    },
    {
      path: jeonju1,
    },
    {
      path: jeonju2,
    },
    {
      path: jeonju3,
    },
    {
      path: jeonju4,
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
        <Gallery images={images} />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
