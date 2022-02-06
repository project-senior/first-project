import { Image } from "cloudinary-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
export const Profile = () => {
  //// testing cloudinary
  const [image, setImage] = useState(null);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  // const [price_sell,setprice_sell]=useState("")
  const [price_bid, setprice_bid] = useState("");
  // const [domain,setdomain]=useState("")
  // const [sponsoring,setsponsoring]=useState("")

  const uploadimage = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", image);
    form.append("upload_preset", "bpnhlkro");
    //post to cloudinary api
    axios
      .post("https://api.cloudinary.com/v1_1/dhgzyelo6/image/upload", form)
      .then((response) => {
        // console.log(response);
        //post
        axios.post("http://127.0.0.1:3000/api/items/sellProduct", {
          upload: response.data.secure_url,
          title: title,
          description: description,
          // price_sell:price_sell,
          price_bid: price_bid,
          // Domain_name:domain,
          // sponsoring:sponsoring
        });
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [post, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/items/fetch")
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="vvv">
    <div className="picture_profile">
       
    </div>
      <form>
        <div className="form"> 
        <div className="design">
          <img id="mypic" src="https://nftb.mypinata.cloud/ipfs/QmatG2osoY93XFx51dLRDja4TuBi1bCxD4ABikGdJ9TQ7V"></img>
        </div>
        <div>
           <h1 >Wukong jhon </h1>
           
        </div>
        <div>
        Fans<h1>8.579</h1> 
        <button className="follow">Follow</button>
        
        </div>


        </div>
        <div className="insidef">
        
          <div className="title">Welcome</div>
          <div className="subtitle">Create your nft</div>
          <div className="input-container ic1">
          <div className="kk">
            <input
              type="text"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <input 
              type="text"
              value={price_bid}
              onChange={(e) => {
                setprice_bid(e.target.value);
              }}
            />
            </div>
            <div className="cut"></div>
            <label for="firstname" className="placeholder">
              Nft Name
            </label>
          </div>
          <div className="input-container ic2">
            <input
              type="text"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <div className="cut"></div>
            <label for="lastname" className="placeholder">
              Nft description
            </label>
          </div>
          <div className="input-container ic2">
            <input className=""
              type="file"
              name="upload"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <div className="cut cut-short"></div>
            <label for="email" className="placeholder">
              Nft Image
            </label>
          </div>
          <button className="upload" onClick={uploadimage}>Upload</button>
          
        </div>
      </form>
      <div class="scroll">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when a
      n unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of 
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum. It is a long 
      established fact that a reader will be distracted by the readable content of a page
      when looking at its layout. The point of using Lorem Ipsum is that it has a 
      more-or-less normal distribution of letters, as opposed to using 'Content here, 
      content here', making it look like readable English. Many desktop publishing packages
      and web page editors now use Lorem Ipsum as their default model text, and a search 
      for 'lorem ipsum' will uncover many web sites still in their infancy.
    </div>
      <div className="rrr">
        {post.map((elem, i) => (
          <div className="contai" key={i}>
            <div className="car">
              <div className="imgBx">
                <img
                  src={elem.upload}
                  cloudname="dhgzyelo6"
                  // public_id={elem.upload}
                />
              </div>
              <div className="content">
                <h5>{elem.title}</h5>
                <h5>{elem.price_bid}</h5>
                <p>{elem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
