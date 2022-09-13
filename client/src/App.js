import './styles/App.css'
import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import { checkSession } from './services/Auth'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { CheckSession } from './services/Auth'
import SignIn from './pages/SignIn'
import MyAccount from './pages/MyAccount'
import img from './image/logo2.png'
import { Link } from 'react-router-dom'
import Transaction from './pages/Transaction'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  const handleSignOut = () => {
    setUser({})
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    const id = localStorage.getItem('id')
    const email = localStorage.getItem('email')
    setUser({
      user,
      id,
      email
    })
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  console.log(user.id, 'this is user id')

  return (
    <div className="App">
      <Navbar
        authenticated={authenticated}
        user={user}
        handleSignOut={handleSignOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={
              <SignIn
                user={user}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/accounts/:userId"
            element={<MyAccount user={user} authenticated={authenticated} />}
          />
          <Route
            path="/transactions/:id"
            element={<Transaction user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
