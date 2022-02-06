import * as React from 'react';
import nftdata from "../nftdata.js";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Marketplace = () => {


  return (
    <div>
     
      <div >
      {nftdata.map((elem, i) => (
       <Card sx={{ maxWidth: 345 }}>
       <CardActionArea>
         <CardMedia
           component="img"
           height="140"
           image={elem.img}
           alt="green iguana"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
           {elem.name}
           </Typography>
           <Typography variant="body2" color="text.secondary">
           {elem.price}
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

