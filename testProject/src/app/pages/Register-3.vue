<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>确认信息</title>
    <!--bootstrap-->
    <link href="content-web/css/bootstrap.min.css" rel="stylesheet">
    <link href="content-web/css/style.css" rel="stylesheet" type="text/css">
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

<!--注册进度  进度条分割状态，默认bg_register_step1，第二第三状态分别为bg_register_step2，bg_register_step3替换之前的类-->
<div class="register-steps bg_register_step3">
    <span class="stepsText">注册信息</span><span class="stepsText2">确认信息</span><span class="stepsText3">提交成功</span>
</div>

<!--content begin-->
<div class="outRegisterBox">
    <div class="RegisterBox">
        <!--注册成功文案-->
        <div class="RegisterSuccess Register-HS-box">
            <div class="Register-HS-inner">
                <p>正在帮您注册中</p>
                <p>注册成功后，考位君会立即短信通知您！</p>
            </div>
            <!-- 高速代报 入口引导 -->
            <div class="HS-entrance-style1"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>
        </div>

        <!--返回首页-->
        <div class="registerBtnBox btnSuccessBox">
            <!--<a hrindex.vuehtml" class="btn-sureSubmit">返回我的注册</a>-->
        </div>
    </div>
</div>
<!--content end-->

<!--content begin-->
<div class="outRegisterBox">
    <div class="RegisterBox">
        <!--注册成功文案-->
        <div class="RegisterSuccess">
            <p>正在帮您注册中</p>
            <p>注册成功后，考位君会立即短信通知您！</p>
        </div>

        <!--返回首页-->
        <div class="registerBtnBox btnSuccessBox">
            <!--<a hrindex.vuehtml" class="btn-sureSubmit">返回主页</a>-->
        </div>
    </div>
</div>
<!--content end-->

<!-- 友情链接与版权 {-->
<footer class="footer">
    <div class="container">
        <div class="foot-links-box">
            <h3>友情链接</h3>
            <div class="foot-links"><!-- 若增加一行友情链接，需复制ul这层dom，并且修改footer的高度来适应固定显示在底部的布局 -->
                <a href="http://www.jiemo.net" target="_blank">芥末网</a><span class="foot-links-line"></span><a href="http://www.niuschools.com" target="_blank">牛校网</a><span class="foot-links-line"></span><a href="http://www.langlib.com/" target="_blank">朗播网</a><span class="foot-links-line"></span><a href="http://www.zhangyan.com" target="_blank">张艳英语网</a><span class="foot-links-line"></span><a href="http://www.yeeaoo.com" target="_blank">亦鸥托福口语</a><span class="foot-links-line"></span><a href="http://www.uker.net" target="_blank">中英网</a><span class="foot-links-line"></span><a href="http://www.usaer.net" target="_blank">中美网</a><span class="foot-links-line"></span><a href="http://www.ibtsat.com" target="_blank">无老师私塾</a>
            </div>
        </div>
        <p class="foot-text">
        <p class="foot-text2"><span>电子邮箱：contact@qiangkaowei.org</span><span>联系电话：8523820304&nbsp;&nbsp;82377348</span></p>
        <p class="foot-text2">电子邮箱：contact@qiangkaowei.org</p>
        </p>
    </div>
</footer>
<!--} 友情链接与版权 -->
</body>
</html>