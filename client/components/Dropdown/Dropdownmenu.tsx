import '../../styles/dropdownmenu.css'
import logo from '/images/logo.png'
import Dropdown1 from './Dropdown-1-체육회 소개'
import Dropdown2 from './Dropdown-2-단체소개'
import Dropdown4 from './Dropdown-4-알림마당'
import Dropdown6 from './Dropdown-6-스폰서'

import { useAuth0 } from '@auth0/auth0-react'
import { IfNotAuthenticated, IfAuthenticated } from '../Authentication'
import { useEffect, useState } from 'react'

export default function Dropdownmenu() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleSignIn = () => {
    loginWithRedirect()
  }

  const handleSignOut = () => {
    logout()
    localStorage.removeItem('isAuthenticated') // Remove the flag on logout
  }

  useEffect(() => {
    const savedAuthStatus = localStorage.getItem('isAuthenticated')
    if (savedAuthStatus === 'true') {
      isAuthenticated || localStorage.setItem('isAuthenticated', 'true')
    } else {
      isAuthenticated && localStorage.setItem('isAuthenticated', 'false')
    }
  }, [isAuthenticated])

  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" id="logo" />
      </a>

      <Dropdown1 />
      <Dropdown2 />
      <Dropdown4 />
      <Dropdown6 />

      {isAuthenticated ? (
        <button onClick={handleSignOut}>로그아웃</button>
      ) : (
        <button onClick={handleSignIn} className="loginButton">
          회원가입/회원증 확인
        </button>
      )}
      {/* 
      <IfAuthenticated>
        <button onClick={handleSignOut}>로그아웃</button>
      </IfAuthenticated> */}
    </div>
  )
}
