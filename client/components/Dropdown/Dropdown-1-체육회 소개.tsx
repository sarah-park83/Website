import logo2 from '/images/logo2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Dropdown1() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  return (
    <>
      <a
        href="#info"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        체육회 소개
      </a>
      {isDropdownOpen && (
        <div
          className="dropdown-content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
                  <Link to="/info/greet" className="links-pages">
                    총재 인사말
                  </Link>
                  <Link to="/info/purpose" className="links-pages">
                    설립목적
                  </Link>
                  <Link to="/info/chart" className="links-pages">
                    중앙 조직도
                  </Link>
                  <Link to="/info/status" className="links-pages">
                    임원현황
                  </Link>
                  <Link to="/info/location" className="links-pages">
                    오시는 길
                  </Link>
                </div>
              </div>

              <div className="right-line" id="line-2">
                <p>단체소개</p>
                <div className="links">
                  <Link to="/group/nation">전국체육회현황</Link>
                  <Link to="/group/internation">국제체육회현황</Link>
                  <Link to="/group/sports">종목별운영현황</Link>
                  <Link to="/group/sanha">산하단체</Link>
                </div>
              </div>

              <div className="right-line" id="line-2">
                <p>대회정보</p>
                <div className="links">
                  <Link to="/notice/apply/1">대회신청</Link>
                  <Link to="/notice/schedule/1">대회/행사일정</Link>
                  <Link to="/notice/result/1">경기결과</Link>
                </div>
              </div>

              <div className="right-line" id="line-2">
                <p>알림마당</p>
                <div className="links">
                  <Link to="#1">공지/소식사항</Link>
                  <Link to="#2">언론보도</Link>
                  <Link to="#3">포토갤러리</Link>
                  <Link to="#4">동영상갤러리</Link>
                </div>
              </div>

              <div className="right-line" id="line-2">
                <p>자료실</p>
                <div className="links">
                  <Link to="#1">자료실</Link>
                </div>
              </div>

              <div className="right-line">
                <p>협력기관</p>
                <div className="links">
                  <Link to="#1">협력기관</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
