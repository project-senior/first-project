
import nftdata from "../nftdata.js";
import { Image } from "cloudinary-react";
import React, { useState } from "react";

export const Marketplace = () => {
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
        console.log(response);
        //post
        axios.post("/api/items/sellProduct", {
          upload: response.data.public_id,
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

  return (
    <div>
      <form>
        <div className="form">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
          <div className="input-container ic1">
            {/* <input name="username"  type="text" />
            <input name="email"  type="text" />
            <input name="password"  type="text" />
            <input name="age"  type="text" />
            <input name="phonenumber"  type="text" /> */}
             <input
              type="text"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
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
      </form>
      <div className="carta">
      {nftdata.map((elem, i) => (
        <div className="news-card" key={i} >
          <a href="#" className="news-card__card-link"></a>
          <img src={elem.img} />
          <div className="news-card__text-wrapper">
            <h6>{elem.name}</h6>
            <div className="news-card__post-date">
              {" "}
              <h6>{elem.price}</h6>
            </div>
            <div className="news-card__details-wrapper">
              <p>{elem.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
};
