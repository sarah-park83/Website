import '../../../../styles/Sub-pages/subpage.css'
import '../../../../styles/Sub-pages/알림마당 css/갤러리-content.css'
import Dropdownmenu from '../../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../../Dropdown/Mobile-check'
import ImageLoader from '../../Image-loader'
import Footer from '../../../Footer'
import Header from '../../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import badminton1 from '../../../../images/Gallery/Badminton/badminton1.JPG?url'
import basketball1 from '../../../../images/Gallery/Basketball/basketball1.JPG?url'
import groupPhoto5 from '../../../../images/Gallery/Group-Photo/groupPhoto5.JPG?url'
import hockey4 from '../../../../images/Gallery/Hockey/hockey4.JPG?url'
import election1 from '../../../../images/Gallery/Leader-Election/election1.JPG?url'
import pool1 from '../../../../images/Gallery/Pool/pool1.JPG?url'
import soccer1 from '../../../../images/Gallery/Soccer/soccer1.JPG?url'
import swimming1 from '../../../../images/Gallery/Swimming/swimming1.JPG?url'
import tennis1 from '../../../../images/Gallery/Tennis/tennis1.JPG?url'
import trophy1 from '../../../../images/Gallery/Trophy/trophy1.JPG?url'

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
    navigate(`/notice/gallery/${inputValue}`)
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
          <Link to="/notice/gallery/1">
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
              {/**** Photo ****/}
              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={badminton1}
                    alt="badminton1"
                  />
                </div>
                <Link to="/article/photo/badminton">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Badminton</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={basketball1}
                    alt="basketball1"
                  />
                </div>
                <Link to="/article/photo/basketball">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Basketball</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={groupPhoto5}
                    alt="groupPhoto5"
                  />
                </div>
                <Link to="/article/photo/groupPhotos">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Group Photo</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={hockey4}
                    alt="hockey4"
                  />
                </div>
                <Link to="/article/photo/hockey">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Hockey</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={election1}
                    alt="election1"
                  />
                </div>
                <Link to="/article/photo/election">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Leader Election</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={pool1}
                    alt="pool1"
                  />
                </div>
                <Link to="/article/photo/pool">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Pool</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={soccer1}
                    alt="soccer1"
                  />
                </div>
                <Link to="/article/photo/soccer">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Soccer</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={swimming1}
                    alt="swimming1"
                  />
                </div>
                <Link to="/article/photo/swimming">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Swimming</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={tennis1}
                    alt="tennis1"
                  />
                </div>
                <Link to="/article/photo/tennis">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Tennis</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <ImageLoader
                    className="gallery-list-item"
                    src={trophy1}
                    alt="trophy1"
                  />
                </div>
                <Link to="/article/photo/trophy">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">Trophy</div>
                    <div className="gallery-list-createdAt">Date?</div>
                  </div>
                </Link>
              </li>

              {/**** Video ****/}
              <li className="gallery-list-table">
                <div className="gallery-list-container">
                  <div className="gallery-list-item">
                    <div className="vid-preview">
                      <iframe
                        title="YouTube Video"
                        src="https://www.youtube.com/embed/Z3zlHNo9ylQ"
                        className="iframe-video"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <Link to="/article/video/1/I7AOsNSrNuBCk8RBz9II">
                  <div className="gallery-list-text-container">
                    <div className="gallery-list-title">
                      대한생활체육낚시협회 [직격 인터뷰] 낚시인 천만 시대,
                      과제는?(2023.8.21/뉴스투데이/MBC경남)
                    </div>
                    <div className="gallery-list-createdAt">2023.09.02</div>
                  </div>
                </Link>
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
