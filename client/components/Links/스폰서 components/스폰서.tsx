import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/스폰서 css/스폰서-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import moving from '../../../images/sponsors/ksmoving.jpeg'
import travel from '../../../images/sponsors/travelagency.jpeg'
import hanks from '../../../images/sponsors/hank.jpeg'
import honey from '../../../images/sponsors/honey.jpeg'

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
          <Link to="/mou/mou">
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
              <img className="mouList-image" src={moving} alt="moving" />
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
              <img className="mouList-image" src={travel} alt="travel" />
            </div>
            <div className="mouList-contextContainer">
              <div className="mouList-context-title">세계항공여행사</div>
              <p>국내, 국제 항공권 상담</p>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="mouList-container">
            <div className="mouList-imgContainer">
              <img className="mouList-image" src={honey} alt="honey" />
            </div>
            <div className="mouList-contextContainer">
              <div className="mouList-context-title">Hackett</div>
              <p>뉴질랜드 마누카 허니</p>
              <a href="https://www.hacketts.co.nz">홈페이지 방문</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
