import { useEffect, useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [userFound, setUserFound] = useState(false)

  let navigate = useNavigate()

  // let { id } = useParams()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(form)
    setForm({
      email: '',
      password: ''
    })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    setUserFound(true)
    // setUserId(props.user.id)
    // console.log(userId, 'this is userId state')
  }

  useEffect(() => {
    if (userFound) {
      let id = props.user.id
      console.log(id)
      navigate(`/accounts/${id}`)
    }
  }, [userFound])
  return (
    <div className="sign-in">
      <h2>Login</h2>
      <form className="user-container" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            onChange={handleChange}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-box">
          <input
            onChange={handleChange}
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          className="form-button"
          disabled={!form.email || !form.password}
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
