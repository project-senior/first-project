import { Image } from "cloudinary-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'


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
        Swal.fire(
          'your nft created successfully!',
          'You clicked the button!',
          'success'
        )
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
    Swal.fire(
      'your nft deleted successfully!',
      'You clicked the button!',
      'success'
    )
    axios
      .delete(`http://127.0.0.1:3000/api/items/deleteNft/${title}`)
      .then(() => {
        
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
            type="file"
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
          
              <input className="ll"
                type="text" placeholder="Nft Name"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
              <div className="price" ></div>
              <input className="ll"
                type="number" placeholder="Price"
                value={price_bid}
                onChange={(e) => {
                  setprice_bid(e.target.value);
                }}
              />
            
            <div className="cut"></div>
            <label for="firstname" className="placeholder" >
              
            </label>
          
            <input className="mm"
              type="text" placeholder="Nft description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <div className="cut"></div>
            <label for="lastname" className="placeholder">
              
            </label>
         
            <input
              className="input-profile"
              type="file"
              name="upload"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <div className="cut cut-short"></div>
            <label for="email" className="placeholder">
              
            </label>
          
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
        <h1>Bio</h1>
        <div className="status">the user dosn't write anything.</div>
        <input className="bioinp" type="text" name="bi"></input>
        
        <button className="editbio">Edit</button>
      </div>
    </div>
  );
};
