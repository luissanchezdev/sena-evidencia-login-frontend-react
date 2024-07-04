import { Navigate, Outlet } from "react-router-dom"

function ProtectRoute({ isAllowed, redirectTo, children }) {
  if(!isAllowed) {
    return <Navigate to={ redirectTo } />
  }

return children ? children : <Outlet />
}

export default ProtectRoute