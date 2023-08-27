import '../../styles/subpage.css'
import Dropdownmenu from '../Dropdown/Dropdownmenu'
import Footer from '../Footer'
import Header from './Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 총재인사말() {
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
          <Link to="/info/greet">
            <h2>총재 인사말</h2>
          </Link>
        </div>

        <div className="navbar-container">
          <div className="navbarVertricle">
            <div className="title">
              <h2>체육회소개</h2>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="subMenu-title-container">
            <h2>총재 인사말</h2>
            <h3>대한생활체육회 총재 김균식의 인사말입니다.</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
