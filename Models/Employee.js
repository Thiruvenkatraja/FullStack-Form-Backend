const mongoose = require("mongoose");
const { Schema } = mongoose;

let enquirySchema = new Schema({
    candidatename: {
        type:String
    },
    email: {
        type:String
    },
    mobile: {
        type:Number
    },
    technology: {
        type:String
    },
    startdate: {
        type:String
    }, 
    followupdate: {
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