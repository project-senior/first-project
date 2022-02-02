import React from "react";

const Login = (props) => (
  <div>
   <label>email: </label>
   <input name="emailOrUsername" type='email'/>
   <label>password: </label>
   <input name="password-log" type='password'/>
  </div>
);

export default Login;
