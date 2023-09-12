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

export function 대회행사일정Link10() {
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
                <h4>
                  대한생활체육보디빌딩협회 전세계최초 군피트니스대회 더 솔져스
                  피트니스 챔피언쉽 개최
                </h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2022/10/6</h4>
              </div>
            </div>

            <div className="quill-article-container">
              <div
                className="ql-editor"
                data-gramm="false"
                contentEditable="false"
              >
                <p>
                  대한생활체육보디빌딩협회 전세계최초 군피트니스대회 더 솔져스
                  피트니스 챔피언쉽 개최
                </p>
                <p>
                  <br />
                </p>
                <p>주최 : 대한생활체육회</p>
                <p>
                  <br />
                </p>
                <p>주관 : 대한생활체육보디빌딩협회</p>
                <p>
                  <br />
                </p>
                <p>일시 : 2022년10월9일~10일</p>
                <p>
                  <br />
                </p>
                <p>장소 : 계룡세계군문화EXPO 상설무대</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_1.jpg?alt=media&amp;token=a9381607-2909-45e1-b42f-3f3ccd628d00 alt="
                    alt="Upload_20221006-0126141024_1.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_2.jpg?alt=media&amp;token=cc2525e7-34e9-403b-af16-88d9f1b9a4dc alt="
                    alt="Upload_20221006-0126141024_2.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_3.jpg?alt=media&amp;token=f5b48bf2-ae7e-4abf-8dea-fd33bfe842b9 alt="
                    alt="Upload_20221006-0126141024_3.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_4.jpg?alt=media&amp;token=fccde433-091b-4a83-b116-29207b4f3b85 alt="
                    alt="Upload_20221006-0126141024_4.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_5.jpg?alt=media&amp;token=0eb7a6dd-3003-44b3-b3ba-9f81e615ac40 alt="
                    alt="Upload_20221006-0126141024_5.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_6.jpg?alt=media&amp;token=e1f30591-1351-4b70-9efe-9983bf7802ec alt="
                    alt="Upload_20221006-0126141024_6.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_7.jpg?alt=media&amp;token=d7984359-73e6-44c1-a7d7-6b4af2e05006 alt="
                    alt="Upload_20221006-0126141024_7.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_8.jpg?alt=media&amp;token=9f5d1280-0e7a-4f10-ad78-39c7026a2d4b alt="
                    alt="Upload_20221006-0126141024_8.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_9.jpg?alt=media&amp;token=cac2f139-f0d8-4d4e-9626-69de58644ece alt="
                    alt="Upload_20221006-0126141024_9.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_10.jpg?alt=media&amp;token=616d5a69-3630-4657-9fed-aee889c4817d alt="
                    alt="Upload_20221006-0126141024_10.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_11.jpg?alt=media&amp;token=6a63bb73-7285-419b-b60f-26ec9d7fba18 alt="
                    alt="Upload_20221006-0126141024_11.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_12.jpg?alt=media&amp;token=0b084e5e-8494-4420-a164-a3846ee16b95 alt="
                    alt="Upload_20221006-0126141024_12.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_13.jpg?alt=media&amp;token=e323be7e-ace9-480e-a477-012f40d7fb57 alt="
                    alt="Upload_20221006-0126141024_13.jpg"
                    className="ql-editor-img10"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FUpload_20221006-0126141024_14.jpg?alt=media&amp;token=d742c64f-f5de-449b-87e4-e3c9c99c5ff0 alt="
                    alt="Upload_20221006-0126141024_14.jpg"
                    className="ql-editor-img10"
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
