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

export function 대회행사일정Link3() {
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
                  대한생활체육골프협회와 함께하는 2022 한부모가정돕기
                  자선골프대회
                </h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>2022/3/9</h4>
              </div>
            </div>

            <ul className="article-file-container">
              <h4>첨부파일</h4>
              <div className="article-file-list">
                <li className="article-file-name">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%EA%B3%A8%ED%94%84%ED%98%91%ED%9A%8C%EC%99%80%20%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94%202022%20%ED%95%9C%EB%B6%80%EB%AA%A8%20%EA%B0%80%EC%A0%95%EB%8F%95%EA%B8%B0%20%EC%9E%90%EC%84%A0%EA%B3%A8%ED%94%84%EB%8C%80%ED%9A%8C.jpg?alt=media&amp;token=a51b0704-ef05-4ecc-9c8f-e3359030e388 alt="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6>
                      대한생활체육골프협회와 함께하는 2022 한부모 가정돕기
                      자선골프대회.jpg
                    </h6>
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
                <p>
                  대한생활체육골프협회와 함께하는 2022 한부모가정돕기
                  자선골프대회
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src="https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%EA%B3%A8%ED%94%84%ED%98%91%ED%9A%8C%EC%99%80%20%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94%202022%20%ED%95%9C%EB%B6%80%EB%AA%A8%20%EA%B0%80%EC%A0%95%EB%8F%95%EA%B8%B0%20%EC%9E%90%EC%84%A0%EA%B3%A8%ED%94%84%EB%8C%80%ED%9A%8C.jpg?alt=media&amp;token=a51b0704-ef05-4ecc-9c8f-e3359030e388 alt="
                    alt="대한생활체육골프협회와 함께하는 2022 한부모 가정돕기 자선골프대회.jpg"
                    className="ql-editor-img3"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>주회 : 데일리스포츠한국, (주)리빙TV, 김천포도CC</p>
                <p>
                  <br />
                </p>
                <p>주관 : (사)대한생활체육골프협회</p>
                <p>
                  <br />
                </p>
                <p>
                  후원 : 기가골프, 골프스토리, 안동소주, 오브리버드,
                  아이나비거리측정기
                </p>
                <p>더골프쇼, 4D골프, 이지골프, 고라이프코리아, 아탁패치</p>
                <p>
                  <br />
                </p>
                <p>
                  참가자격 : 프로자격(KPGA/KLPGA)이 없는 아마추어골퍼 누구나
                </p>
                <p>
                  <br />
                </p>
                <p>경기일정 : 2022년 04월 29일 대회만참가(40팀/160명)</p>
                <p>2022년 04월29일~30일 1박2일 참가(선착순10팀/40명)</p>
                <p>
                  <br />
                </p>
                <p>참여방법 : 1.홈페이지 www.ksfaga.or.kr</p>
                <p>
                  2.네비버밴드 &apos;대한생활체육골프협회&apos; 검색후
                  회원가입후 신청
                </p>
                <p>3.유선신청 010-9155-4247, 010-6275-7818</p>
                <p>
                  <br />
                </p>
                <p>
                  대회참가비 : 참가비 : 5만원 선입금/대회라운드비용 : 현장결제 /
                  1박2일비용 별도
                </p>
                <p>
                  계좌번호 : 국민 294501-04-167871 대한생활체육골프협회(박은주)
                </p>
                <p>
                  *대회 참가비일부 &apos;한부모가정돕기&apos; 후원금으로 기부
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
