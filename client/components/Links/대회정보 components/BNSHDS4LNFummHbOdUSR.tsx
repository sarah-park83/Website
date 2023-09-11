import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/대회정보 css/BNSHDS4LNFummHbOdUSR-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import ImageLoader from '../Image-loader'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function BNSHDS4LNFummHbOdUSR() {
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
            <h2>대회신청</h2>
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
                <Link to="#">
                  <div className="navItem">
                    <div className="navLink">대회/행사일정</div>
                  </div>
                </Link>
                <Link to="#">
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
            <h2>대회신청</h2>
            <h3>대한생활체육회의 대회신청 전해드립니다.</h3>
          </div>

          <div>
            <div className="article-info-container">
              <div className="article-title">
                <p>제목</p>
                <h4>(사)대한노인생활체육회 전국시니어볼링대회</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2023/6/23</h4>
              </div>
            </div>

            <div className="quill-article-container">
              <div
                className="ql-editor"
                data-gramm="false"
                contentEditable="false"
              >
                <p>(사)대한노인생활체육회 전국시니어볼링대회</p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230623_200954806.jpg?alt=media&amp;token=6b4db290-9f52-4b4b-8a84-5262dece0dc0 alt="
                    alt="KakaoTalk_20230623_200954806.jpg"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230623_200954806_01.png?alt=media&amp;token=04e94851-72c8-4ffb-b504-72aae56f23e2 alt="
                    alt="KakaoTalk_20230623_200954806_01.png"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230623_200954806_02.png?alt=media&amp;token=6161f9c5-e1b1-4a91-9fe6-c7898ea2c15d alt="
                    alt="KakaoTalk_20230623_200954806_02.png"
                    className="ql-editor-img"
                  />
                </p>
                <iframe
                  id="ql-video"
                  frameBorder={0}
                  allowFullScreen={true}
                  src="https://www.youtube.com/embed/AD7iFcgAWgw?showinfo=0"
                  title="YouTube Video"
                ></iframe>
                <p>
                  <a
                    href="https://forms.gle/tC8taEFUzKSKgjz19"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="ql-size-large"
                  >
                    대회신청은 여기를 클릭해주세요.
                  </a>
                </p>
              </div>
            </div>

            <div className="article-button-container">
              <a href="/notice/apply/1">
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
