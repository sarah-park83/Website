import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import { Homepage } from './components/Homepage'

import * as 체육회소개Components from './components/Links/체육회소개 components'
import * as 단체소개components from './components/Links/단체소개 components'
import * as 공지소식사항components from './components/Links/알림마당 components'

export const router = createBrowserRouter(
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
        path="/group/sports"
        element={<단체소개components.종목별운영현황 />}
      />
      <Route path="/group/sanha" element={<단체소개components.산하단체 />} />
      <Route
        path="/notice/announcement/1"
        element={<공지소식사항components.공지소식사항 />}
      />
      <Route
        path="/article/anouncement/1/wBwT6IpiRh0pkWfXADw5"
        element={<공지소식사항components.공지소식사항Link1 />}
      />
      <Route
        path="/notice/gallery/1"
        element={<공지소식사항components.갤러리 />}
      />
      <Route
        path="/article/photo/1/PRD1XR57m9dKNGUQdCub"
        element={<공지소식사항components.PRD1XR57m9dKNGUQdCub />}
      />
    </Route>
  )
)
