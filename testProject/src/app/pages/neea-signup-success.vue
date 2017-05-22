<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--代注册二次确认</title>
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
                    <li><a href="Registration-home.vue" title="抢考位"><em class="navIcon2"></em>抢考位</a></li>
                    <li><a href="CheckScores-guide-page.vue" title="查出分"><em class="navIcon3"></em>查出分</a></li>
                    <li><a href="Examination-room-home.vue" title="看考场"><em class="navIcon4"></em>看考场</a></li>
                    <li><a href="Help-home.vue" title="问问"><em class="navIcon5"></em>问问</a></li>
                    <li><a href="http://bbs.kaowei.org/forum.php" target="_blank" title="社区"><em class="navIcon6"></em>社区</a></li>
                    <li class="active"><a href="Register-1.vue" title="代注册"><em class="navIcon7"></em>代注册</a></li>
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

<!--代注册二次确认-->
<div class="neea-signup-box">
    <div class="neea-signup-successBg"><span></span></div>
    <div class="neea-signup-content">
        <h2>报名成功</h2>
        <div class="infoTxt">报名结果我们将在30分钟之内通知您！</div>
        <p>2015年10月10日</p>
        <p>天津</p>
        <p>北京大学</p>
        <p>托福/雅思考位代报</p>
        <div class="neea-signup-btn">
            <button class="btn neea-signup-backSignup" type="submit">返回我的报名</button>
            <div><a href="#" class="btn neea-signup-back">免费领取托福礼包</a></div>
        </div>
        <p class="neea-warning">*近期为高考需求高峰期，最终结果抢考位君将以免费短信方式通知您。</p>
        <p class="neea-warning">*委托代报截止日期为XXX年XX月XX日。</p>
        <div class="neea-signup-pic"><a href=""><img src="content-web/images/pic7_1.jpg"></a></div>
    </div>
</div>

<!--出分成功 {-->
<div class="neea-signup-box" >
    <div class="neea-successBg2"><span></span></div>
    <div class="neea-signup-content">
        <h2>出分成功</h2>
        <div class="infoTxt">您的报名申请已经提交成功，正在为您跳转...<br>
            查看结果点击<a href="#" class="link-base3">我的出分 &gt;</a>
        </div>
        <ul class="succeed-info2">
            <li>托福出分</li>
        </ul>

        <!-- 高速代报 入口引导 -->
        <div class="HS-entrance-style1"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>

        <div class="neea-signup-btn">
            <button class="btn neea-signup-backSignup" type="submit">返回我的报名</button>
            <div><a href="#" class="btn neea-signup-back">免费领取托福礼包</a></div>
        </div>
        <div class="neea-signup-pic"><a href=""><img src="content-web/images/pic7_1.jpg"></a></div>
    </div>
</div>
<!--} 出分成功 -->

<!--订阅成功 {-->
<div class="neea-signup-box">
    <div class="neea-successBg2"><span></span></div>
    <div class="neea-signup-content">
        <h2>订阅成功</h2>
        <div class="infoTxt">您的报名申请已经提交成功，正在为您跳转...<br>
            查看结果点击<a href="#" class="link-base3">我的订阅 &gt;</a>
        </div>
        <ul class="succeed-info2">
            <li>2015年06月20日</li><li>北京</li><li>北京大学</li><li>托福</li>
        </ul>
        <div class="neea-signup-btn">
            <button class="btn neea-signup-backSignup" type="submit">返回我的报名</button>
            <div><a href="#" class="btn neea-signup-back">免费领取托福礼包</a></div>
        </div>
        <div class="neea-signup-pic"><a href=""><img src="content-web/images/pic7_1.jpg"></a></div>
    </div>
</div>
<!--} 订阅成功 -->

<!--出分成功，微信提醒 {-->
<div class="neea-signup-box" style="display: none;">
    <div class="neea-successBg2"><span></span></div>
    <div class="neea-signup-content">
        <h2>出分成功</h2>
        <div class="infoTxt score-info">托福出分微信提醒开通成功！<br>
            <!--查看结果点击<a href="#" class="link-base3">我的订阅 &gt;</a>-->
            <span class="gray_txt">有效期：2017年3月15日至2017年4月14日</span>
        </div>
        <p class="remind-bind-wx score-info"> <span>点击按钮</span>绑定后，才能收到出分提醒哦～</p>
        <ul class="succeed-info2">
            <li>托福出分</li>
        </ul>
        <div class="neea-signup-btn">
            <button class="btn neea-score-btn" type="submit">绑定微信通知</button>
            <!--<div><a href="#" class="btn neea-signup-back">免费领取托福礼包</a></div>-->
        </div>
        <!--<div class="neea-signup-pic"><a href=""><img src="content-web/images/pic7_1.jpg"></a></div>-->
    </div>
</div>
<!--} 出分成功，微信提醒 -->

<!--续时成功 {-->
<div class="neea-signup-box">
    <div class="neea-successBg2"><span></span></div>
    <div class="neea-signup-content">
        <h2>续时成功</h2>
        <div class="infoTxt">托福微信出分提醒续时30天！<br>
            <!--查看结果点击<a href="#" class="link-base3">我的订阅 &gt;</a>-->
            <span class="gray_txt">有效期：2017年3月15日至2017年4月14日</span>
        </div>
        <ul class="succeed-info2">
            <li>托福出分</li>
        </ul>
        <div class="HS-entrance-style1"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>
        <div class="neea-signup-btn">
            <button class="btn neea-score-btn" type="submit">返回我的出分</button>
            <!--<div><a href="#" class="btn neea-signup-back">免费领取托福礼包</a></div>-->
        </div>
        <!--<div class="neea-signup-pic"><a href=""><img src="content-web/images/pic7_1.jpg"></a></div>-->
    </div>
</div>
<!--} 续时成功 -->

<!--提交报名成功 {-->
<div class="neea-signup-box">
    <div class="neea-signup-successBg"><span></span></div>
    <div class="neea-signup-content">
        <h2>提交报名成功</h2>
        <div class="infoTxt">
            <span class="bigger-font">报名结果我们将在30分钟之内通知您！</span>
            <br>
            <!--查看结果点击<a href="#" class="link-base3">我的订阅 &gt;</a>-->
            <span class="gray_txt">2015年06月20日<br/> 北京 <br/>北京大学</span>

        </div>
        <ul class="succeed-info2">
            <li>托福考位代报</li>
        </ul>
        <div class="clearfix submit-apply-succeed">
            <span class="floatL">出分提醒方式：微信出分提醒</span>
            <span class="floatR">价格：0.00元</span>
        </div>
        <div class="submit-apply-succeed">
            有效期：2017年3月15日至2017年4月14日
        </div>
        <p class="remind-bind-wx"> <span>绑定微信</span>后，才能收到出分提醒哦～</p>
        <div class="neea-signup-btn">
            <button class="btn neea-score-btn" type="submit">立即绑定</button>
            <!--<div><a href="#" class="btn neea-signup-back">免费领取托福礼包</a></div>-->
        </div>
        <!--<div class="neea-signup-pic"><a href=""><img src="content-web/images/pic7_1.jpg"></a></div>-->
    </div>
</div>
<!--} 提交报名成功 -->

<!--温馨提示 {-->
<div class="neea-signup-box warm-prompt">
    <div class="outer-box">
        <div class="neea-signup-successBg warm-prompt"><span></span></div>
        <div class="right-content-box">
            托福出分提醒功能已升级！<br/>请选择短信出分提醒或微信出分提醒，若超过<br/>5天仍未选择，系统将自动绑定微信出分提醒 <br/>
            <button class="btn"></button>
        </div>
    </div>
</div>
<!--} 温馨提示 -->

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
            <!--<p class="foot-text2"><span>电子邮箱：contact@qiangkaowei.org</span><span>联系电话：8523820304&nbsp;&nbsp;82377348</span></p>-->
        <p class="foot-text2">电子邮箱：contact@qiangkaowei.org</p>
        </p>
    </div>
</footer>
<!--} 友情链接与版权 -->
</body>
</html>