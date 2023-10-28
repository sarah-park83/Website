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
              <h5>▶ 사라는 뷔페를 좋아해요</h5>
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
                          src="https://images5.alphacoders.com/132/1328421.png"
                          alt="1"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Webbing</h6>
                      <h6>성명 : Spider-Man</h6>
                      <h6>프로필 : Bounce Bounce</h6>
                      <h6>With great power comes great responsibility</h6>
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
                          src="https://i.pinimg.com/736x/57/f1/3e/57f13ec1b6e2d5712d03fec842e08356.jpg"
                          alt="2"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : In the dark</h6>
                      <h6>성명 : Batman</h6>
                      <h6>프로필 : Dark Vigilante</h6>
                      <h6>I am Batman</h6>
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
                          src="https://miro.medium.com/v2/resize:fit:3840/1*0ubYRV_WNR9iYrzUAVINHw.jpeg"
                          alt="3"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Lost</h6>
                      <h6>성명 : Deadpool</h6>
                      <h6>프로필 : Crazy</h6>
                      <h6>You Are So Dark...</h6>
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
                          src="https://i.pinimg.com/originals/af/64/be/af64bee6112f62634187dc4ae7ed8014.jpg"
                          alt="4"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Pushing Through</h6>
                      <h6>성명 : Juggernaut</h6>
                      <h6>프로필 : Bulldozer</h6>
                      <h6>
                        Im the Juggernaut! Aint nothin -- aint nobody -- can
                        beat me! Unstoppables!
                      </h6>
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
                          src="https://rare-gallery.com/uploads/posts/1190175-X-Men-Gambit-Marvel-Comics.jpg"
                          alt="5"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Chillax</h6>
                      <h6>성명 : Gambit</h6>
                      <h6>프로필 : Cool Guy</h6>
                      <h6>Dont mind me, chillin.</h6>
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
                          src="https://i.pinimg.com/736x/69/46/3d/69463db9e7c43712ee55990b1aa056d2.jpg"
                          alt="6"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Funny Guy</h6>
                      <h6>성명 : Joker</h6>
                      <h6>프로필 : Knock Knock</h6>
                      <h6>Guess who?</h6>
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
                          src="https://m.media-amazon.com/images/M/MV5BZTgyZTdhMzItOTFjYi00ZGUyLWI3MTItNmIzMmVkYTNmYzFjXkEyXkFqcGdeQXVyODYwNzE0ODk@._V1_.jpg"
                          alt="7"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Hell</h6>
                      <h6>성명 : Spawn</h6>
                      <h6>프로필 : From man...to Spawn.</h6>
                      <h6>
                        Youre about two seconds away from wearing that smile
                        around your ass!
                      </h6>
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
                          src="https://www.gamespot.com/a/uploads/scale_landscape/1574/15746725/4020193-untitled.png"
                          alt="8"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Rule Breaker</h6>
                      <h6>성명 : Wolverine</h6>
                      <h6>프로필 : Never Listens</h6>
                      <h6>
                        Im The Best There Is At What I Do, But What I Do Best
                        Isnt Very Nice.
                      </h6>
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
                          src="https://hips.hearstapps.com/hmg-prod/images/colonel-harland-sanders-gettyimages-72431338.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                          alt="9"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : Cook</h6>
                      <h6>성명 : Colonel Sanders</h6>
                      <h6>프로필 : Chicken Genocide</h6>
                      <h6>Finger Licking Good.</h6>
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
