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

import groupPhoto5 from '../../../../../images/Gallery/Group-Photo/groupPhoto5.JPG?url'
import groupPhoto1 from '../../../../../images/Gallery/Group-Photo/groupPhoto1.JPG?url'
import groupPhoto2 from '../../../../../images/Gallery/Group-Photo/groupPhoto2.JPG?url'
import groupPhoto3 from '../../../../../images/Gallery/Group-Photo/groupPhoto3.JPG?url'
import groupPhoto4 from '../../../../../images/Gallery/Group-Photo/groupPhoto4.JPG?url'

export function GroupPhotos() {
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
                <h4>Group Photo</h4>
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
                <p>Group Photo</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={groupPhoto5}
                    alt="groupPhoto5"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={groupPhoto1}
                    alt="groupPhoto1"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={groupPhoto2}
                    alt="groupPhoto2"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={groupPhoto3}
                    alt="groupPhoto3"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={groupPhoto4}
                    alt="groupPhoto4"
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
