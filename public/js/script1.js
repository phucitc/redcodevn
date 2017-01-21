$(document).ready(function(){
    $('.menu-item a').click(function(){
        var href = $(this).attr('href');
        window.location.href = href;
    });
    $('.action-href').click(function(){
        var href = $(this).attr('href');
        window.location.href = href;
    });
});
$(document).ready(function(){
    $('.language').click(function(){
        var data = $(this).attr('data-language');
        if(data=='vn')
        {
            $('.en').hide();
            $('.vn').show();
        }
        if(data=='en')
        {
            $('.vn').hide();
            $('.en').show();
        }
    });
});