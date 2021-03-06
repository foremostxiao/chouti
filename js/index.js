//鼠标点击 ul li 下的 active 样式切换
//入口函数
$(function () {
  //导航栏------ 鼠标点击 ul li 下的 active 样式切换
    $('.navbar-nav li').click(function () {
        //添加类名addclass、siblings查找所有兄弟元素---不包括自己
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    //中心内容导航区
    $('.top-navbar-nav li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    $('.top-navbar-nav2 li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    // 登录注册时------模态窗中的标签样式切换
    $('.pull-left .my-modal-body ul li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $($('.my-modal-body ul').siblings('div')[$(this).index()]).show().siblings('div').hide();

    });


    //注册 选择中国/海外时，区域下拉框的变化
    $('.my-country').change(function () {
        if($('.my-country option:selected').val() === '1'){
            $('.my-info-register .form-inline').hide();
        }else{
            $('.my-info-register .form-inline').show();
        }
    });




  //监听页面滚动
    $(document).scroll(function () {
        $(document).scrollTop() > 0 ? $('.move-top').show() : $('.move-top').hide();
    });

//中心内容
     //鼠标移入到内容中，显示分享的小图标
    $('.my-list-content a').each(function (index,ele) {
        $(this).hover(function () {
            $($('.pull-left p.my-p-right')[index]).css('display','block');
        },function () {
            $($('.pull-left p.my-p-right')[index]).css('display','none');
        })
    });

    //鼠标移入到内容的图片上，将小图片变成大图片
    $('.pull-right img').each(function (index,ele) {
        $(this).click(function () {
            if($(this).hasClass('big')){
                $(this).animate({width:'64px',height:'64px'},500);
                $(this).removeClass('big');

            }else {
                $(this).animate({width:'120px',height:'120px'},500);
                $(this).addClass('big');
            }
        })
    });

    //推荐-点赞-的点击事件
    $('.span_click1').each(function (index,ele) {
        var isFlag1 = true;
        $(this).click(function () {
            var count1 = $($('.span_count1')[index]).text();
            if(isFlag1){
                $($('.span_count1')[index]).text(Number(count1)+1);
                $(this).css({'background':'url(../images/icon_18_118.png) no-repeat 8px -20px','color':'#58cb05'});
                $(this).attr('title','取消推荐');
                isFlag1 = false;
            }else{
                $($('.span_count1')[index]).text(Number(count1)-1);
                $(this).css({'background':'url(../images/icon_18_118.png) no-repeat 8px -40px','color':'#9d9d9d'});
                $(this).attr('title','推荐');
                isFlag1 = true;
            }
        });
    });

    //评论的点击事件
    $('.span_click2').each(function (index,ele) {
        var isFlag2 = true;
        $(this).click(function () {
            console.log($(this).index());
            if(isFlag2){
                $($('.my-comment')[index]).show();
                $(this).css({'background':'url(../images/icon_18_118.png) no-repeat 8px -79px','color':'#63c8ff'});
                isFlag2 = false;
            }else{
                $($('.my-comment')[index]).hide();
                $(this).css({'background':'url(../images/icon_18_118.png) no-repeat 8px -99px','color':'#9d9d9d'});
                isFlag2 = true;
            }
        })
    });

    //关闭评论框
    $('.my-comment .close').each(function (index,ele) {
        $(this).click(function () {
            $($('.my-comment')[index]).hide();
            $($('.span_click2')[index]).css({'background':'url(../images/icon_18_118.png) no-repeat 8px -99px','color':'#9d9d9d'});
        })
    });

    //私藏的 点击事件
    $('.span_click3').each(function (index,ele) {
        var isFlag3 = true;
        $(this).click(function () {
            if(isFlag3){
                $(this).css({'background':'url(../images/icon_18_118.png) no-repeat 8px -139px','color':'orange'});
                $(this).attr('title','移除私藏');
                isFlag3 = false;
            }else{
                $(this).css({'background':'url(../images/icon_18_118.png) no-repeat 8px -159px','color':'#9d9d9d'});
                $(this).attr('title','加入私藏');
                isFlag3 = true;
            }
        });
    });

    //评论内容追加到 ul li 中
    $('.my-comment button').each(function (index,ele) {
        $(this).bind('click',function () {
            var date = new Date();
            var strDate = date.getFullYear() + '-' + (Number(date.getMonth())+1)+ '-' + date.getDate()
                + '&nbsp;&nbsp;' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            var comCount = $($('.com-count')[index]).text();
            var comment = $($('.my-comment textarea')[index]).val();

            var str = "<li class=\"list-group-item\"> <small>" +
                "<span class=\"com-span1\"></span>" +
                "<span class=\"com-span2\">victor</span> " +
                "<span class=\"com-span3\">"+comment+"</span> " +
                "<span class=\"com-span4\">"+strDate+"&nbsp;发布</span> " +
                "</small></li> ";

            $($('.my-comment ul.list-group')[index]).append(str);
            $($('.com-count')[index]).text(Number(comCount)+1);
            $($('.span_count2')[index]).text(Number(comCount)+1);
            $($('.my-comment textarea')[index]).val('');
        })
    });

   //回到顶部 点击事件
    $('.move-top img').click(function () {
          $("html,body").animate({scrollTop:0}, 500);
          return false;
    });



});

//注册登录页面
//点击的时候触发和当前模态窗口状态相反的操作
function login() {
    $('#myModal').modal({
        show:true
    });
    /* 为了弹出框 弹出时滚动条不消失 背景不影响*/
    $('body').css('padding-right','0');
    //刚开始把注册是填写资料隐藏
    $('.my-info-register').hide();
    //先把用户名登录隐藏起来
    $('.my-user-login').hide();

}

//注册 选择下一步时的操作
function btnNext() {
    $('.my-phone-register').hide();
    $('.my-info-register').show();
    $('.my-btn-next').hide();
    $('.my-btn-submit').show();
    $('.pull-right .my-modal-body ul li').last().addClass('active').siblings('li').removeClass('active');
}

//发布
function publish() {
    $('.modal-publish').modal({
       show:true
    });
    /* 为了弹出框 弹出时滚动条不消失 背景不影响*/
    $('body').css('padding-right','0');
    $('.my-modal-body2 ul li').click(function () {
           $(this).addClass('active').siblings('li').removeClass('active');
            $($('.my-modal-body2 ul').siblings('div')[$(this).index()]).show().siblings('div').hide();
       });
    $('.publish2').hide()
    $('.publish3').hide()

}
