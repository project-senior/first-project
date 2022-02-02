import React from 'react';

const Signup = (props) => (
  <div>
  <label>username: </label> 
  <input name='username' type='text' />
  <label>email: </label> 
  <input name='email' type='email' />
  <label>password: </label> 
  <input name='password' type='password' />
  <label>age: </label> 
  <input name='age' type='date' />
  <label>phone number: </label> 
  <input name='phonenumber' type='phone' />
  <label>choose picture: </label> 
  <input name='profile_picture' type='img' />
    
  </div>
)

export default Signup;