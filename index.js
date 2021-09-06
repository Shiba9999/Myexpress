const express=require("express");
const path=require("path")
const app=express();
const exphbs=require("express-handlebars")
const logger=require("./middleware/logger")
const members=require("./Members")

 
app.use(logger);


//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//homepage route
app.get("/",(req,res)=>res.render("index",{
    title:"Member App",
    members
}))

//Handlebars Middlewares
app.engine('handlebars', exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

//get req
// app.get("/",function(req,res){
//     //   res.send("Hello world")
//       res.sendFile(path.join(__dirname,'public','index.html'))
// })

// set static folder
app.use(express.static(path.join(__dirname,"public")));  

//members api Routes
app.use("/api/members",require("./routes/api/members"))

const PORT=process.env.PORT ||  5000;

app.listen(PORT,()=>console.log(`server started on port${PORT} `));
