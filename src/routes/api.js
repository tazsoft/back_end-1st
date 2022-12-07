const express=require('express');
const hellocontroller=require('../controllers/hellocontroller')

const router=express.Router();

router.get("/hello-get",hellocontroller.hello)
router.post("/hello-post",hellocontroller.hello);

module.exports=router;