import Dropdownmenu from './Dropdownmenu'
import Photogallery from './Photogallery'
import Videogallery from './VIdeogallery'
import Footer from './Footer'
import '../styles/homepage.css'

export default function Homepage() {
  return (
    <div>
      <Dropdownmenu />
      <h2>국민의 건강과 행복의 장을 여는</h2>
      <h1>뉴질랜드대한생활체육회</h1>
      <h2>New Zealand Korea Sports For All Athletic Association</h2>
      <Photogallery />
      <br /> <br />
      <Videogallery />
      <Footer />
    </div>
  )
}
