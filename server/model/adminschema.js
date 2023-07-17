const  mongoose  = require("mongoose");

const feedback = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    }
})

const feedback_list = new mongoose.model("feedback_lisst", feedback);

module.exports = feedback_list;