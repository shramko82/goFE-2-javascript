$(function(){
    $('input')
        .on('mouseover', function () {
            $(this).siblings('.tooltip').addClass('show');
        })
        .on('mouseout', function () {
            $(this).siblings('.tooltip').removeClass('show');
        });
    $('.button').on('click', function (e) {
            e.preventDefault();
            $('.tooltip').addClass('show');
    });
});

