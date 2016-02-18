$(function() {
    $('.tabs li').on('click', function() {
        $(this)
            .addClass('active')
            .siblings().removeClass('active');
        $('.wrapper .article')
            .removeClass('active')
            .eq($(this).index()).addClass('active');
    });
});
