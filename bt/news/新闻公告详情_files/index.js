$(function() { 
	$(".base-li").click(
			function() {
				$(this).find("a").addClass('on').parent().siblings().find("a")
						.removeClass('on');
			});

	$(".message .name .sex ul .nan-img img").click(function() {
		$(".message .name .sex ul .nan-color").css("color", "black");
		$(".message .name .sex ul .nan-img img").toggle();
		$(".message .name .sex ul .nv-color").css("color", "#ccc");
		$(".message .name .sex ul .nv-img img").toggle();
		if ($('#sex').val() == 1) {
			$('#sex').val(2);
		} else {
			$('#sex').val(1);
		}
	});
	$(".message .name .sex ul .nv-img img").click(function() {
		$(".message .name .sex ul .nv-color").css("color", "black");
		$(".message .name .sex ul .nv-img img").toggle();
		$(".message .name .sex ul .nan-color").css("color", "#ccc");
		$(".message .name .sex ul .nan-img img").toggle();
		if ($('#sex').val() == 1) {
			$('#sex').val(2);
		} else {
			$('#sex').val(1);
		}
	});

	$('.exam-main li span').click(function() {

		$(this).parent().siblings().children('img').hide()
		$(this).next().eq($(this).prev().index()).show();

		$(this).parent().siblings().children('.num').css("color", "black");

		$(this).eq($(this).prev().index()).css("color", "#36cd84");
	});

	$(".img-top").click(function() {

	});
	
	$('.qx .years').click(function() {
		$(this).addClass('xuanze').siblings().removeClass('xuanze');
	})

	// $(".dibu-tj1").click(function(){
	// $(".tj-zhao").show();
	// setTimeout(function(){
	// $(".tj-zhao").delay(2000).hide(0);
	// location.href="./index.html";
	// },1000);
	// }) ;
	// 验证
		if ($('#sex').val() == 1) {
			$(".message .name .sex ul .nan-color").css("color", "black");
			$(".message .name .sex ul .nan-img img").toggle();
			$(".message .name .sex ul .nv-color").css("color", "#ccc");
			$(".message .name .sex ul .nv-img img").toggle();
		}
})
