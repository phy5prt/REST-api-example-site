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

// $('body').css({"background":"red"});
