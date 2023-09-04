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
          <Link to="/group/internation">
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
              <Link to="/group/sports">
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

              <div className="group-list-container">
                <div className="group-list-title">한인호주대한생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Faus.png?alt=media&amp;token=571fe9b5-f3df-48d4-b6a6-b7b87520ca4a',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Faus.png?alt=media&amp;token=571fe9b5-f3df-48d4-b6a6-b7b87520ca4a"
                        alt="한인호주대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 송성근
                    <br />
                    체육회명 : 한인호주대한생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">한인일본대한생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjapan.png?alt=media&amp;token=e36b91d6-589c-4a73-a1b5-8a5a07682f39',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjapan.png?alt=media&amp;token=e36b91d6-589c-4a73-a1b5-8a5a07682f39"
                        alt="한인일본대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 전진영
                    <br />
                    체육회명 : 한인일본대한생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">한인중국대한생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fchina.png?alt=media&amp;token=0bb1b78f-88f7-4539-bdc1-91eac469f37b',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fchina.png?alt=media&amp;token=0bb1b78f-88f7-4539-bdc1-91eac469f37b"
                        alt="한인중국대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 장응만
                    <br />
                    체육회명 : 한인중국대한생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">한인태국대한생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Ftai.png?alt=media&amp;token=e2342dc9-d109-4448-b36e-e99c0ec64d5f',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Ftai.png?alt=media&amp;token=e2342dc9-d109-4448-b36e-e99c0ec64d5f"
                        alt="한인태국대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 홍성호
                    <br />
                    체육회명 : 한인태국대한생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">한인괌대한생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fggg.png?alt=media&amp;token=8ae5344d-8af3-4b2a-8e69-770d2e00c16e',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fggg.png?alt=media&amp;token=8ae5344d-8af3-4b2a-8e69-770d2e00c16e"
                        alt="한인괌대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 조진영
                    <br />
                    체육회명 : 한인괌대한생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  한인말레이시아대한생활체육회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fmal.png?alt=media&amp;token=ef564b75-3cf4-46b8-a7b7-a28f176ba8c6',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fmal.png?alt=media&amp;token=ef564b75-3cf4-46b8-a7b7-a28f176ba8c6"
                        alt="한인말레이시아대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 전정진
                    <br />
                    체육회명 : 한인말레이시아대한생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  한인캄보디아대한생활체육회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fcam.png?alt=media&amp;token=d3e941c4-a5e4-4800-bb66-77957c000571',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fcam.png?alt=media&amp;token=d3e941c4-a5e4-4800-bb66-77957c000571"
                        alt="한인캄보디아대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이희석
                    <br />
                    체육회명 : 한인캄보디아대한생활체육회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  한인뉴질랜드대한생활체육회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkwk.png?alt=media&amp;token=38cba1ea-7e20-4dba-8ec1-98d7ed8e1115',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkwk.png?alt=media&amp;token=38cba1ea-7e20-4dba-8ec1-98d7ed8e1115"
                        alt="한인뉴질랜드대한생활체육회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김웅기
                    <br />
                    체육회명 : 한인뉴질랜드대한생활체육회
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
