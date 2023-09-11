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

export function 대회행사일정() {
  const isMobile = MobileCheck()
  const [inputValue, setInputValue] = useState('1')
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
                <a href="/article/schedule/1/7HKTKI48bMbERkxfMUHT">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">18</p>
                    <h4 className="notice-list-table-title">
                      제2회 헬스케어 전문가 양성과정 및 자격검증 시험
                      <p className="notice-list-table-mobile">
                        2023.04.15 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2023.04.15</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/qfBxFFKk1c6JyoWG6qsx">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">17</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육탁구협회 곽상석 회장 취임식
                      <p className="notice-list-table-mobile">
                        2023.02.11 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2023.02.11</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/j47ok5LBuWdyXvn0Gx40">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">16</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육한국레저골프협회 제2회 KLGA 한국레저골프
                      지도자 2급 자격시험 및 교육일정
                      <p className="notice-list-table-mobile">
                        2023.02.10 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2023.02.10</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/pwejLnePW8Gk8hW6WXnd">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">15</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육골프협회 2023 강진군 한부모가정돕기
                      자선골프대회
                      <p className="notice-list-table-mobile">
                        2023.01.18 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2023.01.18</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/nPZyewY0Wb4bgR4TupzG">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">14</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육회 2023 세부추진 계획서
                      <p className="notice-list-table-mobile">
                        2023.01.02 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2023.01.02</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/9N1Sprg26kE7chu7phNp">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">13</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육회 제1회 라이프스팬 배 왕중왕전 축구대회
                      <p className="notice-list-table-mobile">
                        2022.11.08 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.11.08</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/dXzACpKhG0bE5IUQ11ZF">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">12</p>
                    <h4 className="notice-list-table-title">
                      제1회 헬스케어 전문가 양성과정 및 자격검증 시험
                      <p className="notice-list-table-mobile">
                        2022.11.06 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.11.06</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/Nbiuua1rQe7n7yHx9lvg">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">11</p>
                    <h4 className="notice-list-table-title">
                      제1회 충청남도의장배 한부모가정돕기 자선 골프대회
                      <p className="notice-list-table-mobile">
                        2022.11.03 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.11.03</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul>
                <a href="/article/schedule/1/NOz9n7hFDXMJBIkRK7ta">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">10</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육보디빌딩협회 전세계최초 군피트니스대회 더
                      솔져스 피트니스 챔피언쉽 개최
                      <p className="notice-list-table-mobile">
                        2022.10.06 | 관리자1
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.10.06</h4>
                    <h4 className="notice-list-table-author">관리자1</h4>
                  </li>
                </a>
              </ul>

              <ul className="pagination-pagination">
                <li className="pagination-current-page pagination-page">1</li>
                <Link to="/notice/schedule/2">
                  <li className="pagination-page">2</li>
                </Link>
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
