import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/체육회 소개 css/임원현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 임원현황() {
  return (
    <div>
      <Dropdownmenu />

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
          <p>체육회소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/info/status">
            <h2>임원현황</h2>
          </Link>
        </div>

        <div className="navbar-container">
          <div className="navbarVertricle">
            <div className="title">
              <h2>체육회소개</h2>
            </div>
            <div className="itemList">
              <Link to="/info/greet">
                <div className="navItem">
                  <div className="navLink">총재 인사말</div>
                </div>
              </Link>
              <Link to="/info/purpose">
                <div className="navItem">
                  <div className="navLink">설립목적</div>
                </div>
              </Link>
              <Link to="/info/chart">
                <div className="navItem">
                  <div className="navLink">중앙 조직도</div>
                </div>
              </Link>
              <Link to="/info/status">
                <div className="navItem">
                  <div className="navLink">임원현황</div>
                </div>
              </Link>
              <Link to="/info/location">
                <div className="navItem">
                  <div className="navLink">오시는 길</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>임원현황</h2>
              <h3>대한생활체육회 임원현황을 소개합니다.</h3>
            </div>

            <div className="status-result-container">
              <h5>
                ▶ 총원 54명 (고문 1명, 고문(법률고문변호사) 1명, 자문위원장 1명,
                자문위원 2명, 총재 1명, 수석부총재 1명, 부총재 11명, 감사 1명,
                사무총장 1명, 사무국장 1명, 중앙이사 8명, 국제부(본부장) 1명,
                대외협력단장 1명, 대외협력부단장 1명, 대회협력단위원 1명,
                대외협력단위원 6명, 대한생활체육회 주치의 2명, 언론위원장 1명,
                언론부위원장 1명, 사업단단장 1명, 사업단부단장 2명, 사업단본부장
                1명, 온라인운영단장 1명, 온라인운영부단장 1명, 홍보대사 1명,
                홍보위원 2명, 체육시설본부장 1명, 문화단장 1명)
              </h5>
            </div>
            <div className="status-container">
              <div className="status-position">고문</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Ftjrdydtjr.png?alt=media&amp;token=1bd63910-8055-4abd-97ad-4dbc7db44495"
                          alt="석용석"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 고문</h6>
                      <h6>성명 : 석용석</h6>
                      <h6>프로필 : ㈜워터크린시스템 회장</h6>
                      <h6>국가안보 전략단 후원회장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">고문(법률고문변호사)</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fseots.png?alt=media&amp;token=cf84d8ca-1bad-447e-b7cb-fe8d77124cc3"
                          alt="서태석"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 고문(법률고문변호사)</h6>
                      <h6>성명 : 서태석</h6>
                      <h6>프로필 : 서울대 로스쿨</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">자문위원장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fudj.png?alt=media&amp;token=e71146a3-89c1-432f-b997-ae67927b969e"
                          alt="우동주"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 자문위원장</h6>
                      <h6>성명 : 우동주</h6>
                      <h6>프로필 : 사)한중평화안보포럼 이사</h6>
                      <h6>국립 한경대학교 산학협력중점교수</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">자문위원</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="i-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkhs.jpg?alt=media&amp;token=be9c0d2d-d421-45b1-a33b-2eefb9de5612"
                          alt="강호상"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 자문위원</h6>
                      <h6>성명 : 강호상</h6>
                      <h6>프로필 : 미국 메릴랜드주 한국 부대표</h6>
                      <h6>기아자동차 새마을금고 이사</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fcuk.png?alt=media&amp;token=040b83f0-cb6b-4815-b796-f273642e3719"
                          alt="최웅근"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 자문위원</h6>
                      <h6>성명 : 최웅근</h6>
                      <h6>프로필 : 변리사</h6>
                      <h6>조달청 평가위원</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">총재</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Frlarbstlr.png?alt=media&amp;token=22edc30e-3364-4663-bcd6-b9bfeaf9e6e4"
                          alt="김균식"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 총재</h6>
                      <h6>성명 : 김균식</h6>
                      <h6>프로필 : ㈜경인매일 회장</h6>
                      <h6>㈜이조종합건설 회장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">수석부총재</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fgong.png?alt=media&amp;token=e0dce238-09d2-4001-a8fc-040918ded7e7"
                          alt="_______"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 수석부총재</h6>
                      <h6>성명 : _______</h6>
                      <h6>프로필 : _______</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">부총재</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkws.png?alt=media&amp;token=8a1f9603-7ad7-40e1-9ab9-d41550a6d209"
                          alt="김완수"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 김완수</h6>
                      <h6>프로필 : (주)WBC 회장</h6>
                      <h6>월드뉴스통신 회장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fwjdwlsrnr.PNG?alt=media&amp;token=e5db4d12-f12c-4e34-9553-e3363d1e407d"
                          alt="정진국"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 정진국</h6>
                      <h6>프로필 : 남북평화재단</h6>
                      <h6>경인 김포본부 공동대표</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fdlawhdfkr.png?alt=media&amp;token=4d47a0cf-d686-485a-a006-b44cb9b8a17d"
                          alt="임종락"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 임종락</h6>
                      <h6>프로필 : 한울 dlp 주식회사 대표 역임</h6>
                      <h6>제이알앤디 주식회사 대표</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fdbckdgh.png?alt=media&amp;token=425f3850-bf59-46f9-97f1-84d94bd7d830"
                          alt="유창호"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 유창호</h6>
                      <h6>프로필 : 연세대학교체육회 이사</h6>
                      <h6>대한직장인체육회 부회장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fqkrcnsdhr.png?alt=media&amp;token=0266262c-9f53-4501-b3ea-77677debcd94"
                          alt="박춘옥"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 박춘옥</h6>
                      <h6>프로필 : 국민생활체육회 볼링협회 회장</h6>
                      <h6>대한직장인체육회 볼링협회 회장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Frlaaudrlf.png?alt=media&amp;token=0f71d662-e89d-4c09-91df-7ae831641677"
                          alt="김명길"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 김명길</h6>
                      <h6>프로필 : 강원도 속초시의회 의장</h6>
                      <h6>대한직장인체육회 부회장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fqkrwlsdnd.jpg?alt=media&amp;token=e73db200-b5a8-4313-a6ba-f9ff36331003"
                          alt="박진웅"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 박진웅</h6>
                      <h6>
                        프로필 : (전)대통령직인수위원회 기획위원회 자문위원
                      </h6>
                      <h6>(전)청와대 행정관</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fjmj.png?alt=media&amp;token=333ec865-ca3a-4fe8-b526-03cf38aa26c6"
                          alt="조미정"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 조미정</h6>
                      <h6>프로필 : 민주평화통일자문회의 위원</h6>
                      <h6>좋은세상 물려주기운동본부 문화위원장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkkl.png?alt=media&amp;token=0b2264a8-1f2f-473f-8b8d-2acbc4e0da39"
                          alt="김경이"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 김경이</h6>
                      <h6>프로필 : 전)한국볼링 연합회 부회장</h6>
                      <h6>전)대한직장인체육회 부회장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fltl.png?alt=media&amp;token=72dea994-ef53-478a-9caa-3c84df92dd73"
                          alt="이태의"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 이태의</h6>
                      <h6>프로필 : 전)경남 로타리클럽 부총재</h6>
                      <h6>전)청주평화연합(UPF)부회장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fcbj.png?alt=media&amp;token=e88f15e6-0dd9-495e-885c-eff1550804d9"
                          alt="최부진"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 부총재</h6>
                      <h6>성명 : 최부진</h6>
                      <h6>프로필 : 대한생활체육복싱협회장역임</h6>
                      <h6>새미준 전국체육위원회 수석부위원장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">감사</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Ftlarnlwk.png?alt=media&amp;token=7a592760-83df-4a52-9400-0c047d16ca58"
                          alt="심귀자"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 감사</h6>
                      <h6>성명 : 심귀자</h6>
                      <h6>프로필 : 생활정보신문 시흥알림방 대표</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">사무총장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Frlaanstkd.png?alt=media&amp;token=32e5a11a-6efd-4027-b72b-f65017c9b96a"
                          alt="김문상"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 사무총장</h6>
                      <h6>성명 : 김문상</h6>
                      <h6>프로필 : 남북체육교류협회 사무총장 역임</h6>
                      <h6>대한직장인체육회 사무총장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">사무국장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fsamu.png?alt=media&amp;token=e92eaf70-fa19-45f4-b42b-44df66aae9e3"
                          alt="박영애"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 사무국장</h6>
                      <h6>성명 : 박영애</h6>
                      <h6>프로필 : 경인매일 서부뉴스 기자</h6>
                      <h6>대교차이홍 중국어 강사</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">중앙이사</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Frlacnstlr.png?alt=media&amp;token=6707a2ff-53d0-45fb-b4ad-e48f7338d9eb"
                          alt="김춘식"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 김춘식</h6>
                      <h6>프로필 : 대한직장인체육회 중앙</h6>
                      <h6>심판위원장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Frlaghwnd.png?alt=media&amp;token=41360c77-b7b3-4b13-b401-6da5bb14caff"
                          alt="김호중"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 김호중</h6>
                      <h6>프로필 : 동림문화사 대표이사</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fqkdaudghks.png?alt=media&amp;token=0de5606c-5fe9-44bc-ac91-751c685afc77"
                          alt="방명환"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 방명환</h6>
                      <h6>프로필 : 대한직장인체육회 경기위원장 역임</h6>
                      <h6>인천광역시 기업은행 지점장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fcns.png?alt=media&amp;token=0b2be7cc-4203-45c3-9af3-07d694b9fee0"
                          alt="최은실"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 최은실</h6>
                      <h6>프로필 : 범어사 합창단 단장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkbs.png?alt=media&amp;token=54b12c9f-62e0-4537-99ba-1e9bc84f63a3"
                          alt="곽봉숙"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 곽봉숙</h6>
                      <h6>프로필 : 국제라이온스협회 355-G지구 회장역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fhtk.png?alt=media&amp;token=9e20749b-d800-44e4-8a27-3bb5f0d6a8eb"
                          alt="허태길"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 허태길</h6>
                      <h6>프로필 : 경남 사천시 복싱협회 이사</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkjm.png?alt=media&amp;token=cb42d7f2-f270-4b62-8112-f4dd7c95121a"
                          alt="구자만"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 구자만</h6>
                      <h6>프로필 : (주)한국여행사 대표</h6>
                      <h6>선진사회정책연구원 연수원대표</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fcjh.png?alt=media&amp;token=2e13346e-1bfc-4f07-91e8-ac34632e4094"
                          alt="최정현"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 중앙이사</h6>
                      <h6>성명 : 최정현</h6>
                      <h6>프로필 : (사)한반도환경운동연합회</h6>
                      <h6>(주)하나투어 마케팅 팀장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">국제부(본부장)</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Finter.png?alt=media&amp;token=f26bb7b4-255a-4a3a-9739-631acadd971e"
                          alt="노동환"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 국제부(본부장)</h6>
                      <h6>성명 : 노동환</h6>
                      <h6>
                        프로필 : 2018평창동계올림픽 방송중계제작업업무 대표
                      </h6>
                      <h6>2009광주세계수영선수권 대외협력관</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-position">대외협력단장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Finterh.png?alt=media&amp;token=4128180c-b76e-4beb-a6ce-c10cdca6c9d9"
                          alt="이명교"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력단장</h6>
                      <h6>성명 : 이명교</h6>
                      <h6>프로필 : 대한스키협회이사</h6>
                      <h6>SBS-TV 스키해설위원</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">대외협력부단장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fpsk.png?alt=media&amp;token=b184beb9-8243-4bf7-9a9c-31bd795f9996"
                          alt="박선기"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력부단장</h6>
                      <h6>성명 : 박선기</h6>
                      <h6>프로필 : 단국대학교 평생교육원 초빙교수</h6>
                      <h6>스포츠인권위원회 스포츠인권전문강사</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">대회협력단위원</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fjsj.png?alt=media&amp;token=e36dbce6-199e-4e2b-aa0f-9c84eaba2643"
                          alt="정수진"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대회협력단위원</h6>
                      <h6>성명 : 정수진</h6>
                      <h6>프로필 : 서울호서예술전문학교 실용무용 전임교수</h6>
                      <h6>전)단국대학교 예술디자인대학 무용과 겸임교수</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">대외협력단위원</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fptj.png?alt=media&amp;token=cb341829-8688-407e-a5b9-524946c6d228"
                          alt="박태준"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력단위원</h6>
                      <h6>성명 : 박태준</h6>
                      <h6>프로필 : 한국열린사이버대학교 특임교수</h6>
                      <h6>스포츠윤리센터 인권살피미 위원</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fysm.png?alt=media&amp;token=918018ce-c14b-44fc-a3ac-2f192ce956ba"
                          alt="유수민"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력단위원</h6>
                      <h6>성명 : 유수민</h6>
                      <h6>프로필 : 아이캔 태권도장 관장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fhsb.png?alt=media&amp;token=f0703f47-e7f4-4ab6-8d91-f515237ce8d5"
                          alt="함샛별"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력단위원</h6>
                      <h6>성명 : 함샛별</h6>
                      <h6>프로필 : 아이캔 태권도장 사범</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fpny.png?alt=media&amp;token=91a44305-24d9-4089-8985-89ae71b386d3"
                          alt="박은엽"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력단위원</h6>
                      <h6>성명 : 박은엽</h6>
                      <h6>프로필 : 중랑FC U-18</h6>
                      <h6>서울특별시 축구협회장배 서울시장기대회 우승</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fljh.png?alt=media&amp;token=87838078-8d0b-417e-86cb-d914d7545ca9"
                          alt="이지훈"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력단위원</h6>
                      <h6>성명 : 이지훈</h6>
                      <h6>프로필 : MBC 생방송 빛날 리포트</h6>
                      <h6>한국축제포럼 전문위원</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkjh.png?alt=media&amp;token=bbfec297-0d41-4e5b-875a-73042ce490ab"
                          alt="김재희"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대외협력단위원</h6>
                      <h6>성명 : 김재희</h6>
                      <h6>프로필 : SBS 고향이 보인다 리포트</h6>
                      <h6>SBS Biz 집보러가는날 MC</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">대한생활체육회 주치의</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fhdh.png?alt=media&amp;token=0b8eb577-60da-42bc-a47a-5375c6c5a2cb"
                          alt="황도연"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대한생활체육회 주치의</h6>
                      <h6>성명 : 황도연</h6>
                      <h6>프로필 : 현)영주자인병원 내과 대표 과장</h6>
                      <h6>전)대한일차진료학회 8대 회장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkko.png?alt=media&amp;token=4cf31abf-da91-4a33-9cda-1aa828b0178e"
                          alt="김기옥"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 대한생활체육회 주치의</h6>
                      <h6>성명 : 김기옥</h6>
                      <h6>프로필 : 한방신경정신과 한의학박사</h6>
                      <h6>대한한의사협회 수석부회장 역임</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">언론위원장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Frlatjdwls.png?alt=media&amp;token=76a2e58c-b4fd-4391-adca-71be86659709"
                          alt="김성진"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 언론위원장</h6>
                      <h6>성명 : 김성진</h6>
                      <h6>프로필 : 스포츠한국TV 대표이사</h6>
                      <h6>한국생활체육뉴스 대표이사</h6>
                      <h6>nKBS뉴스통신사 대표</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">언론부위원장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Flks.png?alt=media&amp;token=2e66f9ae-4856-4590-83d9-668be7328171"
                          alt="이기수"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 언론부위원장</h6>
                      <h6>성명 : 이기수</h6>
                      <h6>프로필 : 한국생활체육뉴스 지사장</h6>
                      <h6>NKBS 뉴스통신사 지사장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">사업단단장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkih.png?alt=media&amp;token=9aee3bfa-fcda-404b-8b0f-75ca236b23f4"
                          alt="김일회"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 사업단단장</h6>
                      <h6>성명 : 김일회</h6>
                      <h6>프로필 : 지유산업개발 대표이사</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">사업단부단장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fidu.png?alt=media&amp;token=ae82a591-f82b-4123-be57-d0f112c852be"
                          alt="이덕유"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 사업단부단장</h6>
                      <h6>성명 : 이덕유</h6>
                      <h6>프로필 : 전)e-한우리봉사회 사무총장</h6>
                      <h6>전)대한다문화체육회 사무총장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fscs.png?alt=media&amp;token=ba667f5d-e651-4084-be77-50b8a55fa543"
                          alt="서찬수"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 사업단부단장</h6>
                      <h6>성명 : 서찬수</h6>
                      <h6>프로필 : 주식회사 GSD 대표이사</h6>
                      <h6>중국NS골프아카데미 한국 본부장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">사업단본부장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fljd.png?alt=media&amp;token=788eafd5-a3c6-4b8c-869d-0756b6c60184"
                          alt="이재도"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 사업단본부장</h6>
                      <h6>성명 : 이재도</h6>
                      <h6>프로필 : 전)팀제이대표</h6>
                      <h6>전)피트니스스타성남 사무국장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">온라인운영단장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fjsy.png?alt=media&amp;token=8a1fc8cb-59a1-4235-8318-66fdbeaaaebf"
                          alt="조소영"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 온라인운영단장</h6>
                      <h6>성명 : 조소영</h6>
                      <h6>프로필 : 전)피트니스스타 사무국장</h6>
                      <h6>전)니카코리아 사무국장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">온라인운영부단장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fcjh.png?alt=media&amp;token=2e13346e-1bfc-4f07-91e8-ac34632e4094"
                          alt="최주호"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 온라인운영부단장</h6>
                      <h6>성명 : 최주호</h6>
                      <h6>프로필 : (주)지엑스존 미디어 감독</h6>
                      <h6>스와트 메인 디렉터</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">홍보대사</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fljk.png?alt=media&amp;token=b949c766-9023-4ca7-91ea-fbc7e768880c"
                          alt="이정길"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 홍보대사</h6>
                      <h6>성명 : 이정길</h6>
                      <h6>프로필 : 국민연금 홍보대사</h6>
                      <h6>한글사랑본부 한글 홍보대사</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">홍보위원</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Ftlsrlfb.png?alt=media&amp;token=10442d82-2137-4e36-ac7f-9d5f48ab0ba8"
                          alt="신기류"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 홍보위원</h6>
                      <h6>성명 : 신기류</h6>
                      <h6>프로필 : 사랑의 꽃다발 대중가수</h6>
                      <h6>(재)국제예술문화체육재단 홍보위원</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fuh.png?alt=media&amp;token=353cce82-a562-4fae-b7e9-a6dbc4c4b6cb"
                          alt="유화"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 홍보위원</h6>
                      <h6>성명 : 유화</h6>
                      <h6>프로필 : 가수 타이틀곡 &lt;가슴이콩콩콩&gt;</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">체육시설본부장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Ftsh.png?alt=media&amp;token=feb32fe5-5563-4df6-8c8e-83ad81620276"
                          alt="탁석훈"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 체육시설본부장</h6>
                      <h6>성명 : 탁석훈</h6>
                      <h6>프로필 : 대한스포츠센터 시설관리장</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-position">문화단장</div>
              <div className="status-card">
                <div className="status-box">
                  <div className="status-content">
                    <div className="status-id-photo-container">
                      <div className="status-id-photo">
                        <img
                          className="id-photo"
                          src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/status%2Fkym.png?alt=media&amp;token=63ef8d3a-8266-4244-924d-635f36f6630d"
                          alt="김윤민"
                        />
                      </div>
                    </div>
                    <div className="status-id-text-container">
                      <h6>직위 : 문화단장</h6>
                      <h6>성명 : 김윤민</h6>
                      <h6>프로필 : (주)클라인엔터테인먼트 대표이사</h6>
                      <h6>UN ECOSONG NGO 청년위원</h6>
                      <h6>(주)3WAY 대표이사</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
