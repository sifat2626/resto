import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div>
      <Outlet />
      {/* footer */}
    </div>
  )
}

export default Root
