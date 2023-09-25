import '../../../../../styles/Sub-pages/subpage.css'
import '../../../../../styles/Sub-pages/알림마당 css/갤러리photo.css'
import Dropdownmenu from '../../../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../../../Dropdown/Mobile-check'
import ImageLoader from '../../../Image-loader'
import Footer from '../../../../Footer'
import Header from '../../../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import pool1 from '../../../../../images/Gallery/Pool/pool1.JPG?url'
import pool2 from '../../../../../images/Gallery/Pool/pool2.JPG?url'
import pool3 from '../../../../../images/Gallery/Pool/pool3.JPG?url'
import pool4 from '../../../../../images/Gallery/Pool/pool4.jpg?url'
import pool5 from '../../../../../images/Gallery/Pool/pool5.JPG?url'
import pool6 from '../../../../../images/Gallery/Pool/pool6.jpg?url'
import pool7 from '../../../../../images/Gallery/Pool/pool7.JPG?url'
import pool8 from '../../../../../images/Gallery/Pool/pool8.JPG?url'
import pool9 from '../../../../../images/Gallery/Pool/pool9.JPG?url'
import pool10 from '../../../../../images/Gallery/Pool/pool10.JPG?url'
import pool11 from '../../../../../images/Gallery/Pool/pool11.JPG?url'

export function PoolPhotos() {
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
            <h3>대한생활체육회의 포토갤러리 전해드립니다.</h3>
          </div>

          <div>
            <div className="article-info-container">
              <div className="article-title">
                <p>제목</p>
                <h4>Pool</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>Date?</h4>
              </div>
            </div>

            <div className="quill-article-container">
              <div
                className="ql-editor"
                data-gramm="false"
                contentEditable="false"
              >
                <p>Pool</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool1}
                    alt="pool1"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool2}
                    alt="pool2"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool3}
                    alt="pool3"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool4}
                    alt="pool4"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool5}
                    alt="pool5"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool6}
                    alt="pool6"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool7}
                    alt="pool7"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool8}
                    alt="pool8"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool9}
                    alt="pool9"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool10}
                    alt="pool10"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={pool11}
                    alt="pool11"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>

            <div className="article-button-container">
              <a href="/notice/gallery/1">
                <div className="article-button">돌아가기</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
