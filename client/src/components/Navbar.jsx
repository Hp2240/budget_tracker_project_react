import { Link } from 'react-router-dom'

const Navbar = ({ authenticated, user, handleSignOut }) => {
  let signedIn
  if (user) {
    signedIn = (
      <nav>
        <h5>Welcome {user.email}!</h5>
        <Link to="/account">My Account</Link>
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
        <img className="logo" src="./img/logo.png" />
      </Link>
      {authenticated && user ? signedIn : notSignedIn}
    </header>
  )
}

export default Navbar