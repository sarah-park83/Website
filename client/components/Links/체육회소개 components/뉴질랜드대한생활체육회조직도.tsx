import '../../../styles/Sub-pages/subpage.css'
// import '../../../styles/Sub-pages/체육회 소개 css/임원현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 뉴질랜드대한생활체육회조직도() {
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
          <Link to="/info/chart">
            <h2>뉴질랜드 대한생활체육회 조직도</h2>
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
                <Link to="/info/chart">
                  <div className="navItem">
                    <div className="navLink">
                      뉴질랜드 대한생활체육회 조직도
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>뉴질랜드 대한생활체육회 조직도</h2>
              <h3>
                뉴질랜드한인라이프스타일스포츠협회 운영진 현황을 소개합니다.
              </h3>
            </div>

            <div className="status-result-container">
              <h5>▶ 뉴질랜드 대한생활체육회 조직도</h5>
            </div>
            <div className="status-container">
              <div className="status-position">1</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="1"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 회장</h6>
                      <h6>성명 : 김웅기</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">2</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="2"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부회장</h6>
                      <h6>성명 : 유용상</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">3</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="3"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 사무장</h6>
                      <h6>성명 : 김승현</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">4</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="4"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 감사</h6>
                      <h6>성명 : 안영준</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">5</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="5"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 총무이사</h6>
                      <h6>성명 : 김도균</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">6</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="6"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 체육수석이사</h6>
                      <h6>성명 : 이재구</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">7</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="7"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 섭외이사</h6>
                      <h6>성명 : 김영옥</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">8</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="8"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 홍보이사</h6>
                      <h6>성명 : 이재훈</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">9</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="9"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 자문의원</h6>
                      <h6>성명 : . . .</h6>
                    </div>
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
