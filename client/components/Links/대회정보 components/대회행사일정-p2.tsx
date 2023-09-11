import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/대회정보 css/대회신청-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function 대회행사일정p2() {
  const isMobile = MobileCheck()
  const [inputValue, setInputValue] = useState('2')
  const navigate = useNavigate()

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setInputValue(newValue)

    if (newValue !== '1' && newValue !== '2') {
      alert('2가 마지막 페이지입니다.')
      setInputValue('1')
    }
  }

  function handleGoButtonClick() {
    navigate(`/notice/schedule/${inputValue}`)
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
          <p>단체소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/notice/schedule/1">
            <h2>대회/행사일정</h2>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-container">
            <div className="navbarVertricle">
              <div className="title">
                <h2>대회정보</h2>
              </div>
              <div className="itemList">
                <Link to="/notice/apply/1">
                  <div className="navItem">
                    <div className="navLink">대회신청</div>
                  </div>
                </Link>
                <Link to="/notice/schedule/1">
                  <div className="navItem">
                    <div className="navLink">대회/행사일정</div>
                  </div>
                </Link>
                <Link to="/notice/result/1">
                  <div className="navItem">
                    <div className="navLink">경기결과</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>대회/행사일정</h2>
              <h3>대한생활체육회의 대회/행사일정 전해드립니다.</h3>
            </div>

            <div className="notice-list-menu">
              <h4 className="notice-list-count">번호</h4>
              <h4 className="notice-list-title">제 목</h4>
              <h4 className="notice-list-createdAt">등록일</h4>
              <h4 className="notice-list-author">작성자</h4>
            </div>

            <div>
              <ul>
                <a href="/article/schedule/2/wT6HRiGWvsDtlfgoljE4">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">9</p>
                    <h4 className="notice-list-table-title">
                      제1회 KGTI 골프티칭지도자 자격시험 및 교육일정
                      <p className="notice-list-table-mobile">
                        2022.10.03 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.10.03</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/qJLcwndNlNolCD8FaX2L">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">8</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육볼링협회 충북회장배전국볼링대회
                      <p className="notice-list-table-mobile">
                        2022.09.21 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.09.21</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/33AHgruaR2x4Jr8DwiFb">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">7</p>
                    <h4 className="notice-list-table-title">
                      제1회 동구민 걷기대화 2022.05.29
                      <p className="notice-list-table-mobile">
                        2022.05.27 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.05.27</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/y7VEOM1T6xlKzttuJijZ">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">6</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육골프협회 제4회 2022 더골프쇼
                      <p className="notice-list-table-mobile">
                        2022.05.22 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.05.22</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/SwxVasGjKbmR550uGzfl">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">5</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육배드민턴협회 제1회 루틴 &amp; 강릉 전국
                      배드민턴 대회
                      <p className="notice-list-table-mobile">
                        2022.05.14 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.05.14</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/14aECHOUOJAmUe1O5W37">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">4</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육배드민턴 협회 전국배드민턴대회 2022.06.11~12
                      <p className="notice-list-table-mobile">
                        2022.05.11 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.05.11</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/zSrurc48fshLr24J9CHm">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">3</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육골프협회와 함께하는 2022 한부모가정돕기
                      자선골프대회
                      <p className="notice-list-table-mobile">
                        2022.03.09 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.03.09</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/qAuNkOIAoqwj57WMaebX">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">2</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육회 제 103주년 삼일절 특별행사
                      <p className="notice-list-table-mobile">
                        2022.02.06 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.02.06</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/2/2LrLZHbSY22AURV7dzyJ">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">1</p>
                    <h4 className="notice-list-table-title">
                      제1회대한생활체육 광주광역시생활체육회장배 -필라테스
                      대축전
                      <p className="notice-list-table-mobile">
                        2021.12.09 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2021.12.09</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul className="pagination-pagination">
                <Link to="/notice/schedule/1">
                  <li className="pagination-page">1</li>
                </Link>
                <li className="pagination-current-page pagination-page">2</li>
              </ul>
              <div className="pagination-goto-container">
                <input
                  className="pagination-input"
                  type="text"
                  id="name"
                  size={1}
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <p>/2페이지</p>
                <div
                  className="pagination-button"
                  onClick={handleGoButtonClick}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleGoButtonClick()
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  이동
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
