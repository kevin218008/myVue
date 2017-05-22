<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--高速代报-引导支付页</title>
    <!-- Bootstrap -->
    <link href="content-web/css/bootstrap.min.css" rel="stylesheet">
    <link href="content-web/css/style.css" rel="stylesheet">

</head>

<body>
<!-- 导航 {-->
<header>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-header">
                <!-- logo {-->
                <a class="navbar-brand logo" href="#"></a>
                <!--} logo -->
            </div>
            <div class="navbar-collapse collapse">
                <!-- 导航项 {-->
                <ul class="nav navbar-nav head-nav">
                    <!--当前导航 li上增加样式名  class="active" -->
                    <li><a href="#" title="高速待报"><em class="navIcon8"></em>高速待报</a></li>
                    <li class="active"><a href="Registration-home.vue" title="抢考位"><em class="navIcon2"></em>抢考位</a></li>
                    <li><a href="CheckScores-guide-page.vue" title="查出分"><em class="navIcon3"></em>查出分</a></li>
                    <li><a href="#" title="代注册"><em class="navIcon7"></em>代注册</a></li>
                    <li><a href="Examination-room-home.vue" title="看考场"><em class="navIcon4"></em>看考场</a></li>
                    <li><a href="Help-home.vue" title="问问"><em class="navIcon5"></em>问问</a></li>
                    <li><a href="http://bbs.kaowei.org/forum.php" target="_blank" title="社区"><em class="navIcon6"></em>社区</a></li>
                </ul>
                <!--} 导航项 -->

                <!-- 登录与登录后 {-->
                <ul class="nav navbar-nav navbar-right head-link">
                    <!--登录前 {-->
                    <li><img src="content-web/images/icon_bg2_1.png" class="img-circle"><a href="login&register.vue">登录</a>/<a href="login&register.vue">注册</a></li>
                    <!--注：1、圆角头像需要再img标签跟随样式 img-circle；
                           2、默认头像（目前没有上传头像功能）登录后img的src地址变为 icon_bg2_2.png -->
                    <!--} 登录前 -->
                    <!--登录后  推测结果，需要UI确认 {-->
                    <li style="display: none;"><img src="content-web/images/icon_bg2_1.png" class="img-circle"><a href="User-center.vue" class="head-username">个人中心</a>/<a href="#">注销</a></li>
                    <!--} 登录后 -->
                </ul>
                <!--} 登录与登录后 -->

            </div>
        </div>
    </nav>
</header>
<!--} 导航 -->

<!-- content {-->
<div class="content-box-s1 HS-register_wrap3">
    <div class="apply-pay-box" style="display: none;">
        <div class="HS-register_title1">确认订单信息，立即支付</div>
        <div class="HS-register-box2">
            <div class="HS-inner-box5">
                <p>您的订单已成功提交！<br>请点击下方按钮，尽快支付。</p>
                <div class="text-s12">待支付金额：<span>588元</span></div>
            </div>
        </div>
        <div class="HS-register-box2">
            <div class="HS-inner-box6 UC-HS-register-box1">
                <div class="text-s9">高速代报信息确认</div>
                <div class="the-whole-box">
                    <label>已开通钻石级高速代报</label>
                </div>
                <div class="the-whole-box">
                    <label>手机号码：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>考试科目：</label><div class="itemR">托福</div>
                </div>
                <div class="the-whole-box">
                    <label>NEEA账号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>时间：</label>
                    <div class="itemR">
                        <span>2016.11.19</span>   <span>2016.11.19</span>   <span>2016.11.19</span>   <span>2016.11.19</span>   <span>2016.11.19</span>
                        <span>2016.11.19</span>   <span>2016.11.19</span>   <span>2016.11.19</span>   <span>2016.11.19</span>   <span>2016.11.19</span>
                        <span>2016.11.19</span>   <span>2016.11.19</span>
                    </div>
                </div>
                <div class="the-whole-box">
                    <label>考试地点：</label>
                    <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                        <span>北京工商大学</span>
                    </div>
                </div>
            </div>
        </div>

        <!--新增客服联系方式 {-->
        <div class="HS-register-box9">
            <div class="item icon1">
                <strong class="text-s13">联系电话</strong>
                <span>0571-56758695</span>
            </div>
            <div class="item icon2">
                <strong class="text-s13">工作时间</strong>
            <span class="text-s14">
                周一至周五： 10：00 - 19：00<br>周六至周日： 11：00 - 18：00
            </span>
            </div>
        </div>
        <!--} 新增客服联系方式 -->
    </div>
    <!--出分提醒方式订单详情{-->
    <div class="score-order-box" >
        <div class="order-title">出分提醒方式</div>
        <div class="order-detail">
            <div class="order-detail-title">短信出分提醒</div>
            <div class="order-detail-content">
                <div>考试科目：托福    &nbsp;&nbsp;NEEA账号：123456</div>
                <div class="validate-time">长期有效（绑定出分提醒期间）</div>
                <div class="order-pay">待支付金额：<span>29.90元</span></div>
            </div>
        </div>
    </div>
    <!--}出分提醒方式订单详情-->
    
    <!--扫码支付后,代付金额{-->
    <div class="score-order-box to-pay">
        <div class="order-title">出分提醒方式</div>
        <div class="order-detail">

            <div class="order-detail-title wx">微信出分提醒</div> <!--如果是短信方式,将class:wx变成msg-->
            <div class="order-detail-content">
                <div>考试科目：托福    &nbsp;&nbsp;NEEA账号：123456</div>
                <div class="validate-time">长期有效（绑定出分提醒期间）</div>
            </div>
        </div>
        <div class="confirm-submit clearfix">
            <span class="warning">确认提交后，继续使用出分提醒服务～</span><span class="to-pay">待支付金额:</span><span class="fee">0.00元</span>
            <button class="floatR">确认提交</button>
        </div>
    </div>
    <!--}扫码支付后,代付金额-->

    <div class="HS-inner-box7 clearfix" >
        <div class="item pay-ali"><!--不可用增加样式 disabled  -->
            <label><input type="radio" name="pay" checked><span>支付宝支付</span></label>
        </div>
        <div class="item pay-weChat"><!--不可用增加样式 disabled  -->
            <label><input type="radio" name="pay" disabled><span>微信支付</span></label>
        </div>
        <div class="item">
            <a href="#" class="item-link">我没有支付宝和微信，找君君代付</a>
        </div>
        <!-- 支付宝支付 -->
        <div class="inner-box">
            <div class="boxL">
                <img src="content-web/images/pic9_1.jpg">
                <div class="pay-text">打开手机支付宝<br>扫一扫继续付款</div>
            </div>
            <div class="boxR">
                <button type="button" class="btn pay-btn">登陆账户付款</button>
            </div>
        </div>
        <!-- 微信支付 -->
        <div class="inner-box" style="display: none;">
            <div class="boxL2">
                <p>使用微信扫一扫即可付款</p>
                <img src="content-web/images/pic9_1.jpg">
                <div class="pay-text2">二维码有效期1小时</div>
            </div>
            <div class="boxR2">
                <img src="content-web/images/pic9_2.png">
            </div>
        </div>

    </div>


</div>
<!--} content -->

<!-- 友情链接与版权 {-->
<footer class="footer">
    <div class="container">
        <div class="foot-links-box">
            <h3>友情链接</h3>
            <div class="foot-links"><!-- 若增加一行友情链接，需复制ul这层dom，并且修改footer的高度来适应固定显示在底部的布局 -->
                <a href="http://www.ibtsat.com" target="_blank">无老师私塾英语网</a><span class="foot-links-line"></span><a href="http://www.niuschools.com" target="_blank">牛校网</a><span class="foot-links-line"></span><a href="http://www.langlib.com/" target="_blank">朗播网</a><span class="foot-links-line"></span><a href="http://www.zhangyan.com" target="_blank">张艳英语网</a><span class="foot-links-line"></span><a href="http://www.yeeaoo.com" target="_blank">亦鸥托福口语</a><span class="foot-links-line"></span><a href="http://www.uker.net" target="_blank">中英网</a><span class="foot-links-line"></span><a href="http://www.usaer.net" target="_blank">中美网</a>
            </div>
        </div>
        <p class="foot-text">qiangkaowei 2015. All rights reserved.</p>
    </div>
</footer>
<!--} 友情链接与版权 -->

</body>
</html>