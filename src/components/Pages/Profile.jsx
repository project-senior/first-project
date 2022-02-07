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
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function deletePost(title) {
    axios
      .delete(`http://127.0.0.1:3000/api/items/deleteNft/${title}`)
      .then(() => {
        console.log("NFT deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // const deletePost = (id) => {

  //     // DELETE request using axios inside useEffect React hook
  //     axios
  //       .delete(`http://127.0.0.1:3000/api/items/deleteNft/${id}`)
  //       .then(() => console.log("Delete successful"));

  //     // empty dependency array means this effect will only run once (like componentDidMount in classes)

  // };
  return (
    <div className="vvv">
      <div className="picture_profile"></div>
      <form>
        <div className="form">
          <div className="design">
            <img
              id="mypic"
              src="https://nftb.mypinata.cloud/ipfs/QmatG2osoY93XFx51dLRDja4TuBi1bCxD4ABikGdJ9TQ7V"
            ></img>
          </div>
          <div>
            <h1>Wukong jhon </h1>
          </div>
          <div>
            Fans<h1>8.579</h1>
          </div>
          <div>
            <button className="follow">Follow</button>
            <button className="foldit">Edit </button>
          </div>
          <div className="posts">
            Posts
            <h1>29</h1>
          </div>
          <div className="following">
            following
            <h1>127</h1>
          </div>
        </div>

        <div className="insidef">
          <div className="title">Welcome</div>
          <div className="subtitle">Create your nft</div>
          
            
              <label className="label-profile" >Title :</label>
              <input
              className="input-profile"
              placeholder="title"
                type="text"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
              <label className="label-profile" >Price for bid :</label>
              <input
              className="input-profile"
              placeholder="price"
                type="number"
                value={price_bid}
                onChange={(e) => {
                  setprice_bid(e.target.value);
                }}
              />
            
            
          <label className="label-profile">Description</label>
          
            <input
            className="input-profile"
            placeholder="description"
              type="text"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
           
          
            <label className="label-profile">NFT :</label>
            <input
              className="input-profile"
              type="file"
              name="upload"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
           
          <button className="upload" onClick={uploadimage}>
            Upload
          </button>
        </div>
      </form>
      <div class="scroll">
        <h1>My NFTs</h1>

        <div className="rrr">
          {post.map((elem, i) => (
            <div class="card" key={i}>
              <div class="imgBox">
                <img
                  src={elem.upload}
                  cloudname="dhgzyelo6"
                  // public_id={elem.upload}
                  alt="mouse corsair"
                  class="mouse"
                />
              </div>

              <div class="contentBox">
                <h3>Mouse Corsair M65</h3>
                <p>{elem.description}</p>
                <h2 class="price">{elem.price_bid} €</h2>
                <button class="buy" onClick={() => deletePost(elem.title)}>
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bio">
        <h1 className="bio-title" >Bio</h1> 
        <label className="bio-label" >Your bio :</label>
        <textarea name="bi" className="bio-input" cols="30" rows="10"></textarea>
        <button className="editbio">Edit</button>
      </div>
    </div>
  );
};
