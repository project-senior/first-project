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
      <form>
        <div className="form"> 
        <div className="insidef">
          <div className="title">Welcome</div>
          <div className="subtitle">Create your nft</div>
          <div className="input-container ic1">
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
            <input
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
          <button onClick={uploadimage}>Submit</button>
          </div>
        </div>
      </form>
      <div className="rrr">
        {post.map((elem, i) => (
          <div className="contai" key={i}>
            <div className="car">
              <div className="imgBx">
                <img
                  src={elem.upload}
                  cloudname="dhgzyelo6"
                  public_id={elem.upload}
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
