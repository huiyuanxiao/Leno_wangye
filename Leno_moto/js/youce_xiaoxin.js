// 右侧悬浮小新
$(".bug_close").click(function() {
	/* Act on the event */
	$(".bug").css("display","none");
});
//用户信息弹出
$(".pub_header_right ul .pub_header_right_first").hover(function() {
	$(".pub_header_marking").css("display","block");
}, function() {
	$(".pub_header_marking").css("display","none");
});
$(".pub_header_marking").hover(function() {
	$(".pub_header_marking").css("display","block");
}, function() {
	$(".pub_header_marking").css("display","none");
});
//版块信息弹出
$("#show_list").hover(function() {
	$(".pub_nav_board").css("display","block");
}, function() {
	$(".pub_nav_board").css("display","none");
});
$(".pub_nav_board").hover(function() {
	$(".pub_nav_board").css("display","block");
}, function() {
	$(".pub_nav_board").css("display","none");
});

// 图片轮播
// 小白点变化
var index=0;
var cleartime=null;
//自动播放
function autoPlay(){
	cleartime=setInterval(function(){
		index++;
		if(index>4){index=0;}
		$(" .flicking_con_btn span").eq(index).addClass("on").siblings().removeClass("on");
	    $(".main_scroll .main_imglist a").eq(index).fadeIn().siblings().fadeOut();
	},2000);
}
autoPlay();
$(".flicking_con_btn span").hover(function(){
	clearInterval(cleartime);
},function(){
	autoPlay();
});
//小圆点变化
$(".flicking_con_btn span").hover(function(){
	index=$(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$(".main_scroll .main_imglist a").eq(index).fadeIn().siblings().fadeOut();
});
//左键点击
$(".main_flash .homepage_banner_pre").click(function(){
	index--;
	if(index<0){index=4;}
	$(" .flicking_con_btn span").eq(index).addClass("on").siblings().removeClass("on");
	$(".main_scroll .main_imglist a").eq(index).fadeIn().siblings().fadeOut();
});
//右键点击
$(".main_flash .homepage_banner_next").click(function(){
	index++;
	if(index>4){index=0;}
	$(".flicking_con_btn span").eq(index).addClass("on").siblings().removeClass("on");
	$(".main_scroll .main_imglist a").eq(index).fadeIn().siblings().fadeOut();

});
//PC 版块 hover显示
$(".BBSSection_box .BBSSection_into dl").hover(function() {
	$(this).addClass('BBSSection_intodlhigh');
}, function() {
	$(this).removeClass('BBSSection_intodlhigh');
});
//Video 显示图层的字
$(".pc_com_video ul li").hover(function() {
	index=$(this).index();
	$(".pc_com_video ul li .pc_com_video_con").eq(index).css("display","block");
}, function() {
	$(".pc_com_video ul li .pc_com_video_con").eq(index).css("display","none");
});
//图集 显示图层文字
$(".pc_tuji ul li").hover(function() {
	index=$(this).index();
	$(".pc_tuji ul li .pc_tuji_con").eq(index).css("display","block");
}, function() {
	$(".pc_tuji ul li .pc_tuji_con").eq(index).css("display","none");
});
