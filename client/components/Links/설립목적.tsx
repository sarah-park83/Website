import '../../styles/Sub-pages/subpage.css'
import '../../styles/Sub-pages/설립목적-content.css'
import Dropdownmenu from '../Dropdown/Dropdownmenu'
import Footer from '../Footer'
import Header from './Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 설립목적() {
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
          <Link to="/info/purpose">
            <h2>설립목적</h2>
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
              <Link to="#info/chart">
                <div className="navItem">
                  <div className="navLink">중앙 조직도</div>
                </div>
              </Link>
              <Link to="#info/status">
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
              <h2>설립목적</h2>
              <h3>대한생활체육회의 설립목적을 소개합니다..</h3>
            </div>

            <div className="purpose-content-container">
              <h2>스포츠가 최고의 국민건강 복지다</h2>
              <ul className="purpose-list">
                <li className="purpose-item-container class1">
                  <div className="purpose-number">1</div>
                  <h3 className="purpose-content">
                    생활체육 내외의 스포츠 클럽 활동을 지원,육성하여 국민건강
                    복지증진에 기여
                  </h3>
                </li>
                <li className="purpose-item-container class2">
                  <div className="purpose-number">2</div>
                  <h3 className="purpose-content">
                    전국 각 생활체육단위 스포츠클럽 활동지원 육성
                  </h3>
                </li>
                <li className="purpose-item-container class3">
                  <div className="purpose-number">3</div>
                  <h3 className="purpose-content">
                    생활체육 스포츠 클럽 리그 및 각종 공식대회 개최
                  </h3>
                </li>
                <li className="purpose-item-container class4">
                  <div className="purpose-number">4</div>
                  <h3 className="purpose-content">
                    전국 생활인 및 체육동호인 1인 1기 스포츠 참여 운동 전개
                  </h3>
                </li>
                <li className="purpose-item-container class5">
                  <div className="purpose-number">5</div>
                  <h3 className="purpose-content">
                    생활체육 스포츠 전문지도자 및 심판 양성교육
                  </h3>
                </li>
                <li className="purpose-item-container class6">
                  <div className="purpose-number">6</div>
                  <h3 className="purpose-content">
                    생활 체육관련 시설 위탁운영 및 학원. 연수원운영, 체육지도자
                    파견
                  </h3>
                </li>
                <li className="purpose-item-container class7">
                  <div className="purpose-number">7</div>
                  <h3 className="purpose-content">
                    회원의 권익 향상을 위한 회원카드 발급 및 복리증진
                  </h3>
                </li>
                <li className="purpose-item-container class8">
                  <div className="purpose-number">8</div>
                  <h3 className="purpose-content">
                    민간자격의 자격기본법에 의한 생활체육행정사 및 각
                    종목별단체의 자격제도의 관리 운영에 관한 사항
                  </h3>
                </li>
                <li className="purpose-item-container class9">
                  <div className="purpose-number">9</div>
                  <h3 className="purpose-content">
                    생활체육 육성을 위한 국제적 영향력을 행사한다
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
