import axios from "axios";
import React , {useState}  from "react";
import { Link } from "react-router-dom";
import { useHistory} from "react-router-dom";
import Swal from 'sweetalert2'

export const Login = () => {
  const [emailOrUsername,setemailOrUsername] = useState("")
  const [passwordLogin,setpasswordLogin] = useState("")
 
  let history=useHistory()

   
  const login = (e)=>{
    e.preventDefault()
    var params = {emailOrUsername:emailOrUsername,passwordLogin:passwordLogin}
    axios.post(`http://127.0.0.1:3000/api/items/login`,params)
    .then(result=>{

      history.push("/profile")
    }).catch(err=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong password !',
        
      })
      console.log(err)
    })
  }


  return (
    <div className="container">

    <div className="screen">

      <div className="screen__content">

        
        <form action="" className="login">
          <div className="login__field">
          <h3 className="logg">Login</h3>
            <i className="login__icon fas fa-user"></i>
            <input onChange={(e) => { setemailOrUsername(e.target.value) }} type="text" className="login__input" placeholder="User name / Email"/>
          </div>
   
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input onChange={(e) => { setpasswordLogin(e.target.value) }} type="password" className="login__input" placeholder="Password"/>
          </div>
         
          <div>
            <button onClick={login} className="button login__submit">
              
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </div>
         				
          
          <Link to="/Signup"><button className="button login__submit" >
          <span className="button__text">Create Account</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>	</Link>	
        </form>
        {/* <img className="helloo" src="https://i.pinimg.com/564x/7c/39/b9/7c39b9320f08e7b1d2f101d65191d6fe.jpg"></img> */}

      </div>



      <div className="screen__background">

        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>		
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>

  );
};
