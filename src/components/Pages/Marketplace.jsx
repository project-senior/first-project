import * as React from 'react';
import nftdata from "../nftdata.js";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Marketplace = () => {


  return (
    <div id='bodymar'>
    <div className="sign">
    <div className='tagmarket'>
        <span className="fast-flicker">Market</span> -
        <span className="flicker">Place</span>
        </div>
      </div>
     
      <div >
      <div className='marsell'>
      <div nesmar>
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
    </div>
    </div>
   
  );
};

