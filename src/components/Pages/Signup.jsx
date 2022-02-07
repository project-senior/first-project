import axios from "axios";
import React, { useState } from "react";
import Swal from 'sweetalert2'
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
        // const navigate=useNavigate()
        e.preventDefault()
        const form = new FormData()
        form.append("file",profile_picture)
        form.append("upload_preset","bpnhlkro")
        axios.post("https://api.cloudinary.com/v1_1/dhgzyelo6/image/upload",form)
        .then(response=>{
          ///// popup after
          let timerInterval
Swal.fire({
  title: 'Welcome ',
  html: 'WELCOME in  OUR WEBSITES <b></b> :))',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('WElCOME TO MARKET PLACE')
  }
})

          console.log(response,"ress")
          
          axios.post("http://127.0.0.1:3000/api/items/signup",{username:username,email:email,password:password,age:age,phonenumber:phonenumber,profile_picture:response.data.secure_url})
          .then(result=>{
            if(result.data === "1 user inserted"){
              
              history.push("/marketplace")
                }
            })
        }).catch(err=>{
          
            console.log(err,Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'password must constain symbol!',
            footer: '<a href=""check inputs</a>'
          }))
        })
    }
    return (
    <div className="ins">
      <form action="" className="form_signup">
    
    <div class="signup">
				<form>
				<div className="signs">	
					<label >Username :</label>
      <input className="signnr" onChange={(e) => { setusername(e.target.value) }} type="text" name="username"  placeholder="Your username" />
      <label >Email :</label>
      <input className="signnr" onChange={(e) => { setemail(e.target.value) }} type="email" name="email"  placeholder="Your email" />
      <label >Password :</label>
      <input className="signnr" onChange={(e) => { setpassword(e.target.value) }} type="password" name="password" placeholder="Password"/>
      <label >Age :</label>
      <input className="signnr" onChange={(e) => { setage(e.target.value) }} type="number" name="age"  placeholder="Your age" />
      <label >Phone number :</label>
      <input className="signnr" onChange={(e) => { setphonenumber(e.target.value) }} type="number" name="phonenumber :"  placeholder="Your phonenumber :" />
      <label >Profile Picture :</label>
      <input className="signnr" type="file" name="profile_picture" onChange={(e) => { setprofile_picture(e.target.files[0]) }} />
					<button onClick={signup} class="form__button" >Sign Up</button>
          </div>
				</form>
			</div>

   
  </form>
    </div>
    );
  };
  //{ suc ? <Link to="/"></Link> : <Link to="/signup"></Link> }

  
			