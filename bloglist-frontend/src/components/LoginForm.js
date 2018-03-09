import React from 'react'

const LoginForm=()=>(
<div>
  <h2>kirjaudu</h2>
  <form onSubmit={this.login}>
    <div>
      username
      <input
        type="text"
        name="username"

      />
    </div>
    <div>
      password
      <input
        type="password"
        name="password"
      />
    </div>
    <button type="submit">login</button>
  </form>
</div>
)

export default LoginForm
