import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/대회정보 css/articles-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 대회행사일정Link6() {
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
          <p>단체소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/notice/apply/1">
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
          <div className="subMenu-title-container">
            <h2>대회/행사일정</h2>
            <h3>대한생활체육회의 대회/행사일정 전해드립니다.</h3>
          </div>

          <div>
            <div className="article-info-container">
              <div className="article-title">
                <p>제목</p>
                <h4>대한생활체육골프협회 제4회 2022 더골프쇼</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2022/5/22</h4>
              </div>
            </div>

            <ul className="article-file-container">
              <h4>첨부파일</h4>
              <div className="article-file-list">
                <li className="article-file-name">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20220521_231430186.jpg-2?alt=media&amp;token=eb82d803-1cbc-44a2-8113-2928edce1c83 alt="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6>KakaoTalk_20220521_231430186.jpg</h6>
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
                <p>대한생활체육골프협회 제4회 2022 더골프쇼</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20220521_231430186.jpg-2?alt=media&amp;token=eb82d803-1cbc-44a2-8113-2928edce1c83 alt="
                    alt="KakaoTalk_20220521_231430186.jpg"
                    className="ql-editor-img6"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>일시 : 05/19(목) ~ 5/22(일)</p>
                <p>시간 : 오전 10시 ~ 오후6시</p>
                <p>장소 : 수원컨벤션센터</p>
                <p>주최 : 이엑스스포테인먼트</p>
                <p>후원 : 대한생활체육골프협회</p>
              </div>
            </div>

            <div className="article-button-container">
              <a href="/notice/schedule/2">
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
