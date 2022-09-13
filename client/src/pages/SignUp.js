import { useState } from 'react'
import { SignUpUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    await SignUpUser({
      userName: form.userName,
      email: form.email,
      password: form.password
    })

    setForm({
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }
  return (
    <div className="sign-up">
      <form className="user-container" onSubmit={handleSubmit}>
        <h4>
          We are
          <span> BTTR</span>
        </h4>
        <p>Don't have an account? Sign up here:</p>
        <div className="input-box">
          <input
            onChange={handleChange}
            placeholder="User Name"
            type="userName"
            name="userName"
            id="userName"
          />
          <label htmlFor="userName">User Name</label>
        </div>
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
        <div className="input-box">
          <input
            onChange={handleChange}
            placeholder="confirmPassword"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
          <label htmlFor="confirmPassword">Password</label>
        </div>
        <button
          className="form-button"
          disabled={
            !form.email ||
            (!form.password && form.confirmPassword === form.password)
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp
