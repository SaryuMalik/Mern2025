const { request } = require("express");

const home = async(req , res) => {
  try {
    res.status(200).send("using controllers")
  } catch (error) {
    res.status(404).send("error")
  }
};


const register = async(req , res) =>{
  try{
    console.log(req.body);
    res.status(200).json({message : request.body })
  }
  catch{
    res.status(404).json("error in registring")
  }
}


module.exports = {home , register}