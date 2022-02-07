import React from "react";
import { Link } from "react-router-dom";

export const Points = ()=>{
    

    return (

        <div className="container-gift-card">
            
                <h2 className="gift-card-title">Buy points</h2> 
            <div className="gift-card">
            <Link to="/buy">
                <img className="gift-card-img" src="https://res.cloudinary.com/dhgzyelo6/image/upload/v1644177891/xvtufkocpsqu6notagro.png"/>
                </Link> 
                <h3 className="money" > 100$ = 1000pts</h3>
            
            </div>

            <div className="gift-card">
            <Link to="/buy">
                
                <img className="gift-card-img" src="https://res.cloudinary.com/dhgzyelo6/image/upload/v1644177891/xvtufkocpsqu6notagro.png"/>
                </Link>
                <h3 className="money" > 200$ = 2500pts</h3>
             
            </div>

            <div className="gift-card">
            <Link to="/buy">
                
                
                <img className="gift-card-img" src="https://res.cloudinary.com/dhgzyelo6/image/upload/v1644177891/xvtufkocpsqu6notagro.png"/>
                </Link>
                <h3 className="money" >500$ = 7500pts</h3>
             
            </div>

            <div className="gift-card">
            <Link to="/buy">
                
                <img className="gift-card-img" src="https://res.cloudinary.com/dhgzyelo6/image/upload/v1644177891/xvtufkocpsqu6notagro.png"/>
                </Link>
                <h3 className="money" >1000$ = 18000pts</h3> 
             
            </div>
        </div>
        
    )
}