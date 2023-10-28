import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/알림마당 css/공지소식사항-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function 공지소식사항() {
  const isMobile = MobileCheck()
  const [inputValue, setInputValue] = useState('1')
  const navigate = useNavigate()

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setInputValue(newValue)

    if (newValue !== '1') {
      alert('1가 마지막 페이지입니다.')
      setInputValue('1')
    }
  }

  function handleGoButtonClick() {
    navigate(`/notice/announcement/${inputValue}`)
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
          <p>알림마당</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/notice/announcement/1">
            <h2>공지/소식사항</h2>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-container">
            <div className="navbarVertricle">
              <div className="title">
                <h2>알림마당</h2>
              </div>
              <div className="itemList">
                <Link to="/notice/announcement/1">
                  <div className="navItem">
                    <div className="navLink">공지/소식사항</div>
                  </div>
                </Link>
                <Link to="/notice/gallery/1">
                  <div className="navItem">
                    <div className="navLink">갤러리</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>공지/소식사항</h2>
              <h3>대한생활체육회의 공지/소식사항 전해드립니다.</h3>
            </div>

            <div className="notice-list-menu">
              <h4 className="notice-list-count">번호</h4>
              <h4 className="notice-list-title">제 목</h4>
              <h4 className="notice-list-createdAt">등록일</h4>
              <h4 className="notice-list-author">작성자</h4>
            </div>

            <div>
              <ul>
                <a href="/#/article/anouncement/1/wBwT6IpiRh0pkWfXADw5">
                  <li className="notice-list-table">
                    <p className="notice-list-table-count">1</p>
                    <h4 className="notice-list-table-title">
                      대한생활체육회 가입 회원 제휴 혜택 안내
                      <p className="notice-list-table-mobile">
                        2022.02.18 | 관리자
                      </p>
                    </h4>
                    <h4 className="notice-list-table-createdAt">2022.02.18</h4>
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
