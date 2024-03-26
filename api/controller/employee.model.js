const mongoose=require('mongoose');

const employee = require('../model/employeeModel');
 
//code for post request for user
exports.create_employee=async(req,res,next)=>{
    try{
        const employeeObj=new employee({
            _id:new mongoose.Types.ObjectId(),
            empId:req.body.empId,
            empName:req.body.empName,
            empPost:req.body.empPost,
            empGender:req.body.empGender,
            empSalary:req.body.empSalary,
            empAddress:req.body.empAddress,
   
        });
       
    const data=await employeeObj.save()
       
        res.status(200).json({
            code:1,
            msg:"This is single post request for employee",
            createdemployee:data,
            error:null
           
        });
 
    }catch(err){
        res.status(200).json({
            code:0,
            msg:"Something went wrong",
            createdemployee:null,
            error:err
           
        });
 
    }
 
}
//code for getting user list
exports.get_employee=async(req,res,next)=>{
    try{
        const data=await employee.find();
        if(data){
            res.status(200).json({
            code:1,
            msg:"This is get request for employee",
            data:data,
            error:null
            });
        }else{
            res.status(200).json({
                code:1,
                msg:"No data available",
                data:null,
                error:null
            });
 
        }
 
    }catch(error){
        res.status(500).json({
            code:0,
            msg:"something went wrong",
            data:null,
            error:error
        });
       
    }
}
 
// code for getting single user
exports.get_employee_ById = async (req,res,next)=>{
    try{
                const data = await User.findById(req.params.employeeId);
                if(data){
                   res.status(200).json({
                    code:1,
                    message:"This is simple get request for single employee",
                    data:data,
                    error:null
                   });
                }else{
                    res.status(200).json({
                        code:1,
                        message:"no employee is available with given id",
                        data:null,
                        error:null
                    });
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
//code for update single user
exports.update_employee=async(req,res,next)=>{
    try{
        const data=await employee.findByIdAndUpdate(req.params.employeeId,req.body,{new:true,runValidator:true})
        res.status(200).json({
            code:1,
            message:"This is simple put request for single employee",
            data:data,
            error:null
 
        })
    }catch(error){
        res.status(500).json({
            code:0,
            message:"something went wrong",
            data:null,
            error:error
 
    })
}
}
//code for deleting user
exports.delete_employee=async (req,res,next)=>{
    try{
       const data= await employee.findByIdAndDelete(req.params.employeeId);
       if(!data){
        res.status(404).json({
            code:1,
            message:"no employee found",
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
            message:"something went wrong",
            data:data,
            error:error
        })
 
    }
}