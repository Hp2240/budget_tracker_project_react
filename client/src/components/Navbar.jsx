import { Link } from 'react-router-dom'
import img from '../image/logo2.png'

const Navbar = ({ authenticated, user, handleSignOut }) => {
  let signedIn
  if (user) {
    signedIn = (
      <nav>
        {/* <h5>Welcome {user.email}!</h5> */}
        <li><Link to="/accounts/:id">My Account</Link></li>
        <li><Link onClick={handleSignOut} to="/">Sign Out</Link></li>
      </nav>
    )
  }

  let notSignedIn = (
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/signin">Sign In</Link></li>
    </nav>
  )
  return (
    <div>
      <Link to="/">
        <img className="logo" src={img} width="100" height="50"/>
      </Link>
      <div className="nav">
        <div className="menu">
          {authenticated && user ? signedIn : notSignedIn}
        </div>
      </div>
    </div>
  )
}

export default Navbar