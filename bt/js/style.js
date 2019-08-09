$(function () {
    // 公告
    var num = $(".ul1").find("li").length;
    if (num > 1) {
        setInterval(function () {
            $('.ul1').animate({
                marginTop: "-20px"
            }, 500, function () {
                $(this).css({ marginTop: "0" }).find("li:first").appendTo(this);
            });
        }, 3000);
    }

    // 选项卡
    $(".money_title li").on("click", function () {
        var indx = $(this).index();
        $(this).css({
            "color": "#075bd9",
            "border-bottom": "2px solid #075bd9",
        }).siblings().css({
            "color": "#333333",
            "border-bottom": "2px solid transparent"
        });
        $(".money_content li").eq(indx).css("display", "block").siblings().css("display", "none");
    });


    

});