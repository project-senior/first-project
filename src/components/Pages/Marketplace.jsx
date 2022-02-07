import * as React from "react";
import nftdata from "../nftdata.js";
import { useState,useEffect } from "react";
import axios from "axios"
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
    <div>
      <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />

      <div>
        {searchInput.length > 1
          ? filteredResults.map((elem) => {
              return (
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                  <img
                  src={elem.upload}
                  cloudname="dhgzyelo6"
                  // public_id={elem.upload}
                  alt="mouse corsair"
                  class="mouse"
                />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price_bid}
                        {elem.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })
          : nftdata.map((elem, i) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <img
                  src={elem.upload}
                  cloudname="dhgzyelo6"
                  // public_id={elem.upload}
                  alt="mouse corsair"
                  class="mouse"
                />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {elem.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {elem.price_bid}
                        {elem.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
      </div>
    </div>
  );
};
