import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import { Homepage } from './components/Homepage'
import { 총재인사말 } from './components/Links/체육회 소개 components/총재인사말'
import { 설립목적 } from './components/Links/체육회 소개 components/설립목적'
import { 중앙조직도 } from './components/Links/체육회 소개 components/중앙 조직도'
import { 임원현황 } from './components/Links/체육회 소개 components/임원현황'
import { 오시는길 } from './components/Links/체육회 소개 components/오시는 길'
import { 전국체육회현황 } from './components/Links/단체소개 components/전국체육회현황'
import { 국제체육회현황 } from './components/Links/단체소개 components/국제체육회현황'
import { 종목별운영현황 } from './components/Links/단체소개 components/종목별 운영현황'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/info/greet" element={<총재인사말 />} />
      <Route path="/info/purpose" element={<설립목적 />} />
      <Route path="/info/chart" element={<중앙조직도 />} />
      <Route path="/info/status" element={<임원현황 />} />
      <Route path="/info/location" element={<오시는길 />} />
      <Route path="/group/nation" element={<전국체육회현황 />} />
      <Route path="/group/internation" element={<국제체육회현황 />} />
      <Route path="/group/sports" element={<종목별운영현황 />} />
    </Route>
  )
)
