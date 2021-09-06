const moment=require("moment")
//middleware function we pass the next to move next middleware
//every time we make a req in postman/browser this middleware gonna run
const logger=(req,res,next)=>{
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}:${moment().format()}`);
    next();
}
//init middleware
module.exports=logger