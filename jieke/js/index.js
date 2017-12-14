$.ajax({
	url:"http://localhost:3000/item/index",
	type:"get",
	dataType:"json",
	success:function(e){
		var str=""
		for(var i in e){
			str+='<div class="gal_img"><img src="images/'+e[i].img+'" /><div class="btn1" data-id="'+e[i].id+'"></div></div>'
		}
		$("#gallery").append(str);
		$(".btn1").click(function(){
			var id = $(this).attr('data-id');
			$('.gal_images').css("display","block");
			console.log(id)
			$.ajax({
				type:'POST',
				url:'http://localhost:3000/item/list',
				dataType:'json',
				data:{
					id:id
				},
				success:function (e) {
					console.log(e)
					$(".img_gal").html('<img src="images/'+e[0].img+'" />')
					
					$(".guan").on('click',function () {
				   		$('.gal_images').css("display","none");
				   	})
				   	$(".left").on('click',function () {
				   		if(id<=0){
				   			id=6;
				   		}else{
				   			id--;
				   		}
				   		$.ajax({
							type:'POST',
							url:'http://localhost:3000/item/list',
							dataType:'json',
							data:{
								id:id
							},
							success:function (e) {
								console.log(e)
								$(".img_gal").html('<img src="images/'+e[0].img+'" />')
							}
						})
				   	})
				   	$(".right").on('click',function () {
				   		if(id>6){
				   			id=1;
				   		}else{
				   			id++;
				   		}
				   		$.ajax({
							type:'POST',
							url:'http://localhost:3000/item/list',
							dataType:'json',
							data:{
								id:id
							},
							success:function (e) {
								console.log(e)
								$(".img_gal").html('<img src="images/'+e[0].img+'" />')
							}
						})
				   	})
				   	
		        }
			})
		})
	}
})


$.ajax({
	url:"http://localhost:3000/item/about",
	type:"get",
	dataType:"json",
	success:function(e){
		var str=""
		for(var i in e){
			str+='<div class="y-about"><div class="y-about-auto"><div class="y-about-cion"><h2>ABOUT <br>ME!</h2></div><div class="y-about-text"><p class="y-about-p1">'+e[i].p1+'</p><p class="y-about-p2">'+e[i].p2+'</p></div><div class="y-about-btn"><a href="detail.html?id='+e[i].id+'">See Resume</a></div></div></div>'
		}
		$("#about").append(str)
	}
})

$.ajax({
	url:"http://localhost:3000/item/zk",
	type:"get",
	dataType:"json",
	success:function(e){
		var str=""
		for(var i in e){
			str+='<div class="caption"><a href="detail2.html?id='+e[i].id+'"><h1 class="h1">'+e[i].head+'</h1></a></div>'
		}
		$("#showreels").html(str)
	}
})