import { Link } from 'react-router-dom'

const Navbar = ({ authenticated, user, handleSignOut }) => {
  let signedIn
  if (user) {
    signedIn = (
      <nav>
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
      {authenticated && user ? signedIn : notSignedIn}
    </header>
  )
}

export default Navbar