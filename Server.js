const express = require('express');
const mongoose = require('mongoose');
const bodyPraser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv')
const app = express();
const PORT =process.env.PORT|| 5000;
routes = require('./Routes/Emproute');


const enquirySchema=require('./Routes/Emproute')
dotenv.config();


mongoose.connect('mongodb://0.0.0.0:27017/myenqform')
.then((x)=>{
    console.log(`Connected to Mongo Database:"${x.connections[0].name}"`)
  })
  .catch((err)=>{
    console.log("Connection Error",err)
  })

  app.use('/', routes);
  app.use(bodyPraser.json())
  app.use(bodyPraser.urlencoded({
      extended:true
  }))

  app.use(cors())
  app.use('/enq',enquirySchema)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})