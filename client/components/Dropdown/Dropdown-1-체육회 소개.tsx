import logo2 from '/images/logo2.png'
import { Link } from 'react-router-dom'

export default function Dropdown1() {
  return (
    <a href="#info">
      체육회 소개
      <div className="dropdown-content" id="dropdown-content1">
        <div className="dropdown">
          <div className="content-left">
            <p>국민의 건강과 행복의 장을 여는</p>
            <p>대한생활 체육회</p>
            <h3>체육회 소개</h3>
            <img src={logo2} alt="Logo2" id="logo2" />
          </div>

          <div className="content-right">
            <div className="right-line" id="line-1">
              <p id="first-orange">체육회 소개</p>
              <div className="links">
                <Link to="/info/greet">총재 인사말</Link>
                <a href="#2">설립목적</a>
                <a href="#3">중앙 조직도</a>
                <a href="#4">임원현황</a>
                <a href="#5">오시는 길</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>단체소개</p>
              <div className="links">
                <a href="#1">전국체육회현황</a>
                <a href="#2">국제체육회현황</a>
                <a href="#3">종목별 운영현황</a>
                <a href="#4">산하단체</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>대회정보</p>
              <div className="links">
                <a href="#1">대회신청</a>
                <a href="#2">대회/행사일정</a>
                <a href="#3">경기결과</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>알림마당</p>
              <div className="links">
                <a href="#1">공지/소식사항</a>
                <a href="#2">언론보도</a>
                <a href="#3">포토갤러리</a>
                <a href="#4">동영상갤러리</a>
              </div>
            </div>

            <div className="right-line" id="line-2">
              <p>자료실</p>
              <div className="links">
                <a href="#1">자료실</a>
              </div>
            </div>

            <div className="right-line">
              <p>협력기관</p>
              <div className="links">
                <a href="#1">협력기관</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
