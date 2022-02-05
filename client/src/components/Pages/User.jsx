

import nftdata from "../nftdata.js";

export const User = () => {
 

  return (
    <div className="carta">
      {nftdata.map((elem, i) => (
        <div class="news-card">
          <a href="#" class="news-card__card-link"></a>
          <img src={elem.img} />
          <div class="news-card__text-wrapper">
            <h6>{elem.name}</h6>
            <div class="news-card__post-date">
              {" "}
              <h6>{elem.price}</h6>
            </div>
            <div class="news-card__details-wrapper">
              <p>{elem.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
