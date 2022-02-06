import React from "react";

export const Signup = () => {
    return (
    <div className="ins">
      <form action="" class="form">
    <h1 class="form__title">Sign Up</h1>
    <div class="form__group">
      <label >Username :</label>
      <input type="text" name="username"  placeholder="Your username" />

      <label >Email :</label>
      <input type="text" name="email"  placeholder="Your email" />

      <label >Password :</label>
      <input type="password" name="password" placeholder="Password"/>

      <label >Age :</label>
      <input type="number" name="age"  placeholder="Your age" />

      <label >Phone number :</label>
      <input type="number" name="phonenumber :"  placeholder="Your phonenumber :" />

      <label >Profile Picture :</label>
      <input type="file" name="profile_picture" onChange={(e) => { setImage(e.target.files[0]) }} />
            
              
    </div>
    
    
    <button class="form__button">Sign Up</button>
  </form>
    </div>
    );
  };