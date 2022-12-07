const express=require('express');
const Hellocontroller=require('../controllers/hellocontroller')

const router=express.Router();

router.get("/hello.get",Hellocontroller.hello)
router.post("/hello.post",Hellocontroller.hello);

module.exports=router;