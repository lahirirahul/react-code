const express=require("express");


const app = express();

const setCors = (req,res,next) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();


};

app.use("/reduxThunkDemo/api/v1/countries",setCors,(req,res)=>{
    res.set("Content-Type","application/json");
    const countries = ["India","USA","Australia"];
    res.send(countries);
});
app.use("/reduxThunkDemo/api/v1/states/:country",setCors,(req,res)=>{
    res.set("Content-Type","application/json");
    var states=[];
    if(req.params.country==="USA"){
         states = ["NY","CA","MA","PA"];
    }else if(req.params.country==="India"){
         states = ["WB","MH","DL","MP"];
    }else  if(req.params.country==="Australia"){
        states=["NSW","SA","NT","QLD"];
    }
    res.send(states);
});



app.listen(3001);