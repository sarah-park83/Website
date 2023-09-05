import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/체육회 소개 css/오시는길-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 오시는길() {
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
          <Link to="/info/location">
            <h2>오시는 길</h2>
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
              <Link to="/info/chart">
                <div className="navItem">
                  <div className="navLink">중앙 조직도</div>
                </div>
              </Link>
              <Link to="/info/status">
                <div className="navItem">
                  <div className="navLink">임원현황</div>
                </div>
              </Link>
              <Link to="/info/location">
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
              <h2>오시는 길</h2>
              <h3>대한생활체육회로 오시는 길을 안내드립니다.</h3>
            </div>

            {/* Hi Sarah! pls fix next part - location map */}
            <div className="location-map">
              <div id="kakao-map-container">
                <div className="kakao-map-content">
                  <div className="kakao-map-content1">
                    <div className="kakao-map-content1-a"></div>
                    <div className="kakao-map-content1-b">
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1981/866.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img1"
                      />

                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1981/867.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img2"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1982/866.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img3"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1982/867.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img4"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/866.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img5"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/867.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img6"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1981/868.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img7"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1982/868.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img8"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/868.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img9"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1981/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img10"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1982/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img11"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img12"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img13"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img14"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img15"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img16"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img17"
                      />
                      <img
                        src="https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/3/1983/869.png"
                        alt=""
                        role="presentation"
                        draggable="false"
                        className="content1-b-img18"
                      />
                    </div>
                    <div className="kakao-map-content1-c"></div>
                    <div className="kakao-map-content1-d"></div>
                    <div className="kakao-map-content1-e">
                      <svg
                        version="1.1"
                        className="content1-e-svg"
                        viewBox="0 0 2975 1800"
                      >
                        <defs></defs>
                      </svg>
                    </div>
                    <div className="kakao-map-content1-f">
                      <div className="content1-f-1">
                        <div className="content1-f-1a"></div>
                        <div className="content1-f-1b">
                          <div className="content1-f-1b-conatiner">
                            <div className="location-marker">
                              (사)대한생활체육회
                              <br />
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://map.kakao.com/link/map/대한생활체육회,37.52603458568766,126.90926213891049"
                              >
                                큰지도보기
                              </a>
                              /
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://map.kakao.com/link/to/대한생활체육회,37.52603458568766,126.90926213891049"
                              >
                                {' '}
                                길찾기
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content1-f-2">
                        <img
                          draggable="false"
                          src="https://t1.daumcdn.net/mapjsapi/images/2x/marker.png"
                          alt=""
                          role="presentation"
                          title=""
                          className="content1-f-2-img1"
                        />
                        <img
                          src="https://t1.daumcdn.net/mapjsapi/images/2x/transparent.gif"
                          alt=""
                          role="presentation"
                          draggable="false"
                          useMap="#daum.maps.Marker.Area:1"
                          className="content1-f-2-img2"
                        />
                        <map
                          id="daum.maps.Marker.Area:1"
                          name="daum.maps.Marker.Area:1"
                        >
                          <area
                            href="javascript:void(0)"
                            alt=""
                            // role="presentation"
                            shape="poly"
                            coords="14,39,9,27,4,21,1,16,1,10,4,4,11,0,18,0,25,4,28,10,28,16,25,21,20,27"
                            title=""
                            className="map-area"
                          />
                        </map>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kakao-map-label">
                  <div className="kakao-map-label-1">
                    <div className="kakao-map-label-1a"></div>
                    <div className="kakao-map-label-1b">50m</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sarah just up to here - End of Map */}

            <div className="mapLocation-title">찾아오시는 길</div>
            <div className="mapLlocation-main-container">
              <div className="mapLocation-container">
                <div className="mapLocation-item">- 주 소</div>
                <div className="mapLocation-context">
                  서울 영등포구 버드나루로 88 (우)07230
                  <br />
                  지번 : 영등포동7가 94-49{' '}
                </div>
              </div>
              <div className="mapLocation-container">
                <div className="mapLocation-item">- 지하철 역</div>
                <div className="mapLocation-context">
                  5호선 영등포시장역 2번출구 도보 11분
                  <br />
                  9호선 국회의사당역 6번출구 도보 15분
                  <br />
                  9호선/2호선 당산역 8번출구 도보 16분
                </div>
              </div>
              <div className="mapLocation-container">
                <div className="mapLocation-item">- 버스정류장</div>
                <div className="mapLocation-context">
                  마을 영등포03 남부햄.제일빌딩 37m
                  <br />
                  지선 6623 영동초교.영등포평생학습관 165m
                  <br />
                  일반 70-2 영동초교.영등포평생학습관 165m
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
