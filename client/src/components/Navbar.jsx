import { Link } from 'react-router-dom'
import img from '../image/logo2.png'

const Navbar = ({ authenticated, user, handleSignOut }) => {
  let signedIn
  if (user) {
    signedIn = (
      <nav>
        <h5>Welcome {user.email}!</h5>
        <Link to="/accounts/:id">My Account</Link>
        <Link onClick={handleSignOut} to="/">Sign Out</Link>
      </nav>
    )
  }

  let notSignedIn = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )
  return (
    <header>
      <Link to="/">
        <img className="logo" scr={img} />
      </Link>
      {authenticated && user ? signedIn : notSignedIn}
    </header>
  )
}

export default Navbar