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
              <Link to="#info/location">
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
              <h3>대한생활체육회의 설립목적을 소개합니다.</h3>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
