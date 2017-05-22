<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>德福账号确认</title>
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
    <div class="register-steps bg_register_step1">
        <span class="stepsText">注册信息</span><span class="stepsText2">确认信息</span><span class="stepsText3">提交成功</span>
    </div>

<!--content begin-->
<!--当没有进度条时给RegisterBox后添加类 outRegisterBox，撑开内容和顶部的距离-->
<div class="RegisterBox">
<!--托福/雅思 页头 大标题-->
<div class="RegisterHeadTitle">
    德福账号确认
</div>
<!--考生需知-->
<div class="register-information-box">
    <!--信息标题-->
    <div class="informationTitle">
        考生需知：
    </div>
    <div class="register-info-box">
        <ol>
            <li>中国大陆德福考试（TestDaf）考试每年共设置3场考试，时间分别在每年的3月，7月，11月。</li>
            <li>每次考试都有正式的报名截止日，通常报名截至日期为考试日前至少7周。</li>
            <li>请妥善保管好自己的账号及密码，不要向他人透露账号信息。</li>
            <li>单次考试结束后，德福官网将收回所有账号信息，同一账号无法报名不同月份的考试。</li>
        </ol>
        <div class="prompt-message2">注释：用于报名3月德福考试的账号，在考试结束后便注销，无法用于其他场次的报名。 </div>
    </div>

</div>


<!--按钮-->
<div class="registerBtnBox">
    <!--按钮置灰不可用样式，提交按钮替换为类 btn-sureNoSubmit，黑按钮替换为类 btn-noTemporary-->
    <button class="btn-temporary">我已经完成注册</button><button class="btn-sureSubmit">我要注册新账号</button>
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
            <p class="foot-text2">电子邮箱：contact@qiangkaowei.org</p>
        </p>
    </div>
</footer>
<!--} 友情链接与版权 -->
</body>
</html>