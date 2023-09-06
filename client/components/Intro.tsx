import { BsPerson } from 'react-icons/bs'
import { MdEmojiFlags } from 'react-icons/md'
import { ImTree } from 'react-icons/im'
import { FaPeopleGroup } from 'react-icons/fa6'

import '../styles/intro.css'

export default function Intro() {
  return (
    <div className="intro_container">
      <div className="intro_main_title_container">
        <h2 className="intro_main_title">체육회 소개</h2>
        <div className="intro_border"></div>
        <h3 className="intro_main_subtitle">
          국민의 건강과 행복의 장을 여는 뉴질랜드대한생활체육회를 소개합니다
        </h3>
      </div>
      <div className="intro_content_container">
        <a href="/info/greet/">
          <div className="intro_item_container">
            <BsPerson className="icon" />
            <h4 className="intro_title">총재 인사말</h4>
            <p className="intro_subtitle">
              어게인 필승 코리아!!
              <br />
              대한생활체육회 총재 김균식 인사말
            </p>
          </div>
        </a>
        <a href="/info/purpose/">
          <div className="intro_item_container">
            <MdEmojiFlags className="icon" />
            <h4 className="intro_title">설립목적</h4>
            <p className="intro_subtitle">
              스포츠가 최고의 국민건강 복지다.
              <br />
              대한생활체육회 설립목적을 소개합니다
            </p>
          </div>
        </a>
        <a href="/info/chart/">
          <div className="intro_item_container">
            <ImTree className="icon" />
            <h4 className="intro_title">중앙조직도</h4>
            <p className="intro_subtitle">
              대한생활체육회의 중앙조직도를
              <br />
              소개합니다
            </p>
          </div>
        </a>
        <a href="/info/status/">
          <div className="intro_item_container">
            <FaPeopleGroup className="icon" />
            <h4 className="intro_title">임원현황</h4>
            <p className="intro_subtitle">
              대한생활체육회를 운영하는 임원단을
              <br />
              소개합니다
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
