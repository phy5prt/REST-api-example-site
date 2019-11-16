$("#test").click(

//Get works if put articleValue in
// function(){
//   var theTestButton = $(this);
// getArticle(theTestButton);
// }


//GetArticleAjax works but using alert not displaying in new window

// function(){
// getArticleAjax();
// }

//PostArticalAjax
// function(){
//   var title="dontForget"; var content = "me";
//   postArticleAjax(title,content);
// }


//PutArticleAjax
//WORKS EXCEPT NO ERROR WHEN DOESNT HAVE SOMETHING TO UPDATE then says success anyway due to ejs
// function(){
//   var articleToReplace = "API";
//   var titleReplacement = "There should be something here 2";
//   var contentReplacement = "You can see this 2";
//   putArticleAjax(articleToReplace,titleReplacement,contentReplacement);
// }

//PatchArticleAjax
//sort of work but think will have to pass the data rather than the vars
// function(){
//   var articleToReplace = "Jack Bauer";
//   var titleReplacement = "should still see C Jack stuff below";
//   var contentReplacement;
//   patchArticleAjax(articleToReplace,titleReplacement,contentReplacement);
// }

//deleteAllArticlesAjax

// function(){
//   deleteAllArticlesAjax();
// }

//deleteSpecificArticleAjax
// function(){
// deleteSpecificArticleAjax("DOM");
// }


//repopulate
// function(){
//
//   repopulateWithAjaxPut(repopulationData);
// }
);



function getArticle(theTestButton){
alert(theTestButton.val());
var thisArticle = theTestButton.val();
var thisRoute = "http://localhost:3000/articles/";
window.location.href = thisRoute + thisArticle;
}

//definately read this
//https://api.jquery.com/jquery.ajax/


function getArticleAjax(){
$.ajax({
    type:"GET",                   //"PATCH",
    url: "http://localhost:3000/articles/API",
  //  data: {},
   dataType:"json",
    success: function(result)
    {
      alert(result);
      alert(JSON.stringify(result));


},
error:function(result)  {
    alert(result);
    alert(JSON.stringify(result));


}
});
}





//if a var left blank it works
//if remove value and then run this get empty string var contentReplacement = $("#test").val();
//if link to disable value it just doesnt work at all var contentReplacement = $("#test").val();
// function patchArticleAjax(articleToReplace,titleReplacement,contentReplacement){
//
//
//
//
// $.ajax({
//
//     type:"patch",                   //"PATCH",
//     url: "http://localhost:3000/articles/"+articleToReplace,
//   data: {
//     title:titleReplacement,
//     content:contentReplacement
//   },
//    dataType:"json",
//     success: function(result)
//     {
//
//       alert(JSON.stringify(result));
//
//
// },
// error:function(result)  {
//
//     alert(JSON.stringify(result));
//
//
// }
// });
// }

function deleteAllArticlesAjax(){
  $.ajax({
      type:"DELETE",                   //"PATCH",
      url: "http://localhost:3000/articles/",
    //  data: {},
     dataType:"json",
      success: function(result)
      {

        alert(JSON.stringify(result));


  },
  error:function(result)  {

      alert(JSON.stringify(result));


  }
  });
  }


  function deleteSpecificArticleAjax(articleToDelete){

  $.ajax({

      type:"delete",                   //"PATCH",
      url: "http://localhost:3000/articles/"+articleToDelete,
    // data: {
    //   title:titleReplacement,
    //   content:contentReplacement
    // },
     dataType:"json",
      success: function(result)
      {

        alert(JSON.stringify(result));


  },
  error:function(result)  {

      alert(JSON.stringify(result));


  }
  });
  }



//hijack submit from post this works
// $(function () {
//   $("#postForm").on('submit', function (submitClick) {
//
// var formData = $(this).serialize();
// var url = "http://localhost:3000/articles/";
//
// $.ajax({
//      type: "POST",
//      url: url,
//      data: formData,
//      success: function (data) {
//
//   alert(JSON.stringify(data));
//      $('#getAnArticleTitleInput').focus();
//       $(this)[0].reset();
//       }
//
//
//     });
//     return false;
//
//    }
//   )
// });


//try this
// alert("Name: " + nameSubmitted.value);
//
//                 $.ajax({
//                     type:       "POST",
//                     url:        "http://127.0.0.1:8088/namegame",
//                     data:       {name: nameSubmitted.value},
//                     dataType:   "json",
//                     timeout:    2500,
//                     success:    function() { alert("???");},
//                     error:      function(error1, error2, error3)
//                     {   alert("error"); },
//                     complete:   function(arg1, arg2, arg3)
//                     {   alert("complete");  }
//                 });



// try this
//Look in bootstrap website for the button that submits on contact form it is intercepted by ajax


//read this
//http://malsup.com/jquery/form/

//maybe if desperate read this
// /https://www.sanwebe.com/2016/07/ajax-form-submit-examples-using-jquery
