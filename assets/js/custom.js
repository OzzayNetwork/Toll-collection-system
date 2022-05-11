$(window).on('load', function() {
    $('.apex-charts').removeClass('d-none');
    $('#stacked-column-chart-day').slideDown().siblings('.apex-charts').slideUp()
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

    $('.nav-day').on('click', function() {
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        //$('#stacked-column-chart-day').removeClass('d-none').siblings('.apex-charts').addClass('d-none')
        $('#stacked-column-chart-day').slideDown().siblings('.apex-charts').slideUp()

    })

    $('.nav-week').on('click', function() {
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        //$('#stacked-column-chart-week').removeClass('d-none').siblings('.apex-charts').addClass('d-none')

        $('#stacked-column-chart-week').slideDown().siblings('.apex-charts').slideUp()
    })

    $('.nav-month').on('click', function() {
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        //$('#stacked-column-chart-month').removeClass('d-none').siblings('.apex-charts').addClass('d-none')
        $('#stacked-column-chart-month').slideDown().siblings('.apex-charts').slideUp()
    })
    $('.nav-year').on('click', function() {
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        //$('#stacked-column-chart-year').removeClass('d-none').siblings('.apex-charts').addClass('d-none');
        $('#stacked-column-chart-year').slideDown().siblings('.apex-charts').slideUp()
    })


    $('.selectpicker').selectpicker();


});