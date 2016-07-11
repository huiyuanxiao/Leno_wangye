// 鼠标经过时显示延保日期
$(".right-element ul li").mouseover(function(){
	    var index=$(this).index();
	    index++;
	    if(index>4){
		   index=0;
	    }
	    $(".right-element .right-element-time").css('display','block');
	    if(index==1){
		    $(".right-element .right-element-time").css({left:index*30+'px'},500);
	    }else{
	    	$(".right-element .right-element-time").css({left:30+(index-1)*140+'px'},500);
	    }	
});
// 鼠标离开时，延保日期消失
$(".right-element ul li").mouseout(function() {
	$(".right-element .right-element-time").css('display','none');
});
// 鼠标单击时边框颜色变化
$(".right-element ul li").click(function(){
	var index=$(this).index();
	$(".right-element ul li").eq(index).addClass("active-image-red").siblings().removeClass("active-image-red");
	
	//var _index=$(".right-element .riight-content p").index();
	//$(".right-info td.info-month").innerHTML()=$(".right-element .right-content").innerHTML();
	});
	//内容显示
	$(".right-element ul.right-image li").click(function(){
	var index=$(this).index();
	$(".right-element ul.right-image li").eq(index).addClass("active-image-red").siblings().removeClass("active-image-red");
	});

$(".right-element ul.right-content li").click(function(){
	var index=$(this).index();
	var content1=$(".right-element ul.right-content li").eq(index).find("p").text();
	var content2=$(".right-element ul.right-content li").eq(index).find("span").text();
	$(".right-info .info-confic .info-style").html(content1);
	$(".right-info .info-confic .info-number").html(content2);
	});
	//月份选中
	$(".right-time .time-month a").click(function(){
		var index=$(this).index();
		$(".right-time .time-month a").eq(index).addClass("active-do").siblings().removeClass("active-do");
		var content3=$(".right-time .time-month a").eq(index).text();
		$(".right-info .info-confic .info-month span").html(content3);
	});
