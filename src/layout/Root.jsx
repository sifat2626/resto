import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Delivery from "../pages/Delivery"
import Popular from "../pages/Popular"
import Book from "../pages/Book"
import Customer from "../pages/Customer"
import Footer from "../components/Footer"

function Root() {
  return (
    <div className="font-robo overflow-x-hidden">
      <Home />
      <Delivery />
      <Popular />
      <Book />
      <Customer />
      <Footer />
    </div>
  )
}

export default Root
