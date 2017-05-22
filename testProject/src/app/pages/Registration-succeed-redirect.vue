<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--考位报名成功跳转页面</title>
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
                    <!--<li><a hrindex.vuehtml" title="首页"><em class="navIcon1"></em>首页</a></li>-->
                    <li class="active"><a href="Registration-home.vue" title="抢考位"><em class="navIcon2"></em>抢考位</a></li>
                    <li><a href="CheckScores-guide-page.vue" title="查出分"><em class="navIcon3"></em>查出分</a></li>
                    <li><a href="Examination-room-home.vue" title="看考场"><em class="navIcon4"></em>看考场</a></li>
                    <li><a href="Help-home.vue" title="问问"><em class="navIcon5"></em>问问</a></li>
                    <li><a href="http://bbs.kaowei.org/forum.php" target="_blank" title="社区"><em class="navIcon6"></em>社区</a></li>
                    <li><a href="Register-1.vue" title="代注册"><em class="navIcon7"></em>代注册</a></li>
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
                    <li style="display: none;"><img src="content-web/images/icon_bg2_1.png" class="img-circle"><a href="User-center.vue">个人中心</a>/<a href="#">注销</a></li>
                    <!--} 登录后 -->
                </ul>
                <!--} 登录与登录后 -->

            </div>
        </div>
    </nav>
</header>
<!--} 导航 -->

<!-- 考位报名成功跳转外框 {-->
<div class="container">
    <div class="row">
        <div class="col-xs-3">
            <div class="q_version1-box"></div>
        </div>
        <div class="col-xs-9">
            <div class="succeed-redirect-box">
                <em></em>
                <p>您的报名申请已经提交成功，正在为您跳转...</p>
                <p>或者点击<a href="#" class="link-base">我的报名</a>查看结果&gt;&gt;</p>
                <ul class="succeed-redirect-info">
                    <li>雅思普通学术类</li>
                    <li>2015年06月20日</li>
                    <li>北京</li>
                    <li>北京大学</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!--} 考位报名成功跳转外框 -->

<!-- 友情链接与版权 {-->
<footer class="footer">
    <div class="container">
        <div class="foot-links-box">
            <h3>友情链接</h3>
            <div class="foot-links"><!-- 若增加一行友情链接，需复制ul这层dom，并且修改footer的高度来适应固定显示在底部的布局 -->
                <a href="http://www.jiemo.net" target="_blank">芥末网</a><span class="foot-links-line"></span><a href="http://www.niuschools.com" target="_blank">牛校网</a><span class="foot-links-line"></span><a href="http://www.langlib.com/" target="_blank">朗播网</a><span class="foot-links-line"></span><a href="http://www.zhangyan.com" target="_blank">张艳英语网</a><span class="foot-links-line"></span><a href="http://www.yeeaoo.com" target="_blank">亦鸥托福口语</a><span class="foot-links-line"></span><a href="http://www.uker.net" target="_blank">中英网</a><span class="foot-links-line"></span><a href="http://www.usaer.net" target="_blank">中美网</a><span class="foot-links-line"></span><a href="http://www.ibtsat.com" target="_blank">无老师私塾</a>
            </div>
        </div>
        <p class="foot-text">qiangkaowei 2015. All rights reserved. <a href="aboutus.vue" class="link-s2">About us</a></p>
    </div>
</footer>
<!--} 友情链接与版权 -->

</body>
</html>