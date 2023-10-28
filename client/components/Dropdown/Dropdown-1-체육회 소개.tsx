import logo2 from '../../images/logo2.png'
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
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        체육회 소개
      </div>
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
                  <Link to="/info/greet">뉴질랜드 대한생활체육회 회장</Link>
                  <Link to="/info/purpose">설립목적</Link>
                  <Link to="/info/status">뉴질랜드 회원 클럽</Link>
                </div>
              </div>

              <div className="right-line" id="line-2">
                <p>단체소개</p>
                <div className="links">
                  <Link to="/group/nation">전국체육회현황</Link>
                  <Link to="/group/internation">국제체육회현황</Link>
                </div>
              </div>

              <div className="right-line" id="line-2">
                <p>알림마당</p>
                <div className="links">
                  <Link to="/notice/announcement/1">공지/소식사항</Link>
                  <Link to="/notice/gallery/1">갤러리</Link>
                </div>
              </div>

              <div className="right-line">
                <p>스폰서</p>
                <div className="links">
                  <Link to="/mou/mou">스폰서</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
