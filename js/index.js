var scrWidth = window.screen.width;

var zoo=true;	//为只执行一次动画设置的zoo
var zoo1=true;
var zoo2=true;
var timer=null;
var timer2=null;
var widths=document.body.clientWidth;
window.onbeforeunload = function(){
    //刷新后页面自动回到顶部
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
};
$(function(){

})
//移入移出换图标效果
function mshow(obj,srcs) {
    document.getElementById(obj).src=srcs;
    document.getElementById("code1").style.opacity=1;
}
function mchange(obj) {
    document.getElementById("APP").src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/App_icon.png";
    document.getElementById("code1").style.opacity=0;
}
//下面是首页新闻的轮播图，现没用更多新闻，先不写。
function mshow1(obj) {
    document.getElementById("guanggao_left").src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/left_smalltouch.png";
}
function mchange1(obj) {
    document.getElementById("guanggao_left").src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/left_small.png";
}
function mshow2(obj) {
    document.getElementById("guanggao_right").src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/right.png";
}
function mchange2(obj) {
    document.getElementById("guanggao_right").src="http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/right_small.png";
}

//图片右移的动画
function moveto(object,itarget){
    var obj=document.getElementById(object);
    var num =0;
    clearInterval(timer);
    timer=setInterval(function(){
        num++;
        var speed=0;
        if(obj.offsetLeft<itarget){//通过位移量除以10，使speed递减，实现减速停止。 乘以10则为加速。通过乘除的数字，控制快慢
            speed=(itarget-obj.offsetLeft)/10;
        }else{
            speed=-(obj.offsetLeft-itarget)/10;
        }
        speed=speed>0?Math.ceil(speed):Math.floor(speed);//取整，解决最后不足1px的位移量被忽略的问题
        if(obj.offsetLeft==itarget){
            obj.style.opacity=1;
            clearInterval(timer);
        }else{
            obj.style.left=obj.offsetLeft+speed+'px';
            obj.style.opacity = num/10;
            if(speed==1){speed=0;};
        };
    },30);
    obj.style.opacity=1;
    var timer=null;
}
//百分比位移
function movetotwo(object,itarget){
    var obj=document.getElementById(object);
    var sss=itarget*widths/100;
    var num =0;
    clearInterval(timer);
    timer=setInterval(function(){
        num++;
        var speed=0;
        if(obj.offsetLeft<sss){//通过位移量除以10，使speed递减，实现减速停止。 乘以10则为加速。通过乘除的数字，控制快慢
            speed=(sss-obj.offsetLeft)/10;
        }else{
            speed=-(obj.offsetLeft-sss)/10;
        }
        speed=speed>0?Math.ceil(speed):Math.floor(speed);//取整，解决最后不足1px的位移量被忽略的问题
        if(obj.offsetLeft==sss){
            clearInterval(timer);
        }else{
            obj.style.left=obj.offsetLeft+speed+'px';
            obj.style.opacity = num/10;
            if(speed==1){
                clearInterval(timer);
            };
            if(obj.style.opacity>1){
                obj.style.opacity=1;
            }
        };
    },30);
}

//文字上移的动画
function spanmoveto(object,itarget){
    var obj=document.getElementById(object);
    var num =0;
    clearInterval(timer2);
    timer2=setInterval(function(){
        num++;
        var speed=0;
        if(obj.offsetTop<itarget){//通过位移量除以10，使speed递减，实现减速停止。 乘以10则为加速。通过乘除的数字，控制快慢
            speed=(itarget-obj.offsetTop)/10;
        }else{
            speed=-(obj.offsetTop-itarget)/10;
        }
        speed=speed>0?Math.ceil(speed):Math.floor(speed);//取整，解决最后不足1px的位移量被忽略的问题
        if(obj.offsetTop==itarget){
            obj.style.opacity=1;
            clearInterval(timer2);
        }else{
            obj.style.top=obj.offsetTop+speed+'px';
            obj.style.opacity = num/10;
            if(speed==1){speed=0;};
        };
    },30);
    obj.style.opacity=1;
    var timer2=null;
}
window.onload =function(){
    var one=document.getElementById('our_one').getBoundingClientRect().top
    var li = $('.wrap li')
    var search=location.search;
    if (one==0){
        $('.else_hover').attr('id','');
        $('.id_active').attr('id','id_active');
        $('.else_hover').attr('id','');
        // li.eq(1).removeClass('active')
        // parent.scroll(1,100);
        $('#app-header').removeClass('whiteHeader')
        $('#app-header').addClass('blueHeader')
        $('.head_img').attr('src','http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/white_logo.svg');
        // $('.blueHeader').css('backgroundColor','');
        li.eq(0).addClass('id_active')
        li.eq(0).siblings().removeClass('id_active')
        li.eq(0).siblings().removeClass('active')
    }
    if(search.indexOf("1")!=-1){
        //亮导航栏第一个
        $('.else_hover').attr('id','');
            $('.id_active').attr('id','id_active');
            $('.else_hover').attr('id','');
            // li.eq(1).removeClass('active')
            // parent.scroll(1,100);
            $('#app-header').removeClass('whiteHeader')
            $('#app-header').addClass('blueHeader')
            $('.head_img').attr('src','http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/white_logo.svg');
        // $('.blueHeader').css('backgroundColor','');
        li.eq(0).addClass('id_active')
        li.eq(0).siblings().removeClass('id_active')
        li.eq(0).siblings().removeClass('active')
    }
    if( search.indexOf("2")!=-1){
        //点亮第二个
        document.getElementById("header").style.boxShadow="0 1px 8px 0 #d9d9d9";
        $('.else_hover').attr('id','else_hover');
        $('#app-header').addClass('whiteHeader')
        $('.head_img').attr('src','http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/blue_logo.svg');
        $('.active_else').attr('id','');
        li.eq(1).addClass('id_active')
        li.eq(1).siblings().removeClass('id_active')
        li.eq(1).siblings().removeClass('active')
    }
    else if(search.indexOf("3")!=-1){
        //点亮第三个
        document.getElementById("header").style.boxShadow="0 1px 8px 0 #d9d9d9";
        $('.else_hover').attr('id','else_hover');
        $('#app-header').addClass('whiteHeader')
        $('.head_img').attr('src','http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/blue_logo.svg');
        $('.active_else').attr('id','');

        li.eq(2).addClass('id_active')
        li.eq(2).siblings().removeClass('id_active')
        li.eq(2).siblings().removeClass('active')
    }else if(search.indexOf("4")!=-1){
        document.getElementById("header").style.boxShadow="0 1px 8px 0 #d9d9d9";
        $('.else_hover').attr('id','else_hover');
        $('#app-header').addClass('whiteHeader')
        $('.head_img').attr('src','http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/blue_logo.svg');
        $('.active_else').attr('id','');
        //点亮第四个
        li.eq(3).addClass('id_active')
        li.eq(3).siblings().removeClass('id_active')
        li.eq(3).siblings().removeClass('active')
    }
}
$(document).scroll(function(){

    var one=document.getElementById('our_one').getBoundingClientRect().top;
    var two=document.getElementById('our_pro').getBoundingClientRect().top;
    var three=document.getElementById('module_solve').getBoundingClientRect().top;
    var four=document.getElementById('news').getBoundingClientRect().top;
    //滚动动画的设置animation
    var first=document.getElementById('animation_right1').getBoundingClientRect().top;
    var secoend=document.getElementById('animation_left').getBoundingClientRect().top;
    var thired=document.getElementById('animation_right2').getBoundingClientRect().top+555;
    //获取不变的一开始的距离头部距离
    var animal1_top=$('#animation_right1').offset().top-first;
    var animal2_top=$('#animation_left').offset().top-secoend;
    var animal3_top=$('#animation_right2').offset().top-thired;
    //导航栏颜色变化
    var li = $('.wrap li')

//          console.log(li)
    var ones=Math.abs(one);
    var twos=Math.abs(two);
    if(ones<=1180){
        //亮导航栏第一个
        if (ones>=100){
            document.getElementById("app-header").style.backgroundColor="#FFFFFF";
            document.getElementById("app-header").style.borderBottomColor="#e6e6e6";
            document.getElementById("app-header").style.color="#666666";
            document.getElementById("header").style.boxShadow="0 1px 8px 0 #d9d9d9";
            // $("id_active").removeAttr("id");
            $('.else_hover').attr('id','else_hover');
            $('.id_active').attr('id','');
            $('.head_img').attr('src','http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/blue_logo.svg');
        }else{
            $('#app-header').removeClass('whiteHeader')
            li.eq(0).siblings().removeClass('id_active')
            $('.id_active').attr('id','id_active');
            $('.else_hover').attr('id','');
            // document.getElementById("app-header").style.borderBottomColor="#94cdff";
            document.getElementById("header").style.boxShadow="0 0 0 0 #d9d9d9";
            document.getElementById("app-header").style.color="#9cd1ff";
            document.getElementById("app-header").style.backgroundColor="";
            $('.head_img').attr('src','http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/home/white_logo.svg');
            return false;
        }
        // alert(2)
        li.eq(0).addClass('id_active')
        li.eq(0).siblings().removeClass('id_active')
        li.eq(0).siblings().removeClass('active')
    }else if(two<=200&&twos<1420){
        //点亮第二个
        li.eq(2).removeClass('active')
        li.eq(1).siblings().removeClass('id_active')
        li.eq(1).addClass('active')
        li.eq(1).siblings().removeClass('active')
        // document.getElementById("id_active").style.color="#666666";
    }else if(three<=250&&three>=0){
        //点亮第三个
        li.eq(1).removeClass('active')
        li.eq(2).siblings().removeClass('id_active')
        li.eq(2).addClass('active')
        li.eq(2).siblings().removeClass('active')
    }else if(four<=100&&four>=0){
        //点亮第四个
        li.eq(3).siblings().removeClass('id_active')
        li.eq(3).addClass('active')
        li.eq(3).siblings().removeClass('active')
    }
    //动画判断
    // if(screen.width >= 1366){
        if(first<=animal1_top&&first>=0){
            // console.log(first)
            if(zoo){
                moveto('animation_right1',170);
                spanmoveto('animation_span',0);
                zoo=false;
            }
        }
        if(secoend<=animal2_top&&secoend>=0){
            if(zoo1){
                movetotwo('animation_left',1);
                spanmoveto('animation_span2',130);
                zoo1=false;
            }
        }
        if(thired<=animal3_top&&thired>=0){
            if(zoo2){
                moveto('animation_right2',170);
                spanmoveto('animation_span3',100);
                zoo2=false;
            }
        }
    // }
    //响应式
//          else if(screen.width < 1366 && screen.width >= 1024){
//          	if(first<=600&&first>=0){
//          	if(zoo){
//				moveto('animation_right1',100);
//              spanmoveto('animation_span',200);
//              zoo=false;
//              }
//          }
//          if(secoend<=600&&secoend>=0){
//          	  if(zoo1){
//				moveto('animation_left',600);
//              spanmoveto('animation_span2',130);
//              zoo1=false;
//              }
//          }
//          if(thired<=600&&thired>=0){
//          	  if(zoo2){
//
//				moveto('animation_right2',100);
//              spanmoveto('animation_span3',130);
//              zoo2=false;
//              }
//          }
//          }else if(screen.width < 1024 && screen.width >= 767){
//          	if(first<=600&&first>=0){
//          	if(zoo){
//				moveto('animation_right1',10);
//              spanmoveto('animation_span',200);
//              zoo=false;
//              }
//          }
//          if(secoend<=600&&secoend>=0){
//          	  if(zoo1){
//				moveto('animation_left',380);
//              spanmoveto('animation_span2',130);
//              zoo1=false;
//              }
//          }
//          if(thired<=600&&thired>=0){
//          	  if(zoo2){
//
//				moveto('animation_right2',10);
//              spanmoveto('animation_span3',130);
//              zoo2=false;
//              }
//          }
//          }
});
var $root = $('html, body');
$("#header").on('click','a',function(){
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top-50;
//                      console.log(targetOffset)
            $root.animate({
                    scrollTop: targetOffset
                },
                500);
            return false;
        }
    }
})


