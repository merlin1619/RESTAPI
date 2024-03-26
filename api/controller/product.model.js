const mongoose = require('mongoose');
const Product=require("../model/productModel");
 
//code for post request
 
exports.create_product=async(req,res,next)=>{
    try
    {
        const productObj=new Product({
            _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            price:req.body.price
        });
        // await productObj.save().then((result)=>{console.log(result)});
        const data=await productObj.save()
        res.status(200).json({
            code:1,
            msg:"this is simple post request for product",
            createdProduct:data,
            error:null
           
        });
    }
    catch(err)
    {
        res.status(200).json({
            code:0,
            msg:"something went wrong",
            createdProduct:null,
            error:err
           
        });
    }
}
 
// code for getting product List
 
exports.get_products=async(req,res,next)=>{
    try{
           const data=await Product.find();
           if(data){
            res.status(200).json({
                code:1,
                msg:"This is simple get request for Product",
                data:data,
                error:null
            });
           }
           else{
            res.status(200).json({
                code:1,
                msg:"No Data Available",
                data:null,
                error:null
            });
           }
    }
    catch(error){
        res.status(500).json({
            code:0,
            msg:"Something Went Wrong",
            data:null,
            error:error
        });
    }
}
 
//code for getting single product
 
exports.get_product_ById=async(req,res,next)=>{
    try{
           const data=await Product.findById(req.params.productId);
           if(data){
            res.status(200).json({
                code:1,
                msg:"This is simple get request for Product",
                data:data,
                error:null
            });
           }
           else{
            res.status(200).json({
                code:1,
                msg:"No Product is Available with given Id",
                data:null,
                error:null
            });
           }
    }
    catch(error){
        res.status(500).json({
            code:0,
            msg:"Something Went Wrong",
            data:null,
            error:error
        });
    }
}
    //code for update single product
exports.update_product = async (req,res,next)=>{
    try{
            const data = await Product.findByIdAndUpdate(req.params.productId,req.body,{new:true,runValidator:true});
            res.status(200).json({
                code:1,
                message:"This is simple put request for single product",
                data:data,
                error:null
            });
    }catch(error){
        res.status(500).json({
            code:0,
            message:"somthing went wrong",
            data:null,
            error:error
        });
    }
}
// code for deleting product
exports.delete_product = async (req,res,next)=>{
    try{
        const data  = await Product.findByIdAndDelete(req.params.productId);
        if(!data){
           res.status(404).json({
            code:1,
            message:"No Product Found",
            data:data,
            error:null
           })
        }else{
            res.status(404).json({
                code:1,
                message:"delete request perform successfully",
                data:data,
                error:null
               })
        }
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Somthing went wrong",
            data:null,
            error:error
           })
    }
}
