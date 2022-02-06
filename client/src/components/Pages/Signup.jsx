import React from "react";

export const Signup = () => {
    return (
    <div className="ins">
      <form action="" class="form">
    <h1 class="form__title">Sign Up</h1>
    <div class="form__group">
      <label >Username :</label>
      <input className="login__input" type="text" name="username"  placeholder="Your username" />

      <p >Email :</p>

      <input className="login__input" type="text" name="email"  placeholder="Your email" />

      <p >Password :</p>

      <input className="login__input" type="password" name="password" placeholder="Password"/>

      <p >Age :</p>

      <input className="login__input" type="number" name="age"  placeholder="Your age" />

      <p >Phone number :</p>

      <input className="login__input" type="number" name="phonenumber :"  placeholder="Your phonenumber :" />

      <p >Profile Picture :</p>
      
      <input className="login__input" type="file" name="profile_picture" onChange={(e) => { setImage(e.target.files[0]) }} />
            
              
    </div>
    
    <button id="button" class="form__button">Sign Up</button>
  </form>
    </div>
    );
  };