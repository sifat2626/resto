import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Delivery from "../pages/Delivery"
import Popular from "../pages/Popular"
import Book from "../pages/Book"

function Root() {
  return (
    <div className="font-robo">
      <Home />
      <Delivery />
      <Popular />
      <Book />
      {/* footer */}
    </div>
  )
}

export default Root
