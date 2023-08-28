import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import { Homepage } from './components/Homepage'
import { 총재인사말 } from './components/Links/총재인사말'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/info/greet" element={<총재인사말 />} />
    </Route>
  )
)
