import { Link, Route, Routes } from "react-router-dom"

const DashboardPage = () => (
  <div>
    <h1>Dashboard Page</h1>
    <Link to='welcome'>Say welcome</Link>

    <Routes>
      <Route path='welcome' element={ <p>Welcome!</p> } />
    </Routes>
  </div>
)

export default DashboardPage