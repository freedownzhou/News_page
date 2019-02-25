/*通用部分js*/
$(function(){
    header($('#header'));
    headertwo($('#headertwo'));
    footer($('#footer'));
    var anchores=location.hash.replace("#","");
	var str = location.pathname;
	if (str.indexOf("Product_introduction") != -1){
        $('.active_else').attr('id',' ');
        $('#header ul li').removeClass('active')
		$('#headertwo ul li').removeClass('active');
		$('#header ul li').eq(2).addClass('actives');
	}else if (str.indexOf("news") != -1){
		$('#headertwo ul li').removeClass('actives')
		$('#header ul li').removeClass('active')
		$('#header ul li').eq(3).addClass('active');
		$('#headertwo ul li').eq(3).addClass('actives');
	}else if (str.indexOf("Team_introduce") != -1) {
        $('.active_else').attr('id',' ');
		$('#header ul li').removeClass('active')
		$('#header ul li').eq(4).addClass('actives');
	}else if (str.indexOf("join_us") != -1){
        $('.active_else').attr('id',' ');
		$('#header ul li').removeClass('active')
		$('#header ul li').eq(5).addClass('actives');
	}

	switch(anchores){
		  case "our_pro":
		  $('#header ul li').removeClass('active')
		  $('#header ul li').eq(1).addClass('active');
		  break;
		  case "module_solve":
		  $('#header ul li').removeClass('active')
		  $('#header ul li').eq(2).addClass('active');
		 break;
		  case "news":
		  $('#header ul li').removeClass('active')
		  $('#header ul li').eq(3).addClass('active');
		  break;
		default:
		 break;
	}
    // $('#header ul li a').on('click',function () {
    //     var index = $(this).index();
    //     $('#header ul li').removeClass('active')
    //     $('#header ul li').eq(index).addClass('active');
    // })
    $('#Privacy_box ul li').on('click',function () {
        var index = $(this).index();
        $('#Privacy_box ul li').removeClass('Privacy_box_active')
        $('#Privacy_box ul li').eq(index).addClass('Privacy_box_active');
    })

})
//头部添加
function header(_name){
    var _addTitle = '';
    _addTitle += '<div id="app-header">';
    _addTitle += '<div class="wrap">';
    _addTitle += '<a href="index.html" class="warp_headimg"><img src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/white_logo.svg" class="head_img"></a>';
    _addTitle += '<div class="cssmenu">';
    _addTitle += '<ul class="else_hover">';
    _addTitle += '<li id="id_active" class="active active_else"><a href="index.html?show=1">首页</a></li>';
    _addTitle += '<li><a href="index.html?show=2&#our_pro">产品介绍</a></li>';
    _addTitle += '<li><a href="index.html?show=3&#module_solve">解决方案</a></li>';
    _addTitle += '<li><a href="index.html?show=4&#news">新闻动态</a></li>';
    _addTitle += '<li><a href="Team_introduce.html">团队介绍</a></li>';
    _addTitle += '<li><a href="join_us.html">加入我们</a></li>';
    _addTitle += '<li><a href="Privacy.html">关于我们</a></li>';
    _addTitle += '</ul>';
    _addTitle += '</div>';
    _addTitle += '</div>';
    _addTitle += '</div>';

    _name.empty().append(_addTitle);
}

//弱提示弹出框
var layer=document.createElement("div");
layer.id="layer";
function func()
{
    var style=
        {
            background:"#F8FBFF",
            color:"#0B85EF",
            position:"fixed",
            zIndex:10,
            width:"200px",
            height:"50px",
            left:"45%",
            top:"15%",
        }
    layer.style.cssText += 'text-align:center';
    layer.style.cssText += 'border-radius:5px';
    layer.style.cssText += 'line-height: 50px';
    layer.style.cssText += 'font-family: "微软雅黑"';
    for(var i in style)
        layer.style[i]=style[i];
    layer.innerHTML="正在开发中";
    if(document.getElementById("layer")==null)
    {
        document.body.appendChild(layer);
        setTimeout("document.body.removeChild(layer)",2000)
    }
}

//底部添加
function footer(_name){
    var _addTitle = '';
    _addTitle += '<div id="app-footer">';
    _addTitle += '<ul class="footer_onebox footer_flex">';
    _addTitle += '  <li class="onebox_first">';
    _addTitle += '    <p class="footer_spanone">关于我们</p>';
    _addTitle += '    <ul class="pb10 onebox_ul">';
    _addTitle += '      <li class="mt25"><a href="Privacy.html?page=1">公司简介</a></li>';
    _addTitle += '      <li><a href="Privacy.html?page=2">联系我们</a></li>';
    _addTitle += '    </ul>';
    _addTitle += '  </li>';
    _addTitle += '  <li class="onebox_first">';
    _addTitle += '    <p class="footer_spanone">联系方式</p>';
    _addTitle += '   <ul class="pb10">';
    _addTitle += '     <li  class="mt25"><span>邮箱：BD@miaolinktech.com</span></li>';
    _addTitle += '     <li><span>电话：0731-89916986</span></li>';
    _addTitle += '    </ul>';
    _addTitle += '  </li >';
    _addTitle += '  <li class="onebox_first nav">';
    _addTitle += '    <p class="footer_spanone">官方媒体</p>';
    _addTitle += '    <ul  class="mt25" style="float: left;width: 175px">';
    _addTitle += '    <li><a href="javascript:void(0)" onclick="func()" class="fa-twitter"></a></li>';
    _addTitle += '    <li><a href="javascript:void(0)" onclick="func()" class="fa-google-plus-g"></a></li>';
    _addTitle += '    <li><a href="javascript:void(0)" onclick="func()" class="fa-pinterest-p"></a></li>';
    _addTitle += '    <li><a href="javascript:void(0)" onclick="func()" class="fab fa-facebook-f"></a></li>';
    _addTitle += '    </ul>';
    _addTitle += '  </li>';
    _addTitle += '</ul>';
    _addTitle += '<div class="footer_twobox">';
    _addTitle += '  <img src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/newfooter_logo.svg" class="footer_image mt30">';
    _addTitle += '  <p class="mt15 buttom_span">妙链信息科技有限公司</p>';
    _addTitle += '</div>';
  	_addTitle += '</div>';
    _name.empty().append(_addTitle);
}
//第二个头部
//头部添加
function headertwo(_name){
    var _addTitle = '';
	_addTitle += '<div class="wrap">';
	 _addTitle += '<a href="index.html" class="warp_headimg"><img src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/blue_logo.svg" class="head_img"></a>';
	 _addTitle += '<div class="cssmenu">';
	 _addTitle += '<ul>';
	   _addTitle += '<li><a href="index.html?show=1">首页</a></li>';
	  _addTitle += '<li><a href="index.html?show=2&#our_pro">产品介绍</a></li>';
	  _addTitle += '<li><a href="index.html?show=3&#module_solve">解决方案</a></li>';
	  _addTitle += '<li><a href="index.html?show=4&#news">新闻动态</a></li>';
	  _addTitle += '<li><a href="Team_introduce.html">团队介绍</a></li>';
	  _addTitle += '<li><a href="join_us.html">加入我们</a></li>';
	  _addTitle += '<li class="actives"><a href="Privacy.html">关于我们</a></li>';
	  _addTitle += '</ul>';
	  _addTitle += '</div>';
	  _addTitle += '</div>';
    _name.empty().append(_addTitle);
}

