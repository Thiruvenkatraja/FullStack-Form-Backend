const mongoose = require("mongoose");
const { Schema } = mongoose;

let enquirySchema = new Schema({
    candidatename: {
        type:String
    },
    mobile: {
        type:Number
    },
    startdate: {
        type:String
    }, 
    followupdate: {
        type:String
    },
    technology: {
        type:String
    },
    resource:{
        type:String
    },
    status:{
        type:String
    },
    feedback:{
        type:String
    }
},
   
    {
        collection:"enquiry"
    }
)

module.exports= mongoose.model('Employee',enquirySchema)