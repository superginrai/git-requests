
console.log('script.js is Sploaded')

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is go for launch');
    $('#quotes').on('click', clickAjax);
    $('#submitQuote').on('click', addQuote);

    $.ajax({
        type: 'GET',
        url: '/quote'
    })
        .then(function (response) {
            $('#randoQuote').text('"' + response.quote + '"' + ' -' + response.author);
        });
}

function clickAjax() {
    $.ajax({
        type: 'GET',
        url: '/quote'
    })
        .then(function (response) {
            $('#randoQuote').text('"' + response.quote + '"' + ' -' + response.author);
            console.log(response);
        });

}

function addQuote() {
    const newQuote = {
        quote: $('#newQuote').val(),
        author: $('#newAuthor').val(),
    };
    console.log('New quote object', newQuote);
    $.ajax({
        method: 'POST',
        url: '/add-quote',
        data: newQuote
    })
        .then(function (response) {
            console.log(response);
            getAllQuotes();
        });
}

function getAllQuotes() {
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            response.forEach(function (element) {
                $('#allQuotes').append('"' + element.quote + '"' + ' -' + element.author);
            });


        })
}