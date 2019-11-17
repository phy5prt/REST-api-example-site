//jshint esversion:6
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));


mongoose.connect("mongodb+srv://phy5prtAdmin:"+process.env.PASSWORD_ATLASDB+"@cluster0-su305.mongodb.net/wikiDB", {useNewUrlParser:true});


const articleSchema={
title: String,
content:String

};
const Article=mongoose.model("Article", articleSchema);

//refactoring to use route
/////////////////////////Requests targetting all articles//////////////
app.route("/articles")
.get(function(req,res){
  Article.find({},function(err,foundArticles){
    if(err){res.send(err + "in get no articles found");}else{
  res.send(foundArticles);
}});
}
)
.post(function(req,res){
    // console.log(req.body.title);
    // console.log(req.body.content);

    const newArticle = new Article(
      {
        title:req.body.title,
        content:req.body.content
      }
    );
    newArticle.save(function(err){
      if(err){
        res.send(err);
      }else{
        res.send("Successfully added a new article.");
      }
    });
  }
)
.delete(function(req,res){
    Article.deleteMany({},function(err){
  if(err){res.send(err);}else{res.send("Successfully deleted all articles");}

  });}


);

/////////////////////////////Requests Targetting ASpecific Article

app.route("/articles/:articleTitle")

.get(function(req, res){

  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (foundArticle) {
      // res.send(foundArticle);
      res.send(foundArticle);
    } else {
      res.send("No articles matching the title: "+req.params.articleTitle+" was found.");
    }
  });
})

.put(function(req,res){

//code to check it exists
Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
  if (!foundArticle) {res.send("No articles matching the title: "+req.params.articleTitle+" was found.");
}else{


  //put code
Article.update(
  //condition
  {
    title:req.params.articleTitle
  },
  //updates
  {
    title:req.body.title,
    content:req.body.content
  },
  //overwrite
  {
    overwrite:true
  },
  //function

    function(err){
      if(err){res.send(err + " this is the error ");}else{res.send("Successfully updated article");}
    }

);



}});
})

.patch(function(req,res){


  //code to check it exists
  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (!foundArticle) {res.send("No articles matching the title: "+req.params.articleTitle+" was found.");
  }else{


  ///patch code
  Article.updateOne(
    {title:req.params.articleTitle},
    {$set: req.body},
    function(err){
      if(err){res.send(err);}else{res.send("Succesfully updated the article ");}

    }
  );

}});
})


.delete(function(req,res){

  //code to check it exists
  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (!foundArticle) {res.send("No articles matching the title: "+req.params.articleTitle+" was found.");
  }else{


Article.deleteOne({title:req.params.articleTitle}, function(err){




if(err){res.send(err);}else{res.send("Successfully deleted");}

});
}});
});









// app.get("/articles",function(req,res){
//   Article.find({},function(err,foundArticles){
//     if(err){res.send(err);}else{
//   res.send(foundArticles);
// }});
// });
//
// app.post("/articles", function(req,res){
//   // console.log(req.body.title);
//   // console.log(req.body.content);
//
//   const newArticle = new Article(
//     {
//       title:req.body.title,
//       content:req.body.content
//     }
//   );
//   newArticle.save(function(err){
//     if(err){
//       res.send(err);
//     }else{
//       res.send("Successfully added a new article.");
//     }
//   });
// });
//
// app.delete("/articles", function(req,res){
//   Article.deleteMany({},function(err){
// if(err){res.send(err);}else{res.send("Successfully deleted all articles");}
//
//   });
// });


app.get("/", function(req,res){
  res.render("home");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

//
// app.listen(3000,function(){
//   console.log("Server started on port 3000");
// });
