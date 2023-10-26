import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/스폰서 css/스폰서-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import moving from '../../../images/sponsors/ksmoving.jpeg'
import travel from '../../../images/sponsors/travelagency.jpeg'

export function 스폰서() {
  const isMobile = MobileCheck()

  return (
    <div>
      {isMobile ? (
        <div>
          <Dropdownmenu_mobile />
        </div>
      ) : (
        <div>
          <Dropdownmenu />
        </div>
      )}

      <Header />

      <div className="subpage-container">
        <div className="location-container">
          <MdHome
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="homeIcon"
          />
          <Link to="/">
            <h2>홈</h2>
          </Link>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <p>스폰서</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/notice/apply/1">
            <h2>스폰서</h2>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-container">
            <div className="navbarVertricle">
              <div className="title">
                <h2>스폰서</h2>
              </div>
              <div className="itemList">
                <Link to="/mou/mou">
                  <div className="navItem">
                    <div className="navLink">스폰서</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div className="mouList-title-container">
            대한생활체육회와 협력하고있는 기관들을 소개합니다.
          </div>
          <div className="mouList-container">
            <div className="mouList-imgContainer">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.open(
                    'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2F%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%82%E1%85%A9%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png?alt=media&amp;token=e75c52d4-6363-48ef-98bf-b96307ebaae9',
                    '_blank',
                    'width=380,height=500,top=100,left=100'
                  )
                }}
              >
                <ImageLoader
                  className="mouList-image"
                  src={moving}
                  alt="moving"
                />
              </button>
            </div>
            <div className="mouList-contextContainer">
              <div className="mouList-context-title">KS운송</div>
              <p>국내 해외 이사 통관 업무.</p>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="mouList-container">
            <div className="mouList-imgContainer">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.open(
                    'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2F%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%82%E1%85%A9%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png?alt=media&amp;token=e75c52d4-6363-48ef-98bf-b96307ebaae9',
                    '_blank',
                    'width=380,height=500,top=100,left=100'
                  )
                }}
              >
                <ImageLoader
                  className="mouList-image"
                  src={travel}
                  alt="travel"
                />
              </button>
            </div>
            <div className="mouList-contextContainer">
              <div className="mouList-context-title">세계항공여행사</div>
              <p>국내, 국제 항공권 상담</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
