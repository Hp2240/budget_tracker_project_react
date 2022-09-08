import { useState } from 'react'
import { SignUpUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
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
            placeholder="User Name"
            type="userName"
            name="userName"
            id="userName"
          />
          <label htmlFor="userName">User Name</label>
        </div>
        <div className="input-box">
          <input placeholder="Email" type="email" name="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-box">
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="password">Password</label>
        </div>
      </form>
    </div>
  )
}

export default SignUp
