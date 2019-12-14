$(function () {
    $(".post-size .large").click(function (e) {
        e.preventDefault();
        $(".post-content").each(function () {
            var size = parseInt($(this).css("font-size"));
            var lineheight = parseInt($(this).css("line-height"));
            size = size + 1 + "px";
            lineheight = lineheight + 2 + "px";
            $(this).css({
                'font-size': size,
                'line-height': lineheight
            });
            $(this).find("*").css({
                'font-size': size,
                'line-height': lineheight
            });
        });
    });
    $(".post-size .small").click(function (e) {
        e.preventDefault();
        $(".post-content").each(function () {
            var size = parseInt($(this).css("font-size"));
            var lineheight = parseInt($(this).css("line-height"));
            size = size - 1 + "px";
            lineheight = lineheight - 2 + "px";
            $(this).css({
                'font-size': size,
                'line-height': lineheight
            });
            $(this).find("*").css({
                'font-size': size,
                'line-height': lineheight
            });
        });
    });
    $(".post-size .normal").click(function (e) {
        e.preventDefault();
        $(".post-content").each(function () {
            var size = parseInt($(this).css("font-size"));
            var lineheight = parseInt($(this).css("line-height"));
            size = 15 + "px";
            lineheight = 24 + "px";
            $(this).css({
                'font-size': size,
                'line-height': lineheight
            });
            $(this).find("*").css({
                'font-size': size,
                'line-height': lineheight
            });
        });
    });
});

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
      'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.11&appId=453642988336652';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function () {
    var po = document.createElement("script");
    po.type = "text/javascript";
    po.async = true;
    po.src = "https://apis.google.com/js/platform.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
})();