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

export function 대회행사일정Link4() {
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
                  대한생활체육배드민턴 협회 전국배드민턴대회 2022.06.11~12
                </h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2022/5/11</h4>
              </div>
            </div>

            <ul className="article-file-container">
              <h4>첨부파일</h4>
              <div className="article-file-list">
                <li className="article-file-name">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2Fdfdfs.jpg?alt=media&amp;token=0df4ad57-d59a-4c27-a8a4-950b74b7806c alt="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6>dfdfs.jpg</h6>
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
                <p>대한생활체육배드민턴 협회 전국배드민턴대회 2022.06.11~12</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2Fdfdfs.jpg?alt=media&amp;token=0df4ad57-d59a-4c27-a8a4-950b74b7806c alt="
                    alt="dfdfs.jpg"
                    className="ql-editor-img4"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>접수기간 2022년 4월11일~5월27일 18:00 마감합니다.</p>
                <p>
                  <br />
                </p>
                <p>접수처 양구로부터 국토 정중앙배 전국 배드민턴 대회 사무국</p>
                <p>(양구로부터 국토 정중앙배 다음카페)</p>
                <p>
                  <br />
                </p>
                <p>문의접수 총괄 안보현 010 5429 1113</p>
                <p>경기이사 이성범 0102751 0223</p>
                <p>접수 정송희 010 8824 4912</p>
                <p>홍보이사 고해석 010 4314 8179</p>
                <p>추천 위원장 문병희 010 4786 1239</p>
                <p>
                  <br />
                </p>
                <p>참가비 1팀 50,000원</p>
                <p>입금계좌 : 농협은행 351-1222-1295-13</p>
                <p>(사)대한생활체육 배드민턴 협회</p>
                <p>
                  <br />
                </p>
                <p>주최 사)대한생활체육 배드민턴 협회</p>
                <p>주관 사)대한생활체육 배드민턴 협회</p>
                <p>협찬 ROUTUNE</p>
                <p>후원</p>
                <p>양구군</p>
                <p>양구문화스포츠마케팅추진위원회</p>
                <p>강원도민일보</p>
                <p>양구군 배드민턴협회</p>
                <p>TOM N TOMS COFFEE</p>
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
