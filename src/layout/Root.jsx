import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Delivery from "../pages/Delivery"
import Popular from "../pages/Popular"
import Book from "../pages/Book"
import Customer from "../pages/Customer"

function Root() {
  return (
    <div className="font-robo overflow-x-hidden">
      <Home />
      <Delivery />
      <Popular />
      <Book />
      <Customer />
      {/* footer */}
    </div>
  )
}

export default Root
