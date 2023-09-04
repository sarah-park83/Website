import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/단체소개 css/전국체육회현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 국제체육회현황() {
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
          <p>단체소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="#info/purpose">
            <h2>국제체육회현황</h2>
          </Link>
        </div>

        <div className="navbar-container">
          <div className="navbarVertricle">
            <div className="title">
              <h2>단체소개</h2>
            </div>
            <div className="itemList">
              <Link to="/group/nation">
                <div className="navItem">
                  <div className="navLink">전국체육회현황</div>
                </div>
              </Link>
              <Link to="/group/internation">
                <div className="navItem">
                  <div className="navLink">국제체육회현황</div>
                </div>
              </Link>
              <Link to="#group/sports">
                <div className="navItem">
                  <div className="navLink">종목별 운영현황</div>
                </div>
              </Link>
              <Link to="#group/sanha">
                <div className="navItem">
                  <div className="navLink">산하단체</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>국제체육회현황</h2>
              <h3>대한생활체육회의 국제체육회현황입니다.</h3>
            </div>
            <div>
              <div className="group-list-container">
                <div className="group-list-title">한인미주대한생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fusa.png?alt=media&amp;token=61d68bb8-9799-410b-b3e3-d1cc57b80b6c',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fusa.png?alt=media&amp;token=61d68bb8-9799-410b-b3e3-d1cc57b80b6c"
                        alt="한인미주대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 전경수
                    <br />
                    체육회명 : 한인미주대한생활체육회
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
