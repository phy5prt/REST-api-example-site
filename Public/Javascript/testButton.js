$("#test").click(

function(){
alert($(this).val());
var thisArticle = $(this).val();
var thisRoute = "http://localhost:3000/articles/";
window.location.href = thisRoute + thisArticle;
}
);
//definate read this
//https://hackersandslackers.com/making-ajax-calls-with-jquery/

// try this

// $.ajax({
//     type: "PATCH",
//     url: "/admin/pages",
//     data: {page_items:page_items, page_name: 'test_page'},
//     success: function(returned_data)
//     {
//         console.log(returned_data);
//     }
// });

// try this
//Look in bootstrap website for the button that submits on contact form it is intercepted by ajax


//read this
//http://malsup.com/jquery/form/

//maybe if desperate read this
// /https://www.sanwebe.com/2016/07/ajax-form-submit-examples-using-jquery
