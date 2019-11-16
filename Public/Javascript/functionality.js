//code runs before it changes hence switched values
$("#optionContentLable").click(function () {

  let mybool =   $(this).find('#optionTitle').prop('checked')== 'true' ? false : true;


if(mybool){


$('#patchReplaceContentInput').prop('disabled', false).css({"background":"white"}).val('article new content');
$('#patchReplaceTitleInput').prop('disabled', true).css({"background":"inherit"}).val('');
}});


$("#optionTitleLable").click(function () {
  let mybool =   $(this).find('#optionContent').prop('checked')== 'true' ? false : true;
if(mybool){

$('#patchReplaceContentInput').prop('disabled', true).css({"background":"inherit"}).val('');
$('#patchReplaceTitleInput').prop('disabled', false).css({"background":"white"}).val('articles new title');
}});



$("#optionTitleLable").click();
// $('body').css({"background":"red"});

////////////////////////////////////////////////////////// GET  //////////////////////////////

//////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!             POST   //////////////////

function postArticleAjax(theArticle){
$.ajax({
    type:"post",                   //"PATCH",
    url: "http://localhost:3000/articles/",
  data: theArticle,
   dataType:"json",
    success: function(result)
    {
      alert(JSON.stringify(result));
      $('#getAnArticleTitleInput').focus();
    $("form").each(function(i){$(this)[0].reset();});
},
error:function(result)  {
    alert(JSON.stringify(result));
    $('#getAnArticleTitleInput').focus();
        $("form").each(function(i){$(this)[0].reset();});
}
});
}

//hijack submit from post this works
$(function () {
  $("#postForm").on('submit', function (submitClick) {
postArticleAjax($(this).serialize());
    return false;
   }
  )
});


function   repopulateWithAjaxPut(repopulationData){
deleteAllArticlesAjax();
$.each(repopulationData, function(index, value){

postArticleAjax(value);
});

}


///////////////////////////////////////////////// PUT ///////////////////////////////////////

//  !!!!!!!!!!!!!!!!!     in the end seperately got the data didnt know how to serialize deserialze make javascript object



function putArticleAjax(submitData){



$.ajax({
    type:"put",
    url: "http://localhost:3000/articles/"+$("#putArticleToReplace").val(), //if i dont do this hack need to somehow deserialize data and turn in javascript object
  data: submitData,
   dataType:"json",
    success: function(result)
    {

      alert(JSON.stringify(result));
      $('#getAnArticleTitleInput').focus();
        $("form").each(function(i){$(this)[0].reset();});
},
error:function(result)  {

    alert(JSON.stringify(result));
    $('#getAnArticleTitleInput').focus();
    $("form").each(function(i){$(this)[0].reset();});
}
});
}

// putArticleAjaxOld('API','replace api title with this OLD!!',"api content now this OLD!!!");
// putArticleAjax([{existingArticleTitle:'API'},{title:'replace api title with this'},{content:"api content now this"}]);


//hijack submit from put this works

$(function () {



  $("#putForm").on('submit', function (submitClick) {
putArticleAjax($(this).serialize());
    return false;

  });  });








/////////////////////////////////////////////// PATCH /////////////////////////////////////////




function patchArticleAjax(submitData){

alert($("#patchArticleToPatch").val());
alert(JSON.stringify(submitData));

$.ajax({
    type:"patch",
    url: "http://localhost:3000/articles/"+$("#patchArticleToPatch").val(), //if i dont do this hack need to somehow deserialize data and turn in javascript object
  data: submitData,
   dataType:"json",
    success: function(result)
    {

      alert(JSON.stringify(result));
      $('#getAnArticleTitleInput').focus();
        $("form").each(function(i){$(this)[0].reset();});
},
error:function(result)  {

    alert(JSON.stringify(result));
    $('#getAnArticleTitleInput').focus();
    $("form").each(function(i){$(this)[0].reset();});
}
});
}


//hijack submit from patch this works

$(function () {



  $("#patchForm").on('submit', function (submitClick) {
patchArticleAjax($(this).serialize());
    return false;

  });  });








//////////////////////////////////////////////// DELETE ///////////////////////////////////////
