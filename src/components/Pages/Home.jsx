// import React from "react";
import axios from "axios";
import React , {useState}  from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [emailOrUsername,setemailOrUsername] = useState("")
  const [passwordLogin,setpasswordLogin] = useState("")

  const login = (e)=>{
    e.preventDefault()
    var params = {emailOrUsername:emailOrUsername,passwordLogin:passwordLogin}
    axios.post(`/api/items/login`,params)
    .then(result=>{
      console.log(result)
    }).catch(err=>{
      console.log(err)
    })

  }
  // <Image  cloudName='dhgzyelo6' public_id = public_id />
  
  return (
    <div className="home">
      <div className="sign">
        <span className="fast-flicker">Wel</span>COM-
        <span className="flicker">TO N</span>FT
      </div>
{/* /////////// */}
<div className="container">

    <div className="screen">

      <div className="screen__content">

        <form action="" className="login">
          <div className="login__field">
          <h4 className="logg">login</h4>
            <i className="login__icon fas fa-user"></i>
            <input onChange={(e) => { setemailOrUsername(e.target.value) }} type="text" className="login__input" placeholder="User name / Email"/>
          </div>
   
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input onChange={(e) => { setpasswordLogin(e.target.value) }} type="password" className="login__input" placeholder="Password"/>
          </div>
         

          <button onClick={login} className="button login__submit">
            <span className="button__text">Log In Now</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>				
          
          <Link to="/Signup"><button className="button login__submit" >
          <span className="button__text">Create Account</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>	</Link>	
        </form>
        <h1 id="helloo">Register now !</h1>
      </div>
      



      <div className="screen__background">

        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>		
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>

      {/* ////////// */}
     
      <div className="container-fluid p-0">
        <div className="footer ">
          <p className="main-title">Shortly</p>

          <div className="title-wrap">
            <p className="title">Features</p>
            <p className="sub-title">Link Shortening</p>
            <p className="sub-title">Branded Links</p>
            <p className="sub-title">Support</p>
          </div>
          <div className="title-wrap">
            <p className="title">Resources</p>
            <p className="sub-title">Blog</p>
            <p className="sub-title">Developers</p>
            <p className="sub-title">Analytics</p>
          </div>
          <div className="title-wrap">
            <p className="title">Company</p>
            <p className="sub-title">About</p>
            <p className="sub-title">Our Team</p>
            <p className="sub-title">Careers</p>
            <p className="sub-title">Contact</p>
          </div>
        </div>
        <p id="description">What is NFT art crypto?
        From banking to NFT art collecting
        
        NFTs, or non-fungible tokens, 
        are noninterchangeable digital assets stored on a blockchain. 
        They usually take the form of a picture, video, or audio file 
        in a digital format. NFTs can be sold, traded, or leased like 
        any real-world asset.</p>
      </div>
      {/* /// carousel /// */}
    </div>
  );
};
