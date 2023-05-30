import { Link } from "react-router-dom"

const UsersPage = () => (
  <>
    <h1>Users Page</h1>
    <nav>
      <ul>
        <li><Link to='/user/1'>User #1</Link></li>
        <li><Link to='/user/2'>User #2</Link></li>
        <li><Link to='/user/3'>User #3</Link></li>
      </ul>
    </nav>
    <Link to='/home'>{'< Back to home'}</Link>
  </>
)

export default UsersPage