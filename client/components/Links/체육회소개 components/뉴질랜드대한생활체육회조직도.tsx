import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/체육회 소개 css/뉴질랜드대한생활체육회조직도-content.css'

import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo2 from '../../../images/logo2.png'

export function 뉴질랜드대한생활체육회조직도() {
  const isMobile = MobileCheck()

  const statusCardStyles = {
    marginRight: '20px',
  }

  const nameStyles = {
    paddingLeft: '5%',
  }

  const multipleRows = {
    marginLeft: 'auto',
  }

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
              <h3>뉴질랜드 대한생활체육회 운영진 현황을 소개합니다.</h3>
            </div>

            <div className="status-result-container-jojik">
              <h5>▶ 뉴질랜드 대한생활체육회 조직도</h5>
            </div>
            <div className="text-container">
              <h2>뉴질랜드 대한생활체육회 조직도</h2>
            </div>
            <div className="status-container-jojik">
              <div className="logo2-container" style={{ marginBottom: 0 }}>
                <ImageLoader className="logo2" src={logo2} alt="logo" />
              </div>

              <div className="status-position-jojik"></div>
              <div className="status-card-jojik-arrow">
                <div className="status-id-text-container-jojik">
                  <h6 style={{ backgroundColor: '#C8DBBE' }}>
                    <div className="titles-jojik">회장</div>
                  </h6>
                </div>
                <div className="status-box-jojik">
                  <div className="status-content-jojik">
                    <div className="status-id-photo-container-jojik">
                      <div className="status-id-photo-jojik">
                        <ImageLoader
                          className="id-photo-jojik"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="1"
                        />
                      </div>
                    </div>
                    <div className="name">
                      <h6>김웅기</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position-jojik"></div>
              <div className="status-card-jojik-arrow">
                <div className="status-id-text-container-jojik">
                  <h6 style={{ backgroundColor: '#C8DBBE' }}>
                    <div className="titles-jojik">부회장</div>
                  </h6>
                </div>
                <div className="status-box-jojik">
                  <div className="status-content-jojik">
                    <div className="status-id-photo-container-jojik">
                      <div className="status-id-photo-jojik">
                        <ImageLoader
                          className="id-photo-jojik"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="1"
                        />
                      </div>
                    </div>
                    <div className="name">
                      <h6>유용상</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position-jojik"></div>
              <div className="status-card-jojik-arrow">
                <div className="status-id-text-container-jojik">
                  <h6 style={{ backgroundColor: '#C8DBBE' }}>
                    <div className="titles-jojik">총괄본부장</div>
                  </h6>
                </div>
                <div className="status-box-jojik">
                  <div className="status-content-jojik">
                    <div className="status-id-photo-container-jojik">
                      <div className="status-id-photo-jojik">
                        <ImageLoader
                          className="id-photo-jojik"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="2"
                        />
                      </div>
                    </div>
                    <div className="name">
                      <h6>김영옥</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position-jojik"></div>
              <div className="status-card-jojik-arrow">
                <div className="status-id-text-container-jojik">
                  <h6 style={{ backgroundColor: '#C8DBBE' }}>
                    <div className="titles-jojik">사무총장</div>
                  </h6>
                </div>
                <div className="status-box-jojik">
                  <div className="status-content-jojik">
                    <div className="status-id-photo-container-jojik">
                      <div className="status-id-photo-jojik">
                        <ImageLoader
                          className="id-photo-jojik"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="3"
                        />
                      </div>
                    </div>
                    <div className="name">
                      <h6>김승현</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position-jojik">
                <div
                  className="status-card-jojik-arrow-upper"
                  style={statusCardStyles}
                >
                  <div className="status-id-text-container-jojik">
                    <h6 style={{ backgroundColor: '#C8DBBE' }}>
                      <div className="titles-jojik">총무이사</div>
                    </h6>
                  </div>
                  <div className="status-box-jojik">
                    <div className="status-content-jojik">
                      <div className="status-id-photo-container-jojik">
                        <div className="status-id-photo-jojik">
                          <ImageLoader
                            className="id-photo-jojik"
                            src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                            alt="4"
                          />
                        </div>
                      </div>
                      <div className="name" style={nameStyles}>
                        <h6>김도균</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="status-card-jojik-arrow-upper"
                  style={statusCardStyles}
                >
                  <div className="status-id-text-container-jojik">
                    <h6 style={{ backgroundColor: '#C8DBBE' }}>
                      <div className="titles-jojik">체육수석이사</div>
                    </h6>
                  </div>
                  <div className="status-box-jojik">
                    <div className="status-content-jojik">
                      <div className="status-id-photo-container-jojik">
                        <div className="status-id-photo-jojik">
                          <ImageLoader
                            className="id-photo-jojik"
                            src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                            alt="5"
                          />
                        </div>
                      </div>
                      <div className="name" style={nameStyles}>
                        <h6>이재구</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="status-card-jojik-arrow-upper"
                  style={statusCardStyles}
                >
                  <div className="status-id-text-container-jojik">
                    <h6 style={{ backgroundColor: '#C8DBBE' }}>
                      <div className="titles-jojik">섭외이사</div>
                    </h6>
                  </div>
                  <div className="status-box-jojik">
                    <div className="status-content-jojik">
                      <div className="status-id-photo-container-jojik">
                        <div className="status-id-photo-jojik">
                          <ImageLoader
                            className="id-photo-jojik"
                            src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                            alt="6"
                          />
                        </div>
                      </div>
                      <div className="name" style={nameStyles}>
                        <h6>이재행</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="status-card-jojik-arrow-upper"
                  style={statusCardStyles}
                >
                  <div className="status-id-text-container-jojik">
                    <h6 style={{ backgroundColor: '#C8DBBE' }}>
                      <div className="titles-jojik">홍보이사</div>
                    </h6>
                  </div>
                  <div className="status-box-jojik">
                    <div className="status-content-jojik">
                      <div className="status-id-photo-container-jojik">
                        <div className="status-id-photo-jojik">
                          <ImageLoader
                            className="id-photo-jojik"
                            src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                            alt="7"
                          />
                        </div>
                      </div>
                      <div className="name" style={nameStyles}>
                        <h6>이재훈</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position-jojik"></div>
              <div className="seomira">
                <div className="status-card-jojik" style={multipleRows}>
                  <div className="status-id-text-container-jojik">
                    <h6 style={{ backgroundColor: '#C8DBBE' }}>
                      <div className="titles-jojik">홍보이사</div>
                    </h6>
                  </div>
                  <div className="status-box-jojik">
                    <div className="status-content-jojik">
                      <div className="status-id-photo-container-jojik">
                        <div className="status-id-photo-jojik">
                          <ImageLoader
                            className="id-photo-jojik"
                            src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                            alt="8"
                          />
                        </div>
                      </div>
                      <div className="name">
                        <h6>서미라</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position-jojik"></div>
              <div className="status-card-jojik">
                <div className="status-id-text-container-jojik">
                  <h6 style={{ backgroundColor: '#C7BCA1' }}>
                    <div className="titles-jojik">감사</div>
                  </h6>
                </div>
                <div className="status-box-jojik">
                  <div className="status-content-jojik">
                    <div className="status-id-photo-container-jojik">
                      <div className="status-id-photo-jojik">
                        <ImageLoader
                          className="id-photo-jojik"
                          src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                          alt="9"
                        />
                      </div>
                    </div>
                    <div className="name">
                      <h6>안영준</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position-jojik">
                <div className="sub-heading-container-jojik">
                  <h2 className="sub-heading-jojik">고문</h2>
                </div>
              </div>

              <div className="status-position-jojik">
                <div className="status-card-jojik">
                  <div className="status-id-text-container-jojik">
                    <h6>
                      <div className="titles-jojik">법률고문</div>
                    </h6>
                  </div>
                  <div className="status-box-jojik">
                    <div className="status-content-jojik">
                      <div className="status-id-photo-container-jojik">
                        <div className="status-id-photo-jojik">
                          <ImageLoader
                            className="id-photo-jojik"
                            src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                            alt="10"
                          />
                        </div>
                      </div>
                      <div className="name">
                        <h6>. . .</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="status-card-jojik">
                  <div className="status-id-text-container-jojik">
                    <h6>
                      <div className="titles-jojik">의료고문</div>
                    </h6>
                  </div>
                  <div className="status-box-jojik">
                    <div className="status-content-jojik">
                      <div className="status-id-photo-container-jojik">
                        <div className="status-id-photo-jojik">
                          <ImageLoader
                            className="id-photo-jojik"
                            src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                            alt="11"
                          />
                        </div>
                      </div>
                      <div className="name" style={{ marginLeft: '-5%' }}>
                        <h6>임경우 Physio</h6>
                      </div>
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
