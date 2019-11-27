/**
 * 全局变量
 */
// jquery ajax
function ajax_use(url,keyword){
	var result = {
			'res':1,
			'msg':'ajax错误'
	};
	var keywords = {};
	keywords = keyword;
	if($("#myform").length>0){
		$("#myform :input").each(function(){
　			var name = $(this).attr("name");
			var val = $(this).val();
			if(name!=undefined){
				keywords[name]=val;
			}
		});
	}
	//alert(JSON.stringify(keywords));
	// JSON.stringify()
	// 通过AJAX获取静态页面
	var date = new Date();
	var time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay()
			+ " " + date.getHours() + ":" + date.getMinutes() + ":"
			+ date.getSeconds();
	keywords['time']=time;
	$.ajax({
				type : "post",
				// 请求类型 ,post和get
				url : url,
				data : keywords,
				dataType : "json",// 返回json数据
				// 请求地址
				async : false,
				// 是否异步，同步为false
				success : function(r) {
					result = r;
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
				}
	});
	return result;
}
//jquery ajax  formdata
function formdata_use(url,keyword){
	var result = {
			'res':1,
			'msg':'ajax错误'
	};
	var fd = new FormData($("#fd")[0]);
	 for(var key in keyword){
		 fd.append(key,keyword[key]);
	 } 
	// JSON.stringify()
	// 通过AJAX获取静态页面
	var date = new Date();
	var time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay()
			+ " " + date.getHours() + ":" + date.getMinutes() + ":"
			+ date.getSeconds();
	fd.append("time",time);
	$.ajax({
				type : "post",
				// 请求类型 ,post和get
				url : url,
				data : fd,
				processData:false,
                contentType:false,
				dataType : "json",// 返回json数据
				// 请求地址
				async : false,
				// 是否异步，同步为false
				success : function(r) {
					result = r;
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
				}
	});
	return result;
}