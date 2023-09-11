import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import { Homepage } from './components/Homepage'

import * as 체육회소개Components from './components/Links/체육회소개 components'
import * as 단체소개components from './components/Links/단체소개 components'
import * as 대회정보components from './components/Links/대회정보 components'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/info/greet" element={<체육회소개Components.총재인사말 />} />
      <Route path="/info/purpose" element={<체육회소개Components.설립목적 />} />
      <Route path="/info/chart" element={<체육회소개Components.중앙조직도 />} />
      <Route path="/info/status" element={<체육회소개Components.임원현황 />} />
      <Route
        path="/info/location"
        element={<체육회소개Components.오시는길 />}
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
      <Route path="/notice/apply/1" element={<대회정보components.대회신청 />} />
      <Route
        path="/article/apply/1/BNSHDS4LNFummHbOdUSR"
        element={<대회정보components.대회신청Link2 />}
      />
      <Route
        path="/notice/schedule/1"
        element={<대회정보components.대회행사일정p1 />}
      />
      <Route
        path="/article/schedule/1/7HKTKI48bMbERkxfMUHT"
        element={<대회정보components.대회행사일정Link18 />}
      />
      <Route
        path="/notice/schedule/2"
        element={<대회정보components.대회행사일정p2 />}
      />
    </Route>
  )
)
