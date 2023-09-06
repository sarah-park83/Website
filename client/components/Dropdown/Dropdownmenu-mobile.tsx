import '../../styles/dropdownmenu-mobile.css'
import logo from '/images/logo.png'
import { FaBars } from 'react-icons/fa'

export default function Dropdownmenu_mobile() {
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
          <FaBars focusable="false" aria-hidden="true" className="menu-icon" />
        </div>
      </div>
    </>
  )
}
