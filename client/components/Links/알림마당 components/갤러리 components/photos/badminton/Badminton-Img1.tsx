import '../../../../../../styles/Sub-pages/subpage.css'
import '../../../../../../styles/Sub-pages/알림마당 css/갤러리Item.css'
import Dropdownmenu from '../../../../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../../../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../../../../Dropdown/Mobile-check'
import ImageLoader from '../../../../Image-loader'
import Footer from '../../../../../Footer'
import Header from '../../../../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function BadmintonImg1() {
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
                <h4>태백시 이상호시장님 방문</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2023/9/11</h4>
              </div>
            </div>

            <div className="quill-article-container">
              <div
                className="ql-editor"
                data-gramm="false"
                contentEditable="false"
              >
                <p>태백시 이상호시장님 방문</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230911_105838752.jpg?alt=media&amp;token=3a014ca8-cdc1-4d0b-b8b9-33a019c8876d alt="
                    alt="KakaoTalk_20230911_105838752.jpg"
                    className="ql-editor-갤러리-img1"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230911_105838752_01.jpg?alt=media&amp;token=87617a4a-3395-4aa9-81ca-7e9c7a3dbee4 alt="
                    alt="KakaoTalk_20230911_105838752_01.jpg"
                    className="ql-editor-갤러리-img1"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230911_105838752_02.jpg?alt=media&amp;token=62199167-8723-47fd-b3f1-3e4e3872f406 alt="
                    alt="KakaoTalk_20230911_105838752_02.jpg"
                    className="ql-editor-갤러리-img1"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230911_105838752_03.jpg?alt=media&amp;token=1d1773df-d7bb-44bf-9b76-26a68e6ac616 alt="
                    alt="KakaoTalk_20230911_105838752_03.jpg"
                    className="ql-editor-갤러리-img1"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230911_105838752_04.jpg?alt=media&amp;token=1dd3190e-1452-4e9b-81c0-0e548d8999da alt="
                    alt="KakaoTalk_20230911_105838752_04.jpg"
                    className="ql-editor-갤러리-img1"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230911_105838752_05.jpg?alt=media&amp;token=aeaa61fb-c8c9-4bef-a614-21ab97928e3b alt="
                    alt="KakaoTalk_20230911_105838752_05.jpg"
                    className="ql-editor-갤러리-img1"
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
