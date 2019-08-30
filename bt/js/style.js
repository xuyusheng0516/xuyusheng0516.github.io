$(function () {
    //头部返回
    $(".all_html_header>div:first-child img").click(function () {
        window.history.back();
    });

    // 登录------------------------
    // 点击显示隐藏密码
    $(".pwd_hide_show img").on("click", function () {
        if ($(this).attr("src") == "img/hide.png") {
            $(this).attr("src", "img/show.png");
            $(this).parent().siblings().attr("type", "text");
        } else {
            $(this).attr("src", "img/hide.png");
            $(this).parent().siblings().attr("type", "password");
        }
    });
    // 验证
    function loginTest() {
        let login_tel = $(".login_tel").val();
        let login_pwd = $(".login_pwd").val();
        let tel_rule = /^1(3|4|5|7|8)\d{9}$/;
        if (login_tel == "" || (!tel_rule.test(login_tel))) {
            $('.test_mask').show().html("请输入有效手机号");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (login_pwd == "") {
            $('.test_mask').show().html("请输入有效密码");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else {
            $(".login_btn button").attr("type", "submit");
        }
    }
    $(".login_btn button").on("click", function () {
        loginTest();
    });


    // 注册------------------------
    // 验证
    function registerTest() {
        let register_tel = $(".register_tel").val();
        let register_pwd = $(".register_pwd").val();
        let register_msg = $(".register_msg").val();
        let tel_rule = /^1(3|4|5|7|8)\d{9}$/;
        let register_msg_rule = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if (register_tel == "" || (!tel_rule.test(register_tel))) {
            $('.test_mask').show().html("请输入有效手机号");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (register_msg == "") {
            $('.test_mask').show().html("请输入有效验证码");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (register_pwd == "" || (!register_msg_rule.test(register_pwd))) {
            $('.test_mask').show().html("请输入有效密码");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else {
            $(".register_btn button").attr("type", "submit");
        }

    }

    $(".register_btn button").on("click", function () {
        registerTest();
    });



    //找回密码
    function findPassword() {
        let find_tel = $(".find_tel").val();
        let find_msg = $(".find_msg").val();
        let tel_rule = /^1(3|4|5|7|8)\d{9}$/;
        if (find_tel == "" || (!tel_rule.test(find_tel))) {
            $('.test_mask').show().html("请输入有效手机号");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (find_msg == "") {
            $('.test_mask').show().html("请输入有效验证码");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else {
            $(".find_pwd_next a").attr("href", "find_password_next.html");
        }
    }

    $(".find_pwd_next a").on("click", function () {
        findPassword();
    });



    function findPasswordFinished(){
        let find2_pwd = $(".find2_pwd").val();
        let find2_pwd_rule = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(find2_pwd=="" ||(!find2_pwd_rule.test(find2_pwd))){
            $('.test_mask').show().html("请输入有效密码");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        }else{
            $(".find_pwd_finished button").attr("type", "submit");
        }
    }
    $(".find_pwd_finished button").on("click",function(){
        findPasswordFinished();
    })


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
    $(".get_set_t p").on("click", function () {
        var getSetIndex = $(this).index();
        $(this).css({
            "color": "#075bd9",
            "border-bottom": "2px solid #075bd9"
        }).siblings().css({
            "color": "#000",
            "border-bottom": "2px solid transparent"
        });
        $(".get_set_change_box>div").eq(getSetIndex).css("display", "block").siblings().css("display", "none");
        $(".wz_bott>div").eq(getSetIndex).css("display", "block").siblings().css("display", "none");
    });
    //我的出借  持有中  已结束
    $(".my_chujie_t p").on("click", function () {
        var myChujieIndex = $(this).index();
        $(this).css({
            "color": "#075bd9",
            "border-bottom": "2px solid #075bd9"
        }).siblings().css({
            "color": "#000",
            "border-bottom": "2px solid transparent"
        });
        $(".my_chujie_c>div").eq(myChujieIndex).css("display", "block").siblings().css("display", "none");
    });
    //邀请收益  我的奖励  我的粉丝
    $(".income_title>p").on("click", function () {
        var incomeIndex = $(this).index();
        $(this).css({
            "color": "#075bd9",
            "border-bottom": "2px solid #075bd9"
        }).siblings().css({
            "color": "#000",
            "border-bottom": "2px solid transparent"
        });
        $(".invite_income_k>div").eq(incomeIndex).css("display", "block").siblings().css("display", "none");
        $(".invite_income_wz>div").eq(incomeIndex).css("display", "block").siblings().css("display", "none");
    });

    // 身份认证  点击上传
    $(".click_zheng1").on("click", function () {
        $(".file_zheng1").click();
    });
    $(".click_fang1").on("click", function () {
        $(".file_fang1").click();
    });
    $(".click_zheng2").on("click", function () {
        $(".file_zheng2").click();
    });
    $(".click_fang2").on("click", function () {
        $(".file_fang2").click();
    });

    $(".id_test_t>p").on("click", function () {
        var areaIndex = $(this).index();
        $(this).css({
            "color": "#fff",
            "background-color": "#075bd9"
        }).siblings().css({
            "color": "#075bd9",
            "background-color": "transparent"
        });
        $(".id_testing_box>form").eq(areaIndex).css("display", "block").siblings().css("display", "none");
    });

    //中国大陆地区   表单验证
    $(".China_btn").on("click", function () {
        var name_input1 = $(".name_input1").val();
        var num_input1 = $(".num_input1").val();
        var file_zheng1 = $(".file_zheng1").val();
        var file_fang1 = $(".file_fang1").val();
        var card_t = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (name_input1 == "") {
            $('.test_mask').show().html("姓名不能为空");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (num_input1 == "" || (!card_t.test(num_input1))) {
            $('.test_mask').show().html("请输入有效身份证号");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (file_zheng1 == "" || file_fang1 == "") {
            $('.test_mask').show().html("请上传身份证照片");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else {
            $(".China_btn").attr("type", "submit");
        }
    });
    //其他国家及地区   表单验证
    $(".country_btn").on("click", function () {
        var name_input2 = $(".name_input2").val();
        var num_input2 = $(".num_input2").val();
        var file_zheng2 = $(".file_zheng2").val();
        var file_fang2 = $(".file_fang2").val();
        var card_t = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (name_input2 == "") {
            $('.test_mask').show().html("姓名不能为空");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (num_input2 == "" || (!card_t.test(num_input2))) {
            $('.test_mask').show().html("请输入有效身份证号");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (file_zheng2 == "" || file_fang2 == "") {
            $('.test_mask').show().html("请上传身份证照片");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else {
            $(".country_btn").attr("type", "submit");
        }
    });


    //资金密码修改
    $(".psw_change_btnbox>button").on("click", function () {
        var old_psw = $(".old_psw").val();
        var new_psw = $(".new_psw").val();
        var confirm_new_psw = $(".confirm_new_psw").val();
        var psw_test = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if (old_psw == "") {
            $('.test_mask').show().html("密码不能为空");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (new_psw == "" || (!psw_test.test(new_psw))) {
            $('.test_mask').show().html("请输入有效新密码");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (confirm_new_psw == "" || new_psw != confirm_new_psw) {
            $('.test_mask').show().html("两次密码不一致");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else {
            $(".psw_change_btnbox>button").attr("type", "submit");
        }
    });


    //资金密码
    $(".password_btnbox>button").on("click", function () {
        var password_in = $(".password_in").val();
        var password_again = $(".password_again").val();
        var tel_test_num = $(".tel_test_num").val();
        if (password_in == "") {
            $('.test_mask').show().html("密码不能为空");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (password_again == "" || password_again != password_in) {
            $('.test_mask').show().html("两次密码不一致");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else if (tel_test_num == "") {
            $('.test_mask').show().html("手机验证码不能为空");
            setTimeout(function () {
                $('.test_mask').hide();
            }, 1200);
            return false;
        } else {
            $(".password_btnbox>button").attr("type", "submit");
        }
    });


    //借币信息点击收缩
    $(".tp_coll  img").on("click", function () {
        let $item = $(this).parent().parent().siblings('.up_down_bShow');
        if ($item.is(":hidden")) {
            $(this).attr("src", "img/coll.png");
        } else {
            $(this).attr("src", "img/coll_down.png");
        }
        $item.slideToggle();
    });

    // 固收专享开关
    $(".on_off img").on("click", function () {
        if ($(this).attr('src') == 'img/open.png') {
            $(this).attr('src', 'img/close.png');
        } else {
            $(this).attr('src', 'img/open.png');
        }
    });


    // 点击版本更新出现弹框
    $(".ul_all_listing li:first-child a").on("click",function(){
        $(".all_mask_box").css("display","block");
        setTimeout(function(){
            $(".all_mask_box").css("display","none");
        },1200)
    });

});