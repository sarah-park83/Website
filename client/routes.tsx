import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import { Homepage } from './components/Homepage'

import * as 체육회소개Components from './components/Links/체육회소개 components'
import * as 단체소개components from './components/Links/단체소개 components'
import * as 알림마당components from './components/Links/알림마당 components'
import { 스폰서 } from './components/Links/스폰서 components/스폰서'
import { 회원가입 } from './components/Links/회원가입 components/회원가입'

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route
        path="/info/greet"
        element={<체육회소개Components.뉴질랜드대한생활체육회회장 />}
      />
      <Route path="/info/purpose" element={<체육회소개Components.설립목적 />} />
      <Route
        path="/info/status"
        element={<체육회소개Components.뉴질랜드회원클럽 />}
      />
      <Route
        path="/group/nation"
        element={<단체소개components.전국체육회현황 />}
      />
      <Route
        path="/group/internation"
        element={<단체소개components.국제체육회현황 />}
      />
      <Route
        path="/notice/announcement/1"
        element={<알림마당components.공지소식사항 />}
      />
      <Route
        path="/article/anouncement/1/wBwT6IpiRh0pkWfXADw5"
        element={<알림마당components.공지소식사항Link1 />}
      />
      <Route path="/notice/gallery/1" element={<알림마당components.갤러리 />} />
      {/* <Route
        path="/article/photo/badminton"
        element={<알림마당components.BadmintonPhotos />}
      />
      <Route
        path="/article/photo/basketball"
        element={<알림마당components.BasketballPhotos />}
      />
      <Route
        path="/article/photo/groupPhotos"
        element={<알림마당components.GroupPhotos />}
      />
      <Route
        path="/article/photo/hockey"
        element={<알림마당components.HockeyPhotos />}
      />
      <Route
        path="/article/photo/election"
        element={<알림마당components.ElectionPhotos />}
      />
      <Route
        path="/article/photo/pool"
        element={<알림마당components.PoolPhotos />}
      />
      <Route
        path="/article/photo/soccer"
        element={<알림마당components.SoccerPhotos />}
      />
      <Route
        path="/article/photo/swimming"
        element={<알림마당components.SwimmingPhotos />}
      />
      <Route
        path="/article/photo/tennis"
        element={<알림마당components.TennisPhotos />}
      />
      <Route
        path="/article/photo/trophy"
        element={<알림마당components.TrophyPhotos />}
      />

      <Route
        path="/article/video/1/I7AOsNSrNuBCk8RBz9II"
        element={<알림마당components.갤러리Vid1 />}
      /> */}
      <Route path="/mou/mou" element={<스폰서 />} />
      <Route path="/join" element={<회원가입 />} />
    </Route>
  )
)
