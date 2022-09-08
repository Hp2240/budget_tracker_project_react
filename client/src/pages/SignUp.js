import { useDebugValue, useState } from 'react'
import { SignUpUser } from '../services/Auth'

const SignUp = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="sign-up">
      <form className="user-container">
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
