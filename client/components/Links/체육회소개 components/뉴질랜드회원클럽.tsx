import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/체육회 소개 css/뉴질랜드회원클럽-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 뉴질랜드회원클럽() {
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
          <Link to="/info/status">
            <h2>뉴질랜드 회원 클럽</h2>
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
              <h2>뉴질랜드 회원 클럽</h2>
              <h3>뉴질랜드 대한생활체육회 클럽을 소개합니다.</h3>
            </div>

            <div className="status-container">
              <div className="status-position">축구 Football</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg"
                          alt="Soccer"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 안영준</h6>
                      <h6>클럽안내:</h6>
                      <h6>군위축구단</h6>
                      <h6> </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">농구 Basketball</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://static.toiimg.com/thumb/msid-70661134,imgsize-761205,width-400,resizemode-4/70661134.jpg"
                          alt="Basketball"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 이재훈</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">배구 Volleyball</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://volleyballwa.com.au/wp-content/uploads/2022/10/WAVL-GF-Story-Image-12-1200x404.png"
                          alt="Volleyball"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 이재구</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">배드민턴 Badminton</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/2_480x480.jpg?v=1559302854"
                          alt="Badminton"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 김승현</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">골프 Golf</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAwNDc3OTQzNTA2NDEyOTIw/1-lead-photo.webp"
                          alt="Golf"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 이재구</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">필드하키 Field Hockey</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://www.textiletechnology.net/news/media/9/Hypetex-adidas-84164.jpeg"
                          alt="Field Hockey"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 김영옥</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">야구 Baseball</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://techcrunch.com/wp-content/uploads/2019/03/GettyImages-844016022.jpg?w=1390&crop=1"
                          alt="Baseball"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 이재행</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">당구 Pool</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://www.mpl.live/blog/wp-content/uploads/2020/11/shutterstock_1652900074-scaled.jpg"
                          alt="Pool"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 이진복</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">테니스 Tennis</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2021-08/tennis-racket-ball-getty-ftr-083020_1v4c9vmdpu88e1he0jsled3q49.jpg.webp"
                          alt="Tennis"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장:</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">유도 Judo</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://www.activesgcircle.gov.sg/hs-fs/hubfs/GetActive%20Singapore/GASG%202022/Pesta%20Sukan/Pesta%20Sukan%20-%20Sports%20Thumbnail/Judo.jpg?width=3000&name=Judo.jpg"
                          alt="Judo"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 유용상</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">태권도 Taekwondo</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://img.freepik.com/premium-vector/two-boys-fighting-taekwondo-competition-illustration-vector_105094-63.jpg?w=1060"
                          alt="Taekwondo"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장:</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">걷기모임 Walking Club</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://styleblueprint.com/wp-content/uploads/2023/08/SB-Birmingham-Hot-Girls-Walking-Club-istock.png"
                          alt="Walking Club"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 김영옥</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">등산 Hiking</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://inafarawayland.com/wp-content/uploads/2021/11/3349.jpg"
                          alt="Hiking"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장:</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">요가/체조 Yoga/Gymnastics</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://images.hindustantimes.com/img/2023/01/28/550x309/wesley-tingey-57wo9F-r2-A-unsplash_1674896080538_1674896093965_1674896093965.jpg"
                          alt="Yoga/Gymnastics"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장:</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">낚시 Fishing</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://hips.hearstapps.com/hmg-prod/images/fishing-rod-on-the-boat-sunset-time-royalty-free-image-1682525031.jpg?resize=1200:*"
                          alt="Fishing"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장: 김명균</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">피지오 Physio</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://www.careers.govt.nz/assets/jobs/physiotherapist/_resampled/ScaleWidthWyI3MDAiXQ/Physiotherapist-1200-x-800.jpg"
                          alt="Physio"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장:</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">안전교육 Safety Education</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <ImageLoader
                          className="id-photo"
                          src="https://i0.wp.com/hemisphera.com.my/wp-content/uploads/2020/04/Safety-Training.jpg?w=750&ssl=1"
                          alt="Safety Education"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>회장:</h6>
                      <h6>클럽안내:</h6>
                      <h6>...</h6>
                      <h6>...</h6>
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
