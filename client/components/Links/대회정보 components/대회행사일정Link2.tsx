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

export function 대회행사일정Link2() {
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
                <h4>대한생활체육회 제 103주년 삼일절 특별행사</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2022/2/6</h4>
              </div>
            </div>

            <ul className="article-file-container">
              <h4>첨부파일</h4>
              <div className="article-file-list">
                <li className="article-file-name">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C%20%EC%A0%9C%20103%EC%A3%BC%EB%85%84%20%EC%82%BC%EC%9D%BC%EC%A0%88%20%ED%8A%B9%EB%B3%84%ED%96%89%EC%82%AC.jpg?alt=media&amp;token=e606ad2d-2e79-4fc8-8886-c2f449dea5a9 alt="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6>대한생활체육회 제 103주년 삼일절 특별행사.jpg</h6>
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
                <p className="ql-size-large2">
                  대한생활체육회 제103주년 삼일절 특별행사
                </p>
                <p className="ql-size-large3">
                  행사 기간 : 2022.02.28~2022.03.02
                </p>
                <p>참가 자격 : 건강한 대한민국 국민 남녀노소 누구나</p>
                <p>
                  참가 방법 : 2월6일부터 28일까지 총 5일간 소정의 훈련에
                  참가하여야 함(식사제공)
                </p>
                <p>행사장소 : 경북 울릉군 남면도동 1번지 독도</p>
                <p>모집인원 : 총 40명 우선지원자 충원 시 마감(스탭진 포함)</p>
                <p>참가비 : 1인 10만원</p>
                <p>
                  이동경도 : 서울-포항-울릉도-독도-울릉도-동해-서울 무박 3일
                </p>
                <p>행사후 영상제작 USB지급, 국내/외 언론보도 예상</p>
                <p>
                  취지 : 코로나 19로 인해 힘든 국민들에게 새로운 희망을 제시하고
                  국토의 주인이 국민임을 알리는데 있다.
                </p>
                <p>
                  <br />
                </p>
                <p className="ql-size-large3">참가문의 010-5339-6943</p>
                <p>주관 (사)대한생활체육회</p>
                <p>주최(주)경인매일</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C%20%EC%A0%9C%20103%EC%A3%BC%EB%85%84%20%EC%82%BC%EC%9D%BC%EC%A0%88%20%ED%8A%B9%EB%B3%84%ED%96%89%EC%82%AC.jpg?alt=media&amp;token=e606ad2d-2e79-4fc8-8886-c2f449dea5a9 alt="
                    alt="대한생활체육회 제 103주년 삼일절 특별행사.jpg"
                    className="ql-editor-img2"
                  />
                </p>
                <p>
                  <br />
                </p>
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
