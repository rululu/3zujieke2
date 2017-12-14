var url=window.location.href;
var id=url.split("?")[1].split("=")[1];
console.log(id)
$.ajax({
	url: "http://localhost:3000/item/detail",
	type: "POST",
	dataType: "json",
	data: {
		id: id
	},
	success: function(e) {
		var str ='<div class="h">'+e[0].head+'</div><p class="s">'+e[0].nr+'</p>'
		$(".con1").append(str);
	}
})