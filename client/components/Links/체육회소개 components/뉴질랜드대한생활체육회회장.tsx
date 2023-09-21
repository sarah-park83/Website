import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/체육회 소개 css/뉴질랜드대한생활체육회회장-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 뉴질랜드대한생활체육회회장() {
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
          <p>체육회소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/info/greet">
            <h2>뉴질랜드 대한생활체육회 회장</h2>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-container">
            <div className="navbarVertricle">
              <div className="title">
                <h2>체육회소개</h2>
              </div>
              <div className="itemList">
                <Link to="/info/greet">
                  <div className="navItem">
                    <div className="navLink">뉴질랜드 대한생활체육회 회장</div>
                  </div>
                </Link>
                <Link to="/info/purpose">
                  <div className="navItem">
                    <div className="navLink">설립목적</div>
                  </div>
                </Link>
                <Link to="/info/status">
                  <div className="navItem">
                    <div className="navLink">뉴질랜드 회원 클럽</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>뉴질랜드 대한생활체육회 회장</h2>
              <h3>한인뉴질랜드 대한생활체육회 회장 김웅기의 인사말입니다.</h3>
            </div>

            <div className="greet-content-container">
              <ImageLoader
                src="../../../../public/images/회장.jpeg"
                alt="회장"
              />
              <h6>뉴질랜드 대한생활체육회 회장 김웅기</h6>
              <div className="greet-text-container">
                <div>
                  <div>
                    <p>
                      한인뉴질랜드 대한생활체육회는 뉴질랜드 교민들의 다양한
                      체육 동호인들의 행복한 체육 활동을 후원하고 도와주는 한국
                      사단법인 대한생활체육회 산하 단체이고 세계생활체육연맹
                      TAFISA회원입니다.
                    </p>
                    <p>
                      이 단체는 정치 종교에 상관하지 않는 순수 체육단체로 모든
                      경영을 투명화 합니다.
                      <br />
                      한인뉴질랜드 대한생활체육회를 위해 해 주시는 여러분의
                      후원은 연말 도네이션 클레임이 가능합니다.
                    </p>
                    <p>
                      뉴질랜드 모든 교민을 가장 소중한 회원으로 모시기 원합니다.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p>감사합니다.</p>
                    <p>
                      한인뉴질랜드 대한생활체육회 회장
                      <br />
                      김웅기 올림
                    </p>
                  </div>
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
