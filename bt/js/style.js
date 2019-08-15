$(function () {
    // 首页公告
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

    // 首页选项卡（借币钱包）
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
    //点击 资金安全  专业风控  实力平台切换对应内容
    $(".head_ul>li").on("click", function () {
        var liIndex = $(this).index();
        $(this).find("a").css({
            "color": "#075bd9",
            "background-color": "#fff"
        }).parent().siblings().find("a").css({
            "color": "#fff",
            "background-color": "#075bd9"
        });
        $(".safe_money_content>div").eq(liIndex).css("display", "block").siblings().css("display", "none");
    });

    // 支付密码
    function getPaw() {
        var $input = $(".fake-box input");
        $("#pwd-input").on("input", function () {
            var pwd = $(this).val().trim();
            for (var i = 0, len = pwd.length; i < len; i++) {
                $input.eq(i).val(pwd[i]);
            }
            $input.each(function () {
                var index = $(this).index();
                if (index >= len) {
                    $(this).val("");
                }
            });
            if (len == 6) {
                //
            }
        });
    }
    getPaw();

    $(".pay_money").on("click", function () {
        $(".paying_box,.mask_container").css("display", "block");

    });
    $(".paying_box").on("click", function () {
        $(".paying_box,.mask_container").css("display", "none");

    });

    //充币and提币切换
    $(".get_set_t p").on("click",function(){
        var getSetIndex=$(this).index();
        $(this).css({
            "color":"#075bd9",
            "border-bottom":"2px solid #075bd9"
        }).siblings().css({
            "color":"#000",
            "border-bottom":"2px solid transparent"
        });
        $(".get_set_change_box>div").eq(getSetIndex).css("display","block").siblings().css("display","none");
        $(".wz_bott>div").eq(getSetIndex).css("display","block").siblings().css("display","none");
    })





});