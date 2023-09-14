import logo2 from '/images/logo2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Dropdown6() {
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
        href="#coorporates"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        스폰서
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
              <h3>스폰서</h3>
              <img src={logo2} alt="Logo2" id="logo2" />
            </div>

            <div className="content-right">
              <div className="right-line" id="line-1">
                <p id="first-orange">스폰서</p>
                <div className="links">
                  <a href="#1">스폰서</a>
                </div>
              </div>

              <div className="right-line" id="line-2">
                <p>체육회 소개</p>
                <div className="links">
                  <a href="#1">뉴질랜드 대한생활체육회 회장</a>
                  <a href="#2">설립목적</a>
                  <a href="#4">뉴질랜드 회원 클럽</a>
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
                <p>알림마당</p>
                <div className="links">
                  <Link to="#1">공지/소식사항</Link>
                  <Link to="#3">갤러리</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
