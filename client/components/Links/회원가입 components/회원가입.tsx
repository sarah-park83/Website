import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/단체소개 css/전국체육회현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'

import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 회원가입() {
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
          <p>회원가입</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/join">
            <h2>회원가입</h2>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-container">
            <div className="navbarVertricle">
              <div className="title">
                <h2>회원가입</h2>
              </div>
              <div className="itemList">
                <Link to="/join">
                  <div className="navItem">
                    <div className="navLink">회원가입</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>뉴질랜드 대한생활체육회</h2>
              <h3>회원가입 안내</h3>
            </div>
            <div className="login-paragraph">
              <br />
              클럽별, 개인별 회원 가입 가능합니다. 간단히 이메일 주시면 안내 해
              드리겠습니다. <br />
              감사합니다.
            </div>
            <p className="login-paragraph-email">e-mail: nzklsct@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
