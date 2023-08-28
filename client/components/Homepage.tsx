import Dropdownmenu from './Dropdown/Dropdownmenu'
import Photogallery from './Photogallery'
import Footer from './Footer'
import Banner from './Banner'

import '../styles/homepage.css'

export function Homepage() {
  return (
    <div className="page-container">
      <Dropdownmenu />
      <Banner />
      <Photogallery />
      hello
      <br /> hello
      <br /> hello
      <Footer />
    </div>
  )
}
