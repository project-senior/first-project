import ReactPlayer from "react-player"
import axios from "axios";
import React  from "react";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
export const Home = () => {
  

   
  
  // <Image  cloudName='dhgzyelo6' public_id = public_id />
  
  return (
    <div className="home">
      <div className="sign">
        <span className="fast-flicker">Wel</span>COME-
        <span className="flicker">TO N</span>FT
      </div>
{/* /////////// */}
<div className="container">

    <div className="screen">
      <div className="youspot">
      <div className="screen__content">
    <ReactPlayer url="https://www.youtube.com/watch?v=8h1UtER31-U"/>
      </div>
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
