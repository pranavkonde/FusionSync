const uri=`mongodb+srv://pranavkonde2020:${process.env.PASSWORD}@cluster0.xo1sq1c.mongodb.net/?retryWrites=true&w=majority`
const mongoose = require('mongoose');
const username  = "TeamMessaging";
mongoose.connect(uri)
    .then(function(){
        console.log("db is live");
    })
    .catch(function(err){
        console.log(err);
        console.log("Internal Server Error");
    })

export module.exports="db"