import React from "react";
import nftdata from "../nftdata.js";


export const Marketplace = () => {


  return (
    <div>
     
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
