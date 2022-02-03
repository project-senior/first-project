import React,{useState} from "react";
import axios from "axios";
import {Image} from "cloudinary-react"

export const User = () => {

  //// testing cloudinary
  const [image,setImage]=useState(null)
  const [title,settitle]=useState("")
  const [description,setdescription]=useState("")
  const [price_sell,setprice_sell]=useState("")
  const [price_bid,setprice_bid]=useState("")
  const [domain,setdomain]=useState("")
  const [sponsoring,setsponsoring]=useState("")
  
  const uploadimage=(e)=>{
    e.preventDefault()
    const form =new FormData()
    form.append("file",image)
    form.append("upload_preset","bpnhlkro")
    //post to cloudinary api
    axios.post("https://api.cloudinary.com/v1_1/dhgzyelo6/image/upload",form).then((response)=>{
      console.log(response);
      //post 
      axios.post("/api/items/sellProduct",{
        upload:response.data.public_id,
        title:title,
        description:description,
        price_sell:price_sell,
        price_bid:price_bid,
        Domain_name:domain,
        sponsoring:sponsoring
    })}).then(({data})=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })
   
   
  }
  // <Image  cloudName='dhgzyelo6' public_id = public_id />

  return (
    <div>
      <h1>User</h1>
      
        <form >
          <div >
            <label >upload</label>
            <input type="file" name="upload"
            onChange={(e)=>{setImage(e.target.files[0])}}
            
            />
          </div>
          <div >
            <label >title</label>
            <input  type="text" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
          </div>
          <div >
            <label >description</label>
            <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
          </div>
          
          <div >
            <label  >price_sell</label>
            <input   type="text" name="price_sell"   value={price_sell} onChange={(e)=>{setprice_sell(e.target.value)}}/>
          </div>
         
          
          <div >
            <label >price_bid</label>
            <input  type="text" name="price_bid" value={price_bid} onChange={(e)=>{setprice_bid(e.target.value)}}/>
          </div>
          <div >
            <label >domain</label>
            <input  type="text" name="domain" value={domain} onChange={(e)=>{setdomain(e.target.value)}}/>
          </div>
          <div >
            <label >sponsoring</label>
            <input  type="text" name="sponsoring" value={sponsoring} onChange={(e)=>{setsponsoring(e.target.value)}} />
          </div>
          
          <button onClick={uploadimage}>Submit</button>
        </form>
    
    </div>
  );
};
