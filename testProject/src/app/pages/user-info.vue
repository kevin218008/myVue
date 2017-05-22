<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位-- 用户属性</title>
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

<!-- content  用户属性 {-->
<div class="content-box-s1 user-info-wrap">
    <div class="courseSale-head">
        <em></em><span class="courseSale-title">完善信息</span>
    </div>
    <div class="user-info-title"><span class="color-red">*</span>您的年龄<span class="color-gray">(必选)</span></div>
    <div class="user-info-box1">
        <span>初一</span><span class="check">初二</span><span class="disabled">初三</span><span>高一</span><span>高二</span><span>高三</span><span>大一</span><span>大二</span><span>大三</span><span>大四</span><span>研一</span><span>研二</span><span>上班族</span><span>其他</span>
    </div>
    <div class="user-info-title"><span class="color-red">*</span>考试意向<span class="color-gray">(必选)</span></div>
    <div class="user-info-box1">
        <span>托福</span><span class="check">雅思</span><span class="disabled">SAT</span><span>GRE</span><span>GMAT</span><span>其他</span>
    </div>
    <div class="user-info-title"><span class="color-red">*</span>意向国家<span class="color-gray">(必选)</span></div>
    <div class="user-info-box1">
        <span>英国</span><span>美国</span><span>加拿大</span><span>澳洲</span><span>新西兰</span><span>新加坡</span><span>中国香港</span>
    </div>
    <div class="user-info-title"><span class="color-red">*</span>预计出国时间<span class="color-gray">(必选)</span></div>
    <div class="user-info-box1">
        <span>2017</span><span class="check">2018</span><span class="disabled">三年后</span>
    </div>
    <div class="user-info-box2">
        <span class="user-info-title">真实姓名</span><input type="text" class="input-text" placeholder="请输入您真实姓名">
    </div>
    <div class="user-info-box2 qq-box">
        <span class="user-info-title">QQ号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="text" class="input-text" placeholder="请输入您的QQ号"><span class="tips">我们将通过QQ不定期发放福利</span>
    </div>
    <div class="user-info-box3 clearfix">
        <div class="color-gray">
            • 抢考位根据您录入的信息进行精准分析，并为您量身定制个性化的抢位、培训、留学方案。所以请务必认真填写每个栏目哦！
        </div>
        <button type="button" class="btn btn-sureSubmit">立即提交</button>
    </div>

</div>
<!-- content  用户属性 {-->

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