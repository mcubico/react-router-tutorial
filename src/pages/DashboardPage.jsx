import { Link, Outlet } from "react-router-dom"

const DashboardPage = () => (
  <div>
    <h1>Dashboard Page</h1>
    <Link to='welcome'>Say welcome</Link>
    <Link to='goodbye'>Say Goodbye</Link>

    <Outlet />
  </div>
)

export default DashboardPage