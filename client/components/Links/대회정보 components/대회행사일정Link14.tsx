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

export function 대회행사일정Link14() {
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
                <h4>대한생활체육회 2023 세부추진 계획서</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2023/1/2</h4>
              </div>
            </div>

            <ul className="article-file-container">
              <h4>첨부파일</h4>
              <div className="article-file-list">
                <li className="article-file-name">
                  <a
                    href="/public/files/2023년도%20세부추진계획서.hwp"
                    download="2023년도 세부추진계획서.hwp"
                  >
                    <h6>2023년도 세부추진계획서.hwp</h6>
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
                <p>대한생활체육회 2023 세부추긴 계획서</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2F2023%EB%85%84%EB%8F%84%20%EC%84%B8%EB%B6%80%EC%B6%94%EC%A7%84%EA%B3%84%ED%9A%8D%EC%84%9C001.jpg?alt=media&amp;token=1b5b3bdb-25bf-43d4-8368-0c532035286d alt="
                    alt="2023년도 세부추진계획서001.jpg"
                    className="ql-editor-img14"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2F2023%EB%85%84%EB%8F%84%20%EC%84%B8%EB%B6%80%EC%B6%94%EC%A7%84%EA%B3%84%ED%9A%8D%EC%84%9C002.jpg?alt=media&amp;token=9189d7fe-94df-4ecb-a8ea-483389e1eb38 alt="
                    alt="2023년도 세부추진계획서002.jpg"
                    className="ql-editor-img14"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2F2023%EB%85%84%EB%8F%84%20%EC%84%B8%EB%B6%80%EC%B6%94%EC%A7%84%EA%B3%84%ED%9A%8D%EC%84%9C003.jpg?alt=media&amp;token=5703df7e-cf58-47af-8076-80bbfb9ecf8d alt="
                    alt="2023년도 세부추진계획서003.jpg"
                    className="ql-editor-img14"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2F2023%EB%85%84%EB%8F%84%20%EC%84%B8%EB%B6%80%EC%B6%94%EC%A7%84%EA%B3%84%ED%9A%8D%EC%84%9C004.jpg?alt=media&amp;token=c4830ff7-fa80-4bd2-b9e4-6ab80793605c alt="
                    alt="2023년도 세부추진계획서004.jpg"
                    className="ql-editor-img14"
                  />
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>

            <div className="article-button-container">
              <a href="/notice/schedule/1">
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
