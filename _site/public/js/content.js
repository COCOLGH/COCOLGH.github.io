/////////////////////////// 鼠标点击变换bar的样式
$('#bar').on('click', function() {

	if ($(this).attr('status') == 'open') {

		$(this).css({
			background: 'none'
		});

		$(this).addClass('bar')

		// 修改标志
		$(this).attr('status', 'close')

		// 显示颜色选择框
		$('.color').css('display', "block");

		// 修改文章内容的上方的外边距
		$('.content-container').css('margin-top', '17%');

	} else {
		$(this).css({
			background: '#7b7b7b'
		});

		$(this).removeClass('bar')

		$(this).attr('status', 'open')

		$('.color').css('display', "none");

		$('.content-container').css('margin-top', '10%');
	}

});



//////////////////////////// 选择改变右侧内容的背景色
function choose(num) {

	// 获取右侧内容对象
	var content = document.getElementsByClassName('myContent')[0];
	var original = document.getElementsByClassName('original')[0];
	var toolbox = document.getElementsByClassName('toolbox')[0];
	
	// 文章头部“原创”的颜色
	original.style.color = "#000";
	// 文章内容颜色
	content.style.color = "#fff";
	// 文章底部文字颜色
	toolbox.style.color = "#000";

	switch(num){
		case 1:
			content.style.backgroundColor = "#000";
			break;
		case 2:
			content.style.backgroundColor = "#60955F";
			break;
		case 3:
			content.style.backgroundColor = "#F1B1D6";
			break;
		case 4:
			content.style.backgroundColor = "#fff";
			content.style.color = "#000";
			original.style.color = "#000";
			break;
		case 5:
			content.style.backgroundColor = "#324362";
			break;
		default:
			content.style.backgroundColor = "#4E3184";
	}
}


// ////////////文章底部样式设置
var colorFlag = 1;
$('.toolList').on('click', function() {

	if (colorFlag == 1) {
		$(this).css('color', 'red');
		colorFlag = 0;
	} else {
		$(this).css('color', 'black');
		colorFlag = 1;
	}
	
});


// //////////左侧首页部分样式

// 添加动画的class名
function addAnimation(selecter, operation, className) {
	$(selecter).on(operation, function() {
		$(this).addClass(className);
	})
}

// 删除动画的class名
function delAnimation(selecter, operation, className) {
	$(selecter).on(operation, function() {
		$(this).removeClass(className);
	})
}

addAnimation('.sidebar-nav-item', 'mouseenter', 'shake');
delAnimation('.sidebar-nav-item', 'mouseleave', 'shake');

// //////////左侧联系
addAnimation('.contact-info', 'mouseenter', 'bounceIn');
delAnimation('.contact-info', 'mouseleave', 'bounceIn');




// //////////评论区样式

//初始化数据
var arr = [
{id:1,img:"/public/images/3.jpg",replyName:"小小序",beReplyName:"匿名",content:"6666",time:"2019-12-29 11:42:53",address:"深圳",osname:"",browse:"谷歌",replyBody:[]},
{id:2,img:"/public/images/2.jpg",replyName:"匿名",beReplyName:"",content:"123456",time:"2019-12-30 11:42:53",address:"广西",osname:"",browse:"火狐",replyBody:[{id:3,img:"",replyName:"维尼",beReplyName:"匿名",content:"sixsixsix",time:"2017-10-17 11:42:53",address:"",osname:"",browse:"谷歌"}]},
{id:3,img:"/public/images/1.jpg",replyName:"维尼",beReplyName:"匿名",content:"777",time:"2019-12-27 09:02:03",address:"上海",osname:"win10",browse:"IE",replyBody:[]}
];
$(function(){
	$(".comment-list").addCommentList({data:arr,add:""});
	$("#comment").click(function(){
		var obj = new Object();
		obj.img="/public/images/4.jpg";
		obj.replyName="匿名";
		obj.content=$("#content").val();
		obj.browse="广西";
		obj.osname="win10";
		obj.replyBody="";
		$(".comment-list").addCommentList({data:[],add:obj});
	});
})
