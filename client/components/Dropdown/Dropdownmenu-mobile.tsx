import '../../styles/dropdownmenu-mobile.css'
import logo from '/images/logo.png'
import { FaBars } from 'react-icons/fa'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'

import { useEffect, useState, useCallback } from 'react'

export default function Dropdownmenu_mobile() {
  const [isMenuActive, setIsMenuActive] = useState(false)

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

  ////////////////////////////////////////////////
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleMobileNav = () => {
    setIsExpanded(!isExpanded)
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
              isExpanded ? 'mobile-nav-title-selected' : ''
            }`}
            onClick={toggleMobileNav}
          >
            체육회소개
            {isExpanded ? (
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
          {isExpanded && (
            <a href="/info/greet">
              <li className="mobile-nav-item">총재 인사말</li>
            </a>
          )}
        </div>
      </div>
    </>
  )
}
