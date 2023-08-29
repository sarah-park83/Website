import '../../styles/Sub-pages/subpage.css'
import '../../styles/Sub-pages/설립목적-content.css'
import Dropdownmenu from '../Dropdown/Dropdownmenu'
import Footer from '../Footer'
import Header from './Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 설립목적() {
  return (
    <div>
      <Dropdownmenu />

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
          <p>체육회소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/info/purpose">
            <h2>설립목적</h2>
          </Link>
        </div>

        <div className="navbar-container">
          <div className="navbarVertricle">
            <div className="title">
              <h2>체육회소개</h2>
            </div>
            <div className="itemList">
              <Link to="/info/greet">
                <div className="navItem">
                  <div className="navLink">총재 인사말</div>
                </div>
              </Link>
              <Link to="/info/purpose">
                <div className="navItem">
                  <div className="navLink">설립목적</div>
                </div>
              </Link>
              <Link to="#info/chart">
                <div className="navItem">
                  <div className="navLink">중앙 조직도</div>
                </div>
              </Link>
              <Link to="#info/status">
                <div className="navItem">
                  <div className="navLink">임원현황</div>
                </div>
              </Link>
              <Link to="#info/location">
                <div className="navItem">
                  <div className="navLink">오시는 길</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>설립목적</h2>
              <h3>대한생활체육회의 설립목적을 소개합니다..</h3>
            </div>

            <div className="purpose-content-container">
              <h2>스포츠가 최고의 국민건강 복지다</h2>
              <ul className="purpose-list">
                <li className="purpose-item-container">
                  <div className="purpose-number">1</div>
                  <h3 className="purpose-content">
                    생활체육 내외의 스포츠 클럽 활동을 지원,육성하여 국민건강
                    복지증진에 기여
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
