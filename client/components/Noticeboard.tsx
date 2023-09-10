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
        <ul className="article_content_container">
          <a href="article/announcement/2">
            <li className="article_list">
              <p>●</p>
              <h4 className="article_createdAt">2023.08.03</h4>
              <h4 className="article_title">
                대한생활체육회 가입 회원 제휴 혜택 안내
              </h4>
            </li>
          </a>
          <a href="/article/anouncement/1/fXgAI1gW5oynoQoYvv7j">
            <li>
              <p>●</p>
              <h4 className="article_createdAt">2022.02.10</h4>
              <h4 className="article_title">
                코로나 확산으로 인한 103주년 삼일절 특별행사 취소건
              </h4>
            </li>
          </a>
          <a href="/article/anouncement/1/Fq4EEqvfNaQEu98NiLDT">
            <li>
              <p>●</p>
              <h4 className="article_createdAt">2022.02.06</h4>
              <h4 className="article_title">
                대한생활체육회 제103주년 삼일절 특별행사
              </h4>
            </li>
          </a>
          <a href="/article/anouncement/1/N61bnWsOzPx9VwEtyI1o">
            <li>
              <p>●</p>
              <h4 className="article_createdAt">2021.12.24</h4>
              <h4 className="article_title">
                대한생활체육회(가) 고려대학교구로병원(과) 건강검진협약체결
              </h4>
            </li>
          </a>
          <a href="/article/anouncement/1/D8OubT5WRHgoXUirfBUl">
            <li>
              <p>●</p>
              <h4 className="article_createdAt">2021.12.20</h4>
              <h4 className="article_title">
                대한생활체육회 2022년도 세부일정안내(2021.12.20)
              </h4>
            </li>
          </a>
          <a href="/article/anouncement/1/7tJjzsD9ZME7dgt04KrQ">
            <li>
              <p>●</p>
              <h4 className="article_createdAt">2021.12.20</h4>
              <h4 className="article_title">
                대한생활체육회 (주)HJ 매그놀리아 용평 호텔 앤 리조트 MOU 제휴
                안내
              </h4>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}
