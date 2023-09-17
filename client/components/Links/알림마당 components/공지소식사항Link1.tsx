import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/알림마당 css/공지소식사항Link1.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 공지소식사항Link1() {
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
          <div className="subMenu-title-container">
            <h2>공지/소식사항</h2>
            <h3>대한생활체육회의 공지/소식사항 전해드립니다.</h3>
          </div>

          <div>
            <div className="article-info-container">
              <div className="article-title">
                <p>제목</p>
                <h4>대한생활체육회 가입 회원 제휴 혜택 안내</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2022/2/18</h4>
              </div>
            </div>

            <ul className="article-file-container">
              <h4>첨부파일</h4>
              <div className="article-file-list">
                <li className="article-file-name">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C%20MOU%20%ED%9A%8C%EC%9B%90%20%EA%B0%80%EC%9E%85%20%ED%98%9C%ED%83%9D.jpg?alt=media&amp;token=fdffef3a-5a51-48b1-9738-8e663513200a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6>대한생활체육회 MOU 회원 가입 혜택.jpg</h6>
                  </a>
                </li>
              </div>
            </ul>

            <div className="quill-article-container">
              <div
                className="ql-editor"
                data-gramm="false"
                contentEditable="false"
              >
                <p>대한생활체육회 가입회원제휴혜택 안내</p>
                <p>
                  <br />
                </p>
                <p>혜택 1</p>
                <p>구로고려대학교병원 건강검진 40%할인</p>
                <p>
                  <br />
                </p>
                <p>헤택 2</p>
                <p>용평리조트 55%할인</p>
                <p>
                  <br />
                </p>
                <p>혜택 3</p>
                <p>강남글로리안과 서울대학교 안과 대학 라식, 라섹 할인 혜택</p>
                <p>
                  <br />
                </p>
                <p>혜택 4</p>
                <p>서울스마일 치과 서울대학교 치과 대학</p>
                <p>임플란트, 지르코, 틀니 할인 혜택</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C%20MOU%20%ED%9A%8C%EC%9B%90%20%EA%B0%80%EC%9E%85%20%ED%98%9C%ED%83%9D.jpg?alt=media&amp;token=fdffef3a-5a51-48b1-9738-8e663513200a"
                    alt="대한생활체육회 MOU 회원 가입 혜택.jpg"
                    className="ql-editor-공지소식사항-img1"
                  />
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>

            <div className="article-button-container">
              <a href="/notice/announcement/1">
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
