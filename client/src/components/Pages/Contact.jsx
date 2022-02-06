import React from "react";
import emailjs from "emailjs-com"



export const Contact = () => {
  const Commit=(e)=>{
    e.preventDefault();
  
    emailjs.sendForm('service_2b9z6jn', 'template_w5augwu', e.target, 'user_nq77ZAbqLCFN6SjvoSVCt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={Commit}>
          <div id="submit_contact">
              <div>
                <h6 id="tt">name:</h6>
                <input className="contact" type="text" placeholder="Name" name="name"/>
              </div>
              <div>
                <h6 id="tt">Email:</h6>
                <input className="contact" type="email" placeholder="Email Adress" name="email"/>
              </div>
              
              <div>
                <p id="tt">Your message:</p>
                <textarea className="contact"  cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
              </div>
              <div>
                <input  id="button" type="submit" className="button message" value="Send Message"/>
              </div>
          </div>
           
        </form>
      
      </div>
    </div>
  );
};
