import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/체육회 소개 css/총재 인사말-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../Dropdown/Mobile-check'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 총재인사말() {
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
          <p>체육회소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/info/greet">
            <h2>총재 인사말</h2>
          </Link>
        </div>

        {!isMobile && (
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
        )}

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>총재 인사말</h2>
              <h3>대한생활체육회 총재 김균식의 인사말입니다.</h3>
            </div>

            <div className="greet-content-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/setting%2Fgreet?alt=media&amp;token=7f37a933-4732-40bf-a300-ddfb7f336df2"
                alt="총재"
              />
              <h6>대한생활체육회 총재 김균식</h6>
              <h4>어게인 필승 코리아!!</h4>
              <h5>5천만 국민 여러분!!</h5>
              <div className="greet-text-container">
                <div>
                  <div>
                    <p>
                      코로나19의 긴 터널이 끝을 보이고 있는 가운데 이제 새로운
                      미래를 개척하기 위한 준비운동을 마쳤습니다.
                    </p>
                    <p>
                      지난 도쿄올림픽은 움츠렸던 인류의 체육이 질병의 곤경에도
                      여전히 살아있음을 보여주는 실 예가 되었습니다.
                      <br />
                      우리 대한민국은 전 세계 그 어떤 국가보다 강인한 정신력과
                      사회질서가 완벽한 도덕성을 자랑하는 동방예의지국으로서 전
                      국민의 완벽한 협조가 K-방역의 성공으로 이어졌습니다.
                    </p>
                    <p>
                      긴 시간 참고 기다렸던 온 국민들의 활기찬 건강체조가 우렁찬
                      구호와 함께 전국 방방곡곡에 울려 퍼져야 할 때가 왔습니다.
                      건강을 위한 최고의 덕목은 건전한 체육활동이며 이는 각자의
                      취향과 특기에 따라 다양하게 펼쳐져야 할 것입니다.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      이에 (사)대한생활체육회는 지난 3월부터 구심점을 잃었던
                      모든 국민들의 생활체육의 활성화를 위해 꾸준한 준비를 해
                      왔습니다. 지역별, 종목별, 해외지부까지 꼼꼼히 조직을
                      구성하고 서울특별시에 비영리 사단법인을 신청하여 지난 8월
                      17일 정식 인가를 받았습니다. 이후 등기완성과 고유 번호증을
                      부여받아 2021년 9월 17일 첫 공식 활동에 착수했습니다.
                    </p>
                    <p>
                      이제 (사)대한생활체육회는 모든 국민들의 다양한 체육활동에
                      주최가 되어 체계적이고 안전한 대회개최는 물론, 종목별
                      지도자 양성, 각종국제대회 개최, 청소년과 노인체육복지
                      바우처 사업 등 국민건강에 도움 되는 부분에 일조할
                      것입니다.
                    </p>
                    <p>
                      지구상 어떤 생물이든 살아움직일 때 생명력이 발전하는
                      것입니다. 하물며 인간에게 체육활동은 그 어떤 명약보다
                      소중하고 확실한 활력소가 되는 것이며 동호인들 간의 화합,
                      친목, 협동은 물론 평범한 아마추어에서 뛰어난 프로의 인재를
                      개발, 양성하는 통로가 될 것입니다.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      향후 전국대회 및 국제 대회가 개최되는 그날까지 온 국민의
                      응원과 힘찬 환호를 기대하며 모두가 하나 되는 건전하고
                      건강한 대장정을 기대합니다.
                    </p>
                    <p>
                      아울러 본 협회는 정치, 종교, 상업적, 의미의 일체 배제된
                      순수 체육단체로서 오직 국민건강과 화기애애한 사회적
                      분위기를 도모하는데 목적을 두고 있습니다. 따라서 협회의
                      목적에 위배되는 요소는 강력하게 배재함은 물론 모든 경영의
                      투명화, 누구나 참여를 위해 모든 채널을 열어두고 있습니다.
                      특정 세력이나 유명인 보다는 국민모두를 가장 소중한
                      회원으로 모시는 (사)대한생활체육회는 함께 꾸려갈 훌륭한
                      인재를 모십니다.
                    </p>
                    <p>
                      많은 관심과 참여를 기대하며 가내 두루 평안과 희망찬 미래가
                      항상 함께 하길 바랍니다.
                    </p>
                    <p>감사합니다.</p>
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
