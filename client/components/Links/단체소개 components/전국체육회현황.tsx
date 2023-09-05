import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/단체소개 css/전국체육회현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 전국체육회현황() {
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
          <Link to="/group/nation">
            <h2>전국체육회현황</h2>
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
              <Link to="/group/sports">
                <div className="navItem">
                  <div className="navLink">종목별 운영현황</div>
                </div>
              </Link>
              <Link to="/group/sanha">
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
              <h2>전국체육회현황</h2>
              <h3>대한생활체육회의 전국체육회현황입니다.</h3>
            </div>
            <div>
              <div className="group-list-container">
                <div className="group-list-title">서울특별시생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flyh.png?alt=media&amp;token=041fbbf2-27cc-41a9-9606-5d11f933d6fb',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flyh.png?alt=media&amp;token=041fbbf2-27cc-41a9-9606-5d11f933d6fb"
                        alt="서울특별시생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이육행
                    <br />
                    체육회명 : 서울특별시생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">경기도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fgye.png?alt=media&amp;token=069bdf6c-8398-4dea-b12d-2362f32bc579',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fgye.png?alt=media&amp;token=069bdf6c-8398-4dea-b12d-2362f32bc579"
                        alt="경기도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 최호열
                    <br />
                    체육회명 : 경기도생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">인천광역시생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Finc.png?alt=media&amp;token=89c2b3bb-06ce-484b-9aab-01f83550a062',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Finc.png?alt=media&amp;token=89c2b3bb-06ce-484b-9aab-01f83550a062"
                        alt="인천광역시생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 정종록
                    <br />
                    체육회명 : 인천광역시생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">강원도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkone.png?alt=media&amp;token=e90e71e4-670d-4b85-8ca2-e54fa4b49496',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkone.png?alt=media&amp;token=e90e71e4-670d-4b85-8ca2-e54fa4b49496"
                        alt="강원도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 윤용호
                    <br />
                    체육회명 : 강원도생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">충청북도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fcbok.png?alt=media&amp;token=9b03ee3e-8e59-4389-a872-f3ef1c57c2a7',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fcbok.png?alt=media&amp;token=9b03ee3e-8e59-4389-a872-f3ef1c57c2a7"
                        alt="충청북도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이종문
                    <br />
                    체육회명 : 충청북도생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">충청남도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fnjk.png?alt=media&amp;token=78a63334-613d-42e2-a570-1f203a39beaf',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fnjk.png?alt=media&amp;token=78a63334-613d-42e2-a570-1f203a39beaf"
                        alt="충청남도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 노종관
                    <br />
                    체육회명 : 충청남도생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">세종특별자치시생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsej.png?alt=media&amp;token=8ca9361a-92e7-485c-9d92-dc5e33c2d716',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsej.png?alt=media&amp;token=8ca9361a-92e7-485c-9d92-dc5e33c2d716"
                        alt="세종특별자치시생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 고준일
                    <br />
                    체육회명 : 세종특별자치시생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">경상북도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsbh.png?alt=media&amp;token=7166033d-2050-41fb-a362-715589bd0357',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsbh.png?alt=media&amp;token=7166033d-2050-41fb-a362-715589bd0357"
                        alt="경상북도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 서병환
                    <br />
                    체육회명 : 경상북도생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">경상남도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fnhw.png?alt=media&amp;token=9be567ed-3c76-45eb-bc45-d9893f5821a4',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fnhw.png?alt=media&amp;token=9be567ed-3c76-45eb-bc45-d9893f5821a4"
                        alt="경상남도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 남한우
                    <br />
                    체육회명 : 경상남도생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">광주광역시생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsyc.png?alt=media&amp;token=c3147c2e-4ec3-4c50-bd67-ae3d62a09892',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fsyc.png?alt=media&amp;token=c3147c2e-4ec3-4c50-bd67-ae3d62a09892"
                        alt="광주광역시생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 손영철
                    <br />
                    체육회명 : 광주광역시생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">부산광역시생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fbus.png?alt=media&amp;token=c4e5f884-9430-42ae-b2c7-9086db71443b',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fbus.png?alt=media&amp;token=c4e5f884-9430-42ae-b2c7-9086db71443b"
                        alt="부산광역시생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김영일
                    <br />
                    체육회명 : 부산광역시생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대구광역시생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjjtd.png?alt=media&amp;token=43bb88e6-3a79-4030-9523-daa6adf7435b',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjjtd.png?alt=media&amp;token=43bb88e6-3a79-4030-9523-daa6adf7435b"
                        alt="대구광역시생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 장재태
                    <br />
                    체육회명 : 대구광역시생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">전라북도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fyjm.png?alt=media&amp;token=6ec2b117-a292-4c7a-b6dc-893df5332593',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fyjm.png?alt=media&amp;token=6ec2b117-a292-4c7a-b6dc-893df5332593"
                        alt="전라북도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 윤정무
                    <br />
                    체육회명 : 전라북도생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">전라남도생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjyk.png?alt=media&amp;token=3d66627b-5293-4119-a966-65424806e016',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjyk.png?alt=media&amp;token=3d66627b-5293-4119-a966-65424806e016"
                        alt="전라남도생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 전영곤
                    <br />
                    체육회명 : 전라남도생활체육회
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
