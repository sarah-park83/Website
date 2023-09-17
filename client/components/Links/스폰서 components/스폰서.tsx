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
                  src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2F%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%82%E1%85%A9%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png?alt=media&amp;token=e75c52d4-6363-48ef-98bf-b96307ebaae9"
                  alt="엔노블"
                />
              </button>
            </div>
            <div className="mouList-contextContainer">
              <div className="mouList-context-title">엔노블</div>
              <p>
                엔노블은 명문가, 사회지도층, 전문직, 엘리트, 명문대, 크리스찬,
                유학생, 재혼 등 노블레스 성혼을 전문으로 하는 상위 1%를 위한
                상류층 결혼정보회사입니다.
              </p>
              <a
                href="https://www.nnoble.co.kr"
                className="mouList-button"
                target="_blank"
                rel="noreferrer"
              >
                홈페이지 방문
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
