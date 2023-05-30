import { Link, useNavigate, useParams } from "react-router-dom"

const UserPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleClick = () => {
    navigate('/home')
  }

  return <>
    <h1>{`User ${id} Detail Page`}</h1>
    <Link to='/users'>{'< Back to users'}</Link>
    <button onClick={handleClick}>{'< Back to home'}</button>
  </>
}

export default UserPage