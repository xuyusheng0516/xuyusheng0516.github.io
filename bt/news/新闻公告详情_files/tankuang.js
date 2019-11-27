var tx_time = 3;
var tx_int;
function createPromptBox(html, id, label,istime='yes') {// 实例化对象传入参数 html为弹窗的布局
														// id 为根节点的id
	// label 为创建标签
	var b = false;
	var PromptBox = new Object();
	var div = document.createElement(label);
	div.id = id;
	div.innerHTML = html;
	PromptBox.open = function() {// 显示
		b = true;
		document.body.appendChild(div);
		return b;
	}
	PromptBox.close = function() {// 不显示
		b = false;
		document.body.removeChild(div);
		return b;
	}
	PromptBox.gettype = function() {// 获取显示状态 true为显示
		return b;
	}
	PromptBox.automatic = function() {// 自动展示
		return b ? PromptBox.close() : PromptBox.open();
	}
	if(istime=='yes'){
		div.onclick = function() {
			b = false;
			document.body.removeChild(div);
		};
		tx_time = 3;
		tx_int = setTimeout("del_tx('" + id + "')", 1000);
	}


	return PromptBox;
}

function del_tx(id) {
	if (tx_time == 0) {
		$('#' + id).click();
		clearTimeout(tx_int);
	}else{
		tx_time = tx_time - 1;
		setTimeout("del_tx('" + id + "')", 1000);
	}
}

function tankuang(msg) {
	var promptbox;
	var htm = "<div style='width: 5rem;height: 1.5rem;background: #E3E3E3;left: 1.25rem;font-size: .34rem;line-height: 1.5rem;text-align: center;box-shadow: 0.02rem 0.035rem 0.047rem 0.03rem rgba(6, 0, 1, 0.01);border-radius: .2rem;position: fixed;top: 5.26rem;left: 1.25rem;'>"
			+ msg + "</div>";
	if (promptbox == null) {
		promptbox = new createPromptBox(htm, "tck", "div");
	}
	promptbox.automatic();
	return false;

}