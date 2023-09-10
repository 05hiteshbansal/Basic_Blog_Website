const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require('lodash')

const homeStartingContent =
  "First Post is a Great Place to explore and connect to new Areas";
const aboutContent =
  "First Post is a powerful app for new-media creators to publish, share, and grow a business around their content. It comes with modern tools to build a website, publish content, send newsletters & offer";
const contactContent =
  `First Post is avilable in every city and Town  
   One can Contact us on - 999999999
   Email - firstPost@gmail.com
  `;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let arr = [];

app.get("/", (req, res) => {
  res.render("home", { sc: homeStartingContent, posts: arr });
});

app.get("/about", (req, res) => {
  res.render("about", { sc: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { sc: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  let p = {
    title: req.body.title,
    blog: req.body.blog,
  };
  arr.push(p);
  res.redirect("/");
});

j=false;

app.get("/post/:b",(req,res)=>{

arr.forEach(element => {
const b1=_.lowerCase(req.params.b) 
const b2=_.lowerCase(element.title)
if(b1===b2){
  res.render("post",{
    name:element.title,
    blogs:element.blog
  })
} 
});




})


app.listen(4444, function () {
  console.log("Server started on port 4444");
});
