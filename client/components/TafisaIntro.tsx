import '../styles/tafisaIntro.css'

export default function TafisaIntro() {
  return (
    <div className="tafisa_intro_container">
      <div className="tafisaimg_container">
        <img src="/images/tafisa.jpeg" alt="tafisa" className="tafisaimg" />
      </div>
      <div className="tafisa_intro_container_container">
        <div className="tafisa_intro_title">
          뉴질랜드 대한생활체육회는 세계 생활체육연맹(TAFISA)과 함께합니다.
        </div>
        <div className="tafisa_intro">
          TAFISA(THE ASSOCIATION FOR INTERNATIONAL SPORT FOR ALL)E 1969 노르웨이
          오슬로에서 시작되어 1991년 정식으로 창설된 국제 스포츠단체로 세계 모든
          사람이 생활체육을 함께 즐기면서 건강한 사회를 이끈다는 사명으로 모든
          사람이 자발적으로 참여하는 건강한 스포츠로서의 생활체육의 가치와
          중요성을 알리고자 앞장서 오고있는 단체이다.
        </div>
      </div>
    </div>
  )
}
