const express=require('express');
const router=express.Router();
const employeeModelRequest=require('../controller/employee.model')
 

 
//get request for user
router.get("/",employeeModelRequest.get_employee);
 
 
router.post("/",employeeModelRequest.create_employee);
//get request for single user
router.get("/:employeeId",employeeModelRequest.get_employee_ById);
//put request for single user
router.put("/:employeeId",employeeModelRequest.update_employee);
//delete request for single user
router.delete("/:employeeId",employeeModelRequest.delete_employee);
 
//get request for single user
router.get("/:employeeId",(req,res,next)=>{
    res.status(200).json({
        msg:"This is simple get request for single user"
    });
});
//put request for single user
router.put("/:employeeId",(req,res,next)=>{
    res.status(200).json({
        msg:"This is simple put request for single user"
    });
});
//delete request for single product
router.delete("/:employeeId",(req,res,next)=>{
    res.status(200).json({
        msg:"This is simple delete request for single user"
    });
});
module.exports=router;