import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div className="font-robo">
      <Outlet />
      {/* footer */}
    </div>
  )
}

export default Root
