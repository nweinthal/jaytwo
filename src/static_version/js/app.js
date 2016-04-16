$(document).foundation();

$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "http://parentsfiles.s3.amazonaws.com"
    }).done(function(response){
        console.log(response);
    }); 
});
