const SignIn = () => {
  return (
    <div className="sign-in">
      <form className="user-container">
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

export default SignIn
