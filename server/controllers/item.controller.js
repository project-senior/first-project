
const bcrypt = require("bcrypt")

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS

// selectAll function to select every item on the picture database to manipulated throw the home page 
var selectAll = function (req, res) {
  db.query("SELECT * FROM picture", (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
    
  });
};

// signUp function for the user so he can be access to the website 
var signUp = (req,res)=>{
    // check if we have already that user or not on the NFT database in the user table
    db.query(`SELECT * FROM user where email = "${req.body.email}"`,(err,result)=>{
        if(err){
            throw err
        }else if(result.length === 0){ 
            if(req.body.email.includes("@")&&req.body.password.length>8 &&req.body.password.length<25 && req.body.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)){
                const salt =   bcrypt.genSaltSync()
                const hashedPaswword =  bcrypt.hashSync(req.body.password, salt)
                // insert the user infos into the user table on the NFT database
                db.query(`INSERT INTO user (username , email , password , age , phonenumber , profile_picture) VALUES ("${req.body.username}","${req.body.email}","${hashedPaswword}","${req.body.age}","${req.body.phonenumber}","${req.body.profile_picture}")`,(err,result)=>{
                    if(err){
                        throw err
                    }else{
                        res.send("1 user inserted")
                    }
                })
            }
            else{
                console.log("ghalet")
            }
            
        }
    })
    
    
}

// login function for the user so he can access to the website if he already have an account
var login =(req,res)=>{
    // if he put his email so we check if it exist in the user table or not 
    var checkEmail =  db.query(`SELECT * FROM user where email = "${req.body.emailOrUsername}"`)
    // if he put his username so we check if it exist in the user table or not
    var checkUsername = db.query(`SELECT * FROM user where username = "${req.body.emailOrUsername}"`)
    // if he puts his email and it exist in the user table
    if(checkEmail.length!== 0){
        // select that user 
        db.query(`SELECT * FROM user where email = "${req.body.emailOrUsername}"`,(err,result)=>{
            if(err){
                throw err
            }else{
                // check the password if it match 
                const salt =   bcrypt.genSaltSync()
                const hashedPaswword =  bcrypt.hashSync(req.body.password, salt)
                bcrypt.compareSync(req.body.password,hashedPaswword)
                
        
            }
        })
        // if he puts his username and it exist in the user table
    }else if(checkUsername.length !== 0){
        // select that user 
        db.query(`SELECT * FROM user where username = "${req.body.emailOrUsername}"`,(err,result)=>{
            if(err){
                throw err
            }else{
                // check the password if it match 
                const salt =   bcrypt.genSaltSync()
                const hashedPaswword =  bcrypt.hashSync(req.body.password, salt)
                bcrypt.compareSync(req.body.password,hashedPaswword)
            }
        })
    }
    // if there is no existing username or email in the user table 
    else{
        res.send("Email/username or password is incorrect")
    }
   
}

// add post to to sell product 
var sellProduct=function(req,res){
    
var params=[req.body.upload ,req.body.title , req.body.description   ,req.body.price_bid  ]
console.log(params);
var str="INSERT INTO picture (upload ,title , description   ,price_bid  ) VALUES (?,?,?,?)"
db.query(str,params,(err,result)=>{
    if(err){
        throw(err)
    }else{
        res.send("post submitted")
    }
})
}



module.exports = { selectAll , signUp , login , sellProduct};
