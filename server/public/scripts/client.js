
console.log('script.js is Sploaded')

$(document).ready(onReady);

function onReady() { 
    console.log('jQuery is go for launch');
   $('#quotes').on('click', clickAjax);

   function clickAjax(){
    $.ajax({
        type: 'GET',
        url: '/quote'
    })
    .then(function(response) {
        $('#randoQuote').text(response.quote);
        console.log(response);
    });
    }
}