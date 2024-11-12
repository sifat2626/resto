import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Delivery from "../pages/Delivery"

function Root() {
  return (
    <div className="font-robo">
      <Home />
      <Delivery />
      {/* footer */}
    </div>
  )
}

export default Root
