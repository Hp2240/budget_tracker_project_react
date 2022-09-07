import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signUp">Sign Up</Link>
      <Link to="/signIn">Sign In</Link>
    </nav>
  )
}

export default Navbar