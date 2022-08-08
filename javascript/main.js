/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener('click', function () {

    var input = document.querySelector("input").value;
    console.log(input);
    getquery(input);


});



/* 2. do the data stuff with the API */

function getquery(input) {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=s3xFcomV9u9ONyJ2m0PXU7JGMNU0mJXc&q="+input+"&limit=55&offset=0&rating=g&lang=en";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
 


    GiphyAJAXCall.addEventListener('load', function (e) {
        var data = e.target.response;
        pushToDOM(data);





    });
}





/* 3. Show me the GIFs */

function pushToDOM(input) {
    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
    container.innerHTML = "<h1></h1>";

    imageUrls.forEach(function (image) {

        

        var src = image.images.fixed_height.url;
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

    });
}