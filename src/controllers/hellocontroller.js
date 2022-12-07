exports.hello=(req,res)=>{
    res.status(200).json({"status":"success","data":"Hello this is my first api"})
}