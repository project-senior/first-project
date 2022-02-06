import axios from "axios";
import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useHistory} from "react-router-dom";

export const Signup = () => {
    const [username,setusername] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [age,setage] = useState("")
    const [phonenumber,setphonenumber] = useState("")
    const [profile_picture,setprofile_picture] = useState(null)
// const [suc, setSuc] = useState(null)
let history=useHistory()
    
    const signup =(e)=>{
        const navigate=useNavigate()
        e.preventDefault()
        
        const form = new FormData()
        form.append("file",profile_picture)
        form.append("upload_preset","bpnhlkro")
        axios.post("https://api.cloudinary.com/v1_1/dhgzyelo6/image/upload",form)
        .then(response=>{
            console.log(response,"ress")
            axios.post("/api/items/signup",{username:username,email:email,password:password,age:age,phonenumber:phonenumber,profile_picture:response.data.secure_url})
            .then(result=>{
                if(result.data !== "1 user inserted"){
                    console.log("hhhhh",result.data)
                   return history.send("/")
                }else{
                    
                    return history.send("/")
                }
            })
            
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
    <div className="ins">
      <form action="" class="form">
    <h1 className="form__title">Sign Up</h1>
    <div className="form__group">
      <label >Username :</label>
      <input onChange={(e) => { setusername(e.target.value) }} type="text" name="username"  placeholder="Your username" />

      <label >Email :</label>
      <input onChange={(e) => { setemail(e.target.value) }} type="text" name="email"  placeholder="Your email" />

      <label >Password :</label>
      <input onChange={(e) => { setpassword(e.target.value) }} type="password" name="password" placeholder="Password"/>

      <label >Age :</label>
      <input onChange={(e) => { setage(e.target.value) }} type="number" name="age"  placeholder="Your age" />

      <label >Phone number :</label>
      <input onChange={(e) => { setphonenumber(e.target.value) }} type="number" name="phonenumber :"  placeholder="Your phonenumber :" />

      <label >Profile Picture :</label>
      <input type="file" name="profile_picture" onChange={(e) => { setprofile_picture(e.target.files[0]) }} />
            
              
    </div>
    

    
   <button onClick={signup} class="form__button" >Sign Up</button> 
  </form>
    </div>
    );
  };
  //{ suc ? <Link to="/"></Link> : <Link to="/signup"></Link> }