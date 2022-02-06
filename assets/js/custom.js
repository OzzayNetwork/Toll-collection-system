$(window).on('load', function() {
    $('body').on('click', '.upload-the-contacts', function() {
        $('.selected-contacts-message').removeClass('d-none')

    })
    $('body').on('click', '.write-msg-btn', function() {
        $('.email-overlay').removeClass('d-none')
        setTimeout(function() {
            $('.the-message-maker').addClass('email-overlay-transform');
        }, 0)

    });
    $('body').on('click', '.close-message-maker', function() {
        $('.the-message-maker').removeClass('email-overlay-transform')
        setTimeout(function() {
            $('.email-overlay').addClass('d-none');
        }, 200);

    });

    $('body').on('click', '.minimize', function() {
        $(this).parent().parent().parent().parent().siblings().toggleClass('d-none');
    });

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fixer-fixer-currency-v1.p.rapidapi.com/convert?from=UGX&to=USD&amount=12000000",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com",
            "x-rapidapi-key": "e567644a3dmshde69e5218507697p14e1f1jsnbd76df3e5cd5"
        }
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
        console.log(response.result);
    });

});