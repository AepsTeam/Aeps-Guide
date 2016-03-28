$(function(){
//    var $navTitle = $('.navbar-nav a').text;
//    var tit = $navTitle.substr();

    var $links = $('.navbar-nav').find('a');
    $links.each(function(){
        var text = $(this).text();
        var arr = text.split("-");
        $(this).text(arr[1]);
    });
})