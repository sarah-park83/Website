import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/알림마당 css/갤러리-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function 갤러리() {
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
          <p>알림마당</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/notice/apply/1">
            <h2>갤러리</h2>
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
          <div className="subMenu-title-container">
            <h2>갤러리</h2>
            <h3>대한체육회의 사진과 영상갤러리를 여러분께 소개합니다.</h3>
          </div>

          <div>
            <ul className="gallery-list">
              <Link to="/article/photo/1/PRD1XR57m9dKNGUQdCub"></Link>
              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230911_105838752.jpg?alt=media&amp;token=3a014ca8-cdc1-4d0b-b8b9-33a019c8876d"
                    alt="image1"
                  />
                </div>
                <div className="gallery-list-text-container">
                  <div className="gallery-list-title">
                    태백시 이상호시장님 방문
                  </div>
                  <div className="gallery-list-createdAt">2023.09.11</div>
                </div>
              </li>
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

      <Footer />
    </div>
  )
}
