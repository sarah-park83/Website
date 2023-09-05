import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/단체소개 css/전국체육회현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 종목별운영현황() {
  return (
    <div>
      <Dropdownmenu />

      <Header />

      <div className="subpage-container">
        <div className="location-container">
          <MdHome
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="homeIcon"
          />
          <Link to="/">
            <h2>홈</h2>
          </Link>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <p>단체소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/group/sports">
            <h2>종목별운영현황</h2>
          </Link>
        </div>

        <div className="navbar-container">
          <div className="navbarVertricle">
            <div className="title">
              <h2>단체소개</h2>
            </div>
            <div className="itemList">
              <Link to="/group/nation">
                <div className="navItem">
                  <div className="navLink">전국체육회현황</div>
                </div>
              </Link>
              <Link to="/group/internation">
                <div className="navItem">
                  <div className="navLink">국제체육회현황</div>
                </div>
              </Link>
              <Link to="/group/sports">
                <div className="navItem">
                  <div className="navLink">종목별 운영현황</div>
                </div>
              </Link>
              <Link to="#group/sanha">
                <div className="navItem">
                  <div className="navLink">산하단체</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>종목별 운영현황</h2>
              <h3>대한생활체육회의 종목별 운영현황입니다.</h3>
            </div>
            <div>
              <div className="group-list-container">
                <div className="group-list-title">대한생활체육축구협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fwkddlstjr.png?alt=media&amp;token=7346c671-8265-4ba8-82e1-29295d03fd2f',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fwkddlstjr.png?alt=media&amp;token=7346c671-8265-4ba8-82e1-29295d03fd2f"
                        alt="대한생활체육축구협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 장인석
                    <br />
                    체육회명 : 대한생활체육축구협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육야구협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdltkdwls.png?alt=media&amp;token=ad1233d4-d6c8-44bd-9282-fe0b171f3e0f',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdltkdwls.png?alt=media&amp;token=ad1233d4-d6c8-44bd-9282-fe0b171f3e0f"
                        alt="대한생활체육야구협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이상진
                    <br />
                    체육회명 : 대한생활체육야구협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육골프협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fqocjfgns.png?alt=media&amp;token=f38cf8fd-d52a-4633-9927-408ecebf51b5',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fqocjfgns.png?alt=media&amp;token=f38cf8fd-d52a-4633-9927-408ecebf51b5"
                        alt="대한생활체육골프협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 배철훈
                    <br />
                    체육회명 : 대한생활체육골프협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육농구협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdlgudals.png?alt=media&amp;token=57396a08-4cc5-49b4-980d-b1e390d74245',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdlgudals.png?alt=media&amp;token=57396a08-4cc5-49b4-980d-b1e390d74245"
                        alt="대한생활체육농구협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이형민
                    <br />
                    체육회명 : 대한생활체육농구협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육볼링협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fljyb.png?alt=media&amp;token=bc173c13-0b60-4665-9d60-aa462d196b53',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fljyb.png?alt=media&amp;token=bc173c13-0b60-4665-9d60-aa462d196b53"
                        alt="대한생활체육볼링협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이종열
                    <br />
                    체육회명 : 대한생활체육볼링협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육태권도협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Ftak.png?alt=media&amp;token=73d9b406-c53d-4c00-bb61-e955e206ce6b',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Ftak.png?alt=media&amp;token=73d9b406-c53d-4c00-bb61-e955e206ce6b"
                        alt="대한생활체육태권도협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 손천택
                    <br />
                    체육회명 : 대한생활체육태권도협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육수영협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkdc.png?alt=media&amp;token=28a8b56e-0da5-49cc-9e4a-10d0957d1053',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkdc.png?alt=media&amp;token=28a8b56e-0da5-49cc-9e4a-10d0957d1053"
                        alt="대한생활체육수영협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김동철
                    <br />
                    체육회명 : 대한생활체육수영협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육댄스스포츠협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdas.png?alt=media&amp;token=d2b5bed9-3003-471d-b69e-76df03aa84e5',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdas.png?alt=media&amp;token=d2b5bed9-3003-471d-b69e-76df03aa84e5"
                        alt="대한생활체육댄스스포츠협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 최창환
                    <br />
                    체육회명 : 대한생활체육댄스스포츠협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육당구협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fmkh.png?alt=media&amp;token=48ff47e8-cf6d-424a-92d6-3bd376c6c049',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fmkh.png?alt=media&amp;token=48ff47e8-cf6d-424a-92d6-3bd376c6c049"
                        alt="대한생활체육당구협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 마광현
                    <br />
                    체육회명 : 대한생활체육당구협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육테니스협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frlaxogns.png?alt=media&amp;token=2899b379-af86-401d-9009-8f1dd01964a9',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frlaxogns.png?alt=media&amp;token=2899b379-af86-401d-9009-8f1dd01964a9"
                        alt="대한생활체육테니스협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김태훈
                    <br />
                    체육회명 : 대한생활체육테니스협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육보디빌딩협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2FrlarPwn.png?alt=media&amp;token=69e7d221-314e-4ecc-b78a-550d1ac66667',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2FrlarPwn.png?alt=media&amp;token=69e7d221-314e-4ecc-b78a-550d1ac66667"
                        alt="대한생활체육보디빌딩협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김계주
                    <br />
                    체육회명 : 대한생활체육보디빌딩협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육건강운동사협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fqkrgodus.png?alt=media&amp;token=06bb126e-3ed0-4330-b736-b56cbf3c3dfe',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fqkrgodus.png?alt=media&amp;token=06bb126e-3ed0-4330-b736-b56cbf3c3dfe"
                        alt="대한생활체육건강운동사협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 박해연
                    <br />
                    체육회명 : 대한생활체육건강운동사협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육스키-스노우보드협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frhkrtmddyd.png?alt=media&amp;token=386653c9-c43b-47df-87b2-9b0607f5844d',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frhkrtmddyd.png?alt=media&amp;token=386653c9-c43b-47df-87b2-9b0607f5844d"
                        alt="대한생활체육스키-스노우보드협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 곽승용
                    <br />
                    체육회명 : 대한생활체육스키-스노우보드협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육킥테니스협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frladudgh.png?alt=media&amp;token=75939ccb-729c-41b8-87ab-c640746edec6',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frladudgh.png?alt=media&amp;token=75939ccb-729c-41b8-87ab-c640746edec6"
                        alt="대한생활체육킥테니스협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김영호
                    <br />
                    체육회명 : 대한생활체육킥테니스협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육프리테니스협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2FdlgPwn.png?alt=media&amp;token=f8237b79-5d31-4a50-b5ff-cff242f5ac77',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2FdlgPwn.png?alt=media&amp;token=f8237b79-5d31-4a50-b5ff-cff242f5ac77"
                        alt="대한생활체육프리테니스협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이혜주
                    <br />
                    체육회명 : 대한생활체육프리테니스협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육배드민턴협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fskawngus.png?alt=media&amp;token=9330b157-d4fd-45f3-b96e-1d145920f3c8',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fskawngus.png?alt=media&amp;token=9330b157-d4fd-45f3-b96e-1d145920f3c8"
                        alt="대한생활체육배드민턴협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 남주현
                    <br />
                    체육회명 : 대한생활체육배드민턴협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육e-sports협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fmkjj.png?alt=media&amp;token=7d17346b-eff3-4069-9892-b2c90fd4dd52',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fmkjj.png?alt=media&amp;token=7d17346b-eff3-4069-9892-b2c90fd4dd52"
                        alt="대한생활체육e-sports협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 문기주
                    <br />
                    체육회명 : 대한생활체육e-sports협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육페당크협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flth.png?alt=media&amp;token=3c95594a-2f52-431d-ae36-d4997f6ffd57',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flth.png?alt=media&amp;token=3c95594a-2f52-431d-ae36-d4997f6ffd57"
                        alt="대한생활체육페당크협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이태훈
                    <br />
                    체육회명 : 대한생활체육페당크협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육레스링협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkhj.png?alt=media&amp;token=296a88ee-8eba-4a74-bf36-a19529b2b249',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkhj.png?alt=media&amp;token=296a88ee-8eba-4a74-bf36-a19529b2b249"
                        alt="대한생활체육레스링협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김현진
                    <br />
                    체육회명 : 대한생활체육레스링협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육탁구협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frhkrtkdtjr.png?alt=media&amp;token=fcdd984e-0482-4693-88c7-c017a76b5a36',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Frhkrtkdtjr.png?alt=media&amp;token=fcdd984e-0482-4693-88c7-c017a76b5a36"
                        alt="대한생활체육탁구협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 곽상석
                    <br />
                    체육회명 : 대한생활체육탁구협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육국제슈팅카경기협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fchldbwls.png?alt=media&amp;token=9906861d-b05c-4818-a661-d9be03c7b8e3',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fchldbwls.png?alt=media&amp;token=9906861d-b05c-4818-a661-d9be03c7b8e3"
                        alt="대한생활체육국제슈팅카경기협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 최유진
                    <br />
                    체육회명 : 대한생활체육국제슈팅카경기협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육펫스포츠협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhwang2.png?alt=media&amp;token=9ebfd4cb-2871-45a9-af76-e8b45aaab554',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhwang2.png?alt=media&amp;token=9ebfd4cb-2871-45a9-af76-e8b45aaab554"
                        alt="대한생활체육펫스포츠협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 황수경
                    <br />
                    체육회명 : 대한생활체육펫스포츠협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육요가-필라테스협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdldlstmd.png?alt=media&amp;token=59cafb34-786b-4973-805b-dcaeda98fcf3',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fdldlstmd.png?alt=media&amp;token=59cafb34-786b-4973-805b-dcaeda98fcf3"
                        alt="대한생활체육요가-필라테스협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이인승
                    <br />
                    체육회명 : 대한생활체육요가-필라테스협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육피트니스지엑스협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fghkdwlghks.png?alt=media&amp;token=787ad77f-5fda-4554-9fe3-aa31c505a14a',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fghkdwlghks.png?alt=media&amp;token=787ad77f-5fda-4554-9fe3-aa31c505a14a"
                        alt="대한생활체육피트니스지엑스협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 황지환
                    <br />
                    체육회명 : 대한생활체육피트니스지엑스협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육파크골프협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fpga.png?alt=media&amp;token=cf8b3602-6a16-4c22-b981-5af8c7843f77',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fpga.png?alt=media&amp;token=cf8b3602-6a16-4c22-b981-5af8c7843f77"
                        alt="대한생활체육파크골프협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 천성희
                    <br />
                    체육회명 : 대한생활체육파크골프협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육키즈스포츠협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhong2.png?alt=media&amp;token=eb029817-2045-4b4a-bc62-f67536b4b1de',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhong2.png?alt=media&amp;token=eb029817-2045-4b4a-bc62-f67536b4b1de"
                        alt="대한생활체육키즈스포츠협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 홍은탁
                    <br />
                    체육회명 : 대한생활체육키즈스포츠협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육승마협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fknh.png?alt=media&amp;token=759ce19d-8ab9-4ef9-93cd-2af9ea36ad87',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fknh.png?alt=media&amp;token=759ce19d-8ab9-4ef9-93cd-2af9ea36ad87"
                        alt="대한생활체육승마협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김남훈
                    <br />
                    체육회명 : 대한생활체육승마협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육브레인걷기협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fbest.png?alt=media&amp;token=88c77a94-aa42-4e1c-8c1b-42f155e6ee15',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fbest.png?alt=media&amp;token=88c77a94-aa42-4e1c-8c1b-42f155e6ee15"
                        alt="대한생활체육브레인걷기협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 성봉주
                    <br />
                    체육회명 : 대한생활체육브레인걷기협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육티볼소프트볼협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Ftball.png?alt=media&amp;token=6dcf1e74-e2aa-4d49-8384-4b4e2dcb46f6',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Ftball.png?alt=media&amp;token=6dcf1e74-e2aa-4d49-8384-4b4e2dcb46f6"
                        alt="대한생활체육티볼소프트볼협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 황창근
                    <br />
                    체육회명 : 대한생활체육티볼소프트볼협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육피구협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkck.png?alt=media&amp;token=bc209291-a987-4616-b228-9d7164e7ea0d',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkck.png?alt=media&amp;token=bc209291-a987-4616-b228-9d7164e7ea0d"
                        alt="대한생활체육피구협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김철기
                    <br />
                    체육회명 : 대한생활체육피구협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육트레킹협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fksk.png?alt=media&amp;token=c4fca93f-936d-416b-bf47-5b286c1a126d',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fksk.png?alt=media&amp;token=c4fca93f-936d-416b-bf47-5b286c1a126d"
                        alt="대한생활체육트레킹협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김성곤
                    <br />
                    체육회명 : 대한생활체육트레킹협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육철인3종협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkys.png?alt=media&amp;token=39430af5-5762-4eed-ace5-4ba5c71f4ed8',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkys.png?alt=media&amp;token=39430af5-5762-4eed-ace5-4ba5c71f4ed8"
                        alt="대한생활체육철인3종협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김윤세
                    <br />
                    체육회명 : 대한생활체육철인3종협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육낚시협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjsk.png?alt=media&amp;token=0752552f-b47a-4f6d-9648-6d56ec0f03f3',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fjsk.png?alt=media&amp;token=0752552f-b47a-4f6d-9648-6d56ec0f03f3"
                        alt="대한생활체육낚시협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 조상권
                    <br />
                    체육회명 : 대한생활체육낚시협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육한국레저골프협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhsk.png?alt=media&amp;token=129278be-506d-4b6a-9c6e-6fefd8aa98c5',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhsk.png?alt=media&amp;token=129278be-506d-4b6a-9c6e-6fefd8aa98c5"
                        alt="대한생활체육한국레저골프협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 화세경
                    <br />
                    체육회명 : 대한생활체육한국레저골프협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육밸리협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fyhy.png?alt=media&amp;token=b0300eff-7737-4737-bdfd-a05e53ba6e1c',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fyhy.png?alt=media&amp;token=b0300eff-7737-4737-bdfd-a05e53ba6e1c"
                        alt="대한생활체육밸리협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 여혜영
                    <br />
                    체육회명 : 대한생활체육밸리협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육스포츠스테킹협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkmy.png?alt=media&amp;token=83597a8b-0729-4520-bb64-3da0f04684f2',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkmy.png?alt=media&amp;token=83597a8b-0729-4520-bb64-3da0f04684f2"
                        alt="대한생활체육스포츠스테킹협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 고미영
                    <br />
                    체육회명 : 대한생활체육스포츠스테킹협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육페더글라이딩협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fpjo.png?alt=media&amp;token=265785c2-59db-421f-a574-b86ea6112466',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fpjo.png?alt=media&amp;token=265785c2-59db-421f-a574-b86ea6112466"
                        alt="대한생활체육페더글라이딩협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 박진원
                    <br />
                    체육회명 : 대한생활체육페더글라이딩협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육윷놀이협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkhd.png?alt=media&amp;token=12ae0dcb-bb35-495d-8586-e7ef5f3737cc',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkhd.png?alt=media&amp;token=12ae0dcb-bb35-495d-8586-e7ef5f3737cc"
                        alt="대한생활체육윷놀이협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 김혁동
                    <br />
                    체육회명 : 대한생활체육윷놀이협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육복싱협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhhc.png?alt=media&amp;token=b7c94949-d522-4951-8f75-c4c3db3d271c',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhhc.png?alt=media&amp;token=b7c94949-d522-4951-8f75-c4c3db3d271c"
                        alt="대한생활체육복싱협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 황현철
                    <br />
                    체육회명 : 대한생활체육복싱협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육마라톤협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flku.png?alt=media&amp;token=6fbf0914-4c0e-49dc-8290-f86d192a0b79',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flku.png?alt=media&amp;token=6fbf0914-4c0e-49dc-8290-f86d192a0b79"
                        alt="대한생활체육마라톤협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이규운
                    <br />
                    체육회명 : 대한생활체육마라톤협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">대한생활체육피크볼협회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhjk.png?alt=media&amp;token=7556d7fe-85b4-4b2b-a61d-0119f10bf1be',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fhjk.png?alt=media&amp;token=7556d7fe-85b4-4b2b-a61d-0119f10bf1be"
                        alt="대한생활체육피크볼협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 허정균
                    <br />
                    체육회명 : 대한생활체육피크볼협회
                  </p>
                </div>
              </div>

              <div className="group-list-container">
                <div className="group-list-title">
                  대한생활체육스노우스케이트협회
                </div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkhn.png?alt=media&amp;token=cb130c09-960b-4fe7-b3dd-1e424931b5ec',
                          '_blank',
                          'width=380,height=500,top=100,left=100'
                        )
                      }}
                    >
                      <img
                        className="group-image"
                        src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Fkhn.png?alt=media&amp;token=cb130c09-960b-4fe7-b3dd-1e424931b5ec"
                        alt="대한생활체육스노우스케이트협회"
                      />
                    </button>
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 권혁남
                    <br />
                    체육회명 : 대한생활체육스노우스케이트협회
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
