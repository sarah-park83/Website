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

export function 대회신청() {
  const isMobile = MobileCheck()
  const [inputValue, setInputValue] = useState('1')
  const navigate = useNavigate()

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setInputValue(newValue)

    if (newValue !== '1') {
      alert('2가 마지막 페이지입니다.')
      setInputValue('1')
    }
  }

  function handleGoButtonClick() {
    navigate(`/notice/apply/${inputValue}`)
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
          <Link to="/notice/apply/1">
            <h2>대회신청</h2>
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
              <h2>대회신청</h2>
              <h3>대한생활체육회의 대회신청 전해드립니다.</h3>
            </div>

            <div className="notice-list-menu">
              <h4 className="notice-list-count">번호</h4>
              <h4 className="notice-list-title">제 목</h4>
              <h4 className="notice-list-createdAt">등록일</h4>
              <h4 className="notice-list-author">작성자</h4>
            </div>

            <div>
              <ul>
                <a href="/article/apply/1/BNSHDS4LNFummHbOdUSR">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">2</p>
                    <h4 className="notice-list-table-title">
                      (사)대한노인생활체육회 전국시니어볼링대회
                      <p className="notice-list-table-mobile">
                        2023.06.23 | 관리자
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2023.06.23</h4>
                    <h4 className="notice-list-table-author">관리자</h4>
                  </li>
                </a>
              </ul>
              <ul className="pagination-pagination">
                <li className="pagination-current-page pagination-page">1</li>
              </ul>
              <div className="pagination-goto-container">
                <input
                  className="pagination-input"
                  type="text"
                  id="name"
                  size={1}
                  value="1"
                  onInput={handleInputChange}
                />
                <p>/1페이지</p>
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
