import * as React from "react";
import nftdata from "../nftdata.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const Marketplace = () => {
  const [nftdata, setPosts] = useState([]);
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

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = nftdata.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(nftdata);
    }
  };
  const [searchInput, setSearchInput] = useState("");

  const [filteredResults, setFilteredResults] = useState([]);

  return (
    <div className="bodymar">
      <div className="sign">
        <div className="tagmarket">
          <span className="fast-flicker">Market</span> -
          <span className="flicker">Place</span>
        </div>
      </div>

      <div>
        <div className="marsell">
          <div>
                   <input id="sear"
              icon="search"
              placeholder="Search..."
              onChange={(e) => searchItems(e.target.value)}
            />

            <div className="rrr">
              {searchInput.length > 1
                ? filteredResults.map((elem, i) => {
                    return (
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
                          <h3>{elem.title}</h3>
                          <p>{elem.description}</p>
                          <h2 class="price">{elem.price_bid} €</h2>
                          
                        </div>
                        
                      </div>
                    );
                  })
                : nftdata.map((elem, i) => (
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
                        <h3>{elem.title}</h3>
                        <p>{elem.description}</p>
                        <h2 class="price">{elem.price_bid} Pts</h2>
                        <button class="buy">Buy</button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
