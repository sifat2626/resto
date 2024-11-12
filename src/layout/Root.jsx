import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Delivery from "../pages/Delivery"
import Popular from "../pages/Popular"

function Root() {
  return (
    <div className="font-robo">
      <Home />
      <Delivery />
      <Popular />
      {/* footer */}
    </div>
  )
}

export default Root
