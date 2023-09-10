import '../../styles/dropdownmenu-mobile.css'
import logo from '/images/logo.png'
import { FaBars } from 'react-icons/fa'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'

export default function Dropdownmenu_mobile() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isExpanded1, setIsExpanded1] = useState(false)
  const [isExpanded2, setIsExpanded2] = useState(false)
  const [isExpanded3, setIsExpanded3] = useState(false)
  const [isExpanded4, setIsExpanded4] = useState(false)
  const [isExpanded5, setIsExpanded5] = useState(false)
  const [isExpanded6, setIsExpanded6] = useState(false)

  const toggleMobileNavMenu = useCallback(() => {
    const mobileNavMenu = document.querySelector('.mobile-nav-menu')
    if (mobileNavMenu) {
      mobileNavMenu.classList.toggle('active')
      setIsMenuActive(!isMenuActive)
    }
  }, [isMenuActive])

  useEffect(() => {
    const menuIcon = document.getElementById('menu-icon')
    if (menuIcon) {
      menuIcon.addEventListener('click', toggleMobileNavMenu)
    }
    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener('click', toggleMobileNavMenu)
      }
    }
  }, [toggleMobileNavMenu])

  const toggleMobileNav1 = () => {
    setIsExpanded1(!isExpanded1)
    setIsExpanded2(false)
    setIsExpanded3(false)
    setIsExpanded4(false)
    setIsExpanded5(false)
    setIsExpanded6(false)
  }

  const toggleMobileNav2 = () => {
    setIsExpanded2(!isExpanded2)
    setIsExpanded1(false)
    setIsExpanded3(false)
    setIsExpanded4(false)
    setIsExpanded5(false)
    setIsExpanded6(false)
  }

  const toggleMobileNav3 = () => {
    setIsExpanded3(!isExpanded3)
    setIsExpanded1(false)
    setIsExpanded2(false)
    setIsExpanded4(false)
    setIsExpanded5(false)
    setIsExpanded6(false)
  }

  const toggleMobileNav4 = () => {
    setIsExpanded4(!isExpanded4)
    setIsExpanded1(false)
    setIsExpanded2(false)
    setIsExpanded3(false)
    setIsExpanded5(false)
    setIsExpanded6(false)
  }

  const toggleMobileNav5 = () => {
    setIsExpanded5(!isExpanded5)
    setIsExpanded1(false)
    setIsExpanded2(false)
    setIsExpanded3(false)
    setIsExpanded4(false)
    setIsExpanded6(false)
  }

  const toggleMobileNav6 = () => {
    setIsExpanded6(!isExpanded6)
    setIsExpanded1(false)
    setIsExpanded2(false)
    setIsExpanded3(false)
    setIsExpanded4(false)
    setIsExpanded5(false)
  }

  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-mobile-logo">
          <a href="/">
            <span className="logo-container">
              <span>
                <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%2750%27/%3e"
                />
              </span>
              <img
                src={logo}
                alt="대한생활체육회 로고"
                className="navbar-logo-img"
              />
            </span>
          </a>
        </div>
        <div className="mobile-menu-icon">
          <a
            className="mobile-login"
            target="_blank"
            rel="noreferrer"
            href="http://ksfaa.co.kr"
          >
            회원가입 및 회원증 확인
          </a>
          {isMenuActive ? (
            <RxCross2
              focusable="false"
              aria-hidden="true"
              className="menu-icon"
              id="menu-icon"
            />
          ) : (
            <FaBars
              focusable="false"
              aria-hidden="true"
              className="menu-icon"
              id="menu-icon"
            />
          )}
        </div>
        <div className="mobile-nav-menu">
          <button
            className={`mobile-nav-title ${
              isExpanded1 ? 'mobile-nav-title-selected' : ''
            }`}
            onClick={toggleMobileNav1}
          >
            체육회소개
            {isExpanded1 ? (
              <BiSolidUpArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="up-arrow-icon"
              />
            ) : (
              <BiSolidDownArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="down-arrow-icon"
              />
            )}
          </button>
          {isExpanded1 && (
            <>
              <Link to="/info/greet">
                <div className="mobile-nav-item">총재 인사말</div>
              </Link>
              <Link to="/info/purpose">
                <div className="mobile-nav-item">설립목적</div>
              </Link>
              <Link to="/info/chart">
                <div className="mobile-nav-item">중앙 조직도</div>
              </Link>
              <Link to="/info/status">
                <div className="mobile-nav-item">임원현황</div>
              </Link>
              <Link to="/info/location">
                <div className="mobile-nav-item">오시는 길</div>
              </Link>
            </>
          )}

          <button
            className={`mobile-nav-title ${
              isExpanded2 ? 'mobile-nav-title-selected' : ''
            }`}
            onClick={toggleMobileNav2}
          >
            단체소개
            {isExpanded2 ? (
              <BiSolidUpArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="up-arrow-icon"
              />
            ) : (
              <BiSolidDownArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="down-arrow-icon"
              />
            )}
          </button>
          {isExpanded2 && (
            <>
              <Link to="/group/nation">
                <div className="mobile-nav-item">전국체육회현황</div>
              </Link>
              <Link to="/group/internation">
                <div className="mobile-nav-item">국제체육회현황</div>
              </Link>
              <Link to="/group/sports">
                <div className="mobile-nav-item">종목별운영현황</div>
              </Link>
              <Link to="/group/sanha">
                <div className="mobile-nav-item">산하단체</div>
              </Link>
            </>
          )}

          <button
            className={`mobile-nav-title ${
              isExpanded3 ? 'mobile-nav-title-selected' : ''
            }`}
            onClick={toggleMobileNav3}
          >
            대회정보
            {isExpanded3 ? (
              <BiSolidUpArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="up-arrow-icon"
              />
            ) : (
              <BiSolidDownArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="down-arrow-icon"
              />
            )}
          </button>
          {isExpanded3 && (
            <>
              <Link to="/notice/apply/1">
                <div className="mobile-nav-item">대회신청</div>
              </Link>
              <Link to="/notice/schedule/1">
                <div className="mobile-nav-item">대회/행사일정</div>
              </Link>
              <Link to="/notice/result/1">
                <div className="mobile-nav-item">경기결과</div>
              </Link>
            </>
          )}

          <button
            className={`mobile-nav-title ${
              isExpanded4 ? 'mobile-nav-title-selected' : ''
            }`}
            onClick={toggleMobileNav4}
          >
            알림마당
            {isExpanded4 ? (
              <BiSolidUpArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="up-arrow-icon"
              />
            ) : (
              <BiSolidDownArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="down-arrow-icon"
              />
            )}
          </button>
          {isExpanded4 && (
            <>
              <Link to="/notice/announcement/1">
                <div className="mobile-nav-item">공지/소식사항</div>
              </Link>
              <Link to="/notice/media/1">
                <div className="mobile-nav-item">언론보도</div>
              </Link>
              <Link to="/notice/photo/1">
                <div className="mobile-nav-item">포토갤러리</div>
              </Link>
              <Link to="/notice/video/1">
                <div className="mobile-nav-item">동영상갤러리</div>
              </Link>
            </>
          )}

          <button
            className={`mobile-nav-title ${
              isExpanded5 ? 'mobile-nav-title-selected' : ''
            }`}
            onClick={toggleMobileNav5}
          >
            자료실
            {isExpanded5 ? (
              <BiSolidUpArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="up-arrow-icon"
              />
            ) : (
              <BiSolidDownArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="down-arrow-icon"
              />
            )}
          </button>
          {isExpanded5 && (
            <>
              <Link to="/notice/reference/1">
                <div className="mobile-nav-item">자료실</div>
              </Link>
            </>
          )}

          <button
            className={`mobile-nav-title ${
              isExpanded6 ? 'mobile-nav-title-selected' : ''
            }`}
            onClick={toggleMobileNav6}
          >
            협력기관
            {isExpanded6 ? (
              <BiSolidUpArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="up-arrow-icon"
              />
            ) : (
              <BiSolidDownArrow
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="down-arrow-icon"
              />
            )}
          </button>
          {isExpanded6 && (
            <>
              <Link to="/mou/mou">
                <div className="mobile-nav-item">협력기관</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}