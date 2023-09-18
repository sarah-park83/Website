import '../../../../../styles/Sub-pages/subpage.css'
import '../../../../../styles/Sub-pages/알림마당 css/갤러리Item.css'
import Dropdownmenu from '../../../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../../../Dropdown/Mobile-check'
import Footer from '../../../../Footer'
import Header from '../../../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 갤러리Vid1() {
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
            <h3>대한생활체육회의 동영상갤러리 전해드립니다.</h3>
          </div>

          <div>
            <div className="article-info-container">
              <div className="article-title">
                <p>제목</p>
                <h4>
                  대한생활체육낚시협회 [직격 인터뷰] 낚시인 천만 시대,
                  과제는?(2023.8.21/뉴스투데이/MBC경남)
                </h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2023/9/2</h4>
              </div>
            </div>

            <div className="quill-article-container">
              <div
                className="ql-editor"
                data-gramm="false"
                contentEditable="false"
              >
                <p>
                  대한생활체육낚시협회 [직격 인터뷰] 낚시인 천만 시대,
                  과제는?(2023.8.21/뉴스투데이/MBC경남)
                </p>
                <p>
                  <br />
                </p>
                <iframe
                  title="YouTube Video"
                  src="https://www.youtube.com/embed/Z3zlHNo9ylQ"
                  className="ql-editor-갤러리-vid1"
                  frameBorder={0}
                  allowFullScreen={true}
                ></iframe>
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
