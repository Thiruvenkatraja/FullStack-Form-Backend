const mongoose = require ('mongoose');
const express = require('express');

const router=express.Router();
let enquirySchema= require('../Models/Employee')

router.route("/EnquiryData").post((req,res,next)=>{
    enquirySchema.create(req.body,(error,data)=>{
              if(error){
                return next(error)
              }else{
                console.log(data)
              }

    })
})

router.route("/").get((req,res,)=>{
    enquirySchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }

    })
})

router.put('/update-enqdata/:id', async function(req, res, next) {
    console.log(req.body,req.params.id)
 try{
   
   let user = await enquirySchema.findByIdAndUpdate(req.params.id,req.body)

   res.json({
     success:true,
     data:user
   });
 }

 catch(e){
   res.json({
     success:false,
     err:e
   });
 }
});

// router.route('/update-enqdata/:id').put((req,res,next) =>{
//     enquirySchema.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set: req.body,
//         },
//         (error,data) => {
//         if(error){
//             return next(error)
//             console.log(error)
//         } else {
//             res.json(data)
//             console.log('Employee Data updates Successfully')
//         }
//     },
//     )
// })

// GET Single Empdata

router.route('/edit-enqdata/:id').get((req,res)=>{
    enquirySchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route("/delete-enqdata/:id").delete((req,res,next)=>{
    enquirySchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data,
            })
        }
    })
})
module.exports=router