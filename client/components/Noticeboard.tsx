import '../styles/noticeboard.css'

export default function Noticeboard() {
  return (
    <div className="noticeboard_container">
      <div className="noticeboard_noticeboard_container">
        <ul className="noticeboard_tab">
          <li className="noticeboard_selected">공지/소식사항</li>
          <li>언론보도</li>
          <li>대회/행사일정</li>
          <li>대회신청</li>
          <a href="notice/announcement/1">
            <li>+</li>
          </a>
        </ul>
        <ul className="noticeboard_content_container">
          <a href="article/announcement/2">
            <li>
              <p>●</p>
              <h4 className="article_createdAt">2023.08.03</h4>
              <h4 className="article_title">
                대한생활체육회 가입 회원 제휴 혜택 안내
              </h4>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}
