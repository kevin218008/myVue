<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--高速代报-支付结果页</title>
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

<!-- 出分提醒支付成功跳转页面 {-->
<div class="neea-signup-box">
    <div class="HS-register-successBG"></div>
    <div class="neea-signup-content score-pay-succeed">
        <h2 class="remind-text">支付成功，您已成功付款29.90元！</h2>
        <div class="UC-HS-register-box1 HS-register-box6">
            <div class="text-s11">托福短信出分提醒开通成功！官网公布分数后，考位君会第一时间通知您～</div>
            <div class="text-box2">
                <div class="the-whole-box">
                    <label>支付宝方式：</label><div class="itemR">支付宝</div>
                </div>
                <div class="the-whole-box">
                    <label>订单支付日期：</label><div class="itemR">2016年9月30日</div>
                </div>
            </div>
            <div class="the-whole-box">
                <label>考试科目：</label><div class="itemR">托福</div>
            </div>
            <div class="the-whole-box">
                <label>NEEA号：</label><div class="itemR">13813544</div>
            </div>
            <div class="the-whole-box">
                <label>出分提醒有效期：</label>
                <div class="itemR">
                    长期有效（绑定出分提醒期间）
                </div>
            </div>
            <div class="not-bind-wx"><span>绑定微信</span>后，才能收到出分提醒哦～</div> <!--未绑定微信提醒-->
            <div class="neea-signup-btn">
                <button class="btn neea-signup-backSignup back-myScore" type="submit">
                    返回我的出分<!--未绑定微信就改为：立即绑定-->
                </button>
            </div>

        </div>
    </div>
</div>
<!--}  出分提醒支付成功跳转页面-->

<!-- 成功跳转页面 {-->
<div class="neea-signup-box">
    <div class="HS-register-successBG"></div>
    <div class="neea-signup-content score-pay-succeed">
        <h2 class="remind-text">支付成功，您已成功付款200元！</h2>
        <div class="UC-HS-register-box1 HS-register-box6">
            <div class="text-s11">钻石级通道开通成功，您的信息已提交进入高速报名队列</div>
            <div class="text-box2">
                <div class="the-whole-box">
                    <label>支付宝账户：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>订单支付日期：</label><div class="itemR">2016年9月30日</div>
                </div>
            </div>
            <div class="the-whole-box">
                <label>考试科目：</label><div class="itemR">托福</div>
            </div>
            <div class="the-whole-box">
                <label>报名号：</label><div class="itemR">4564989496</div>
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
                <label>城市：</label><div class="itemR">浙江省杭州市</div>
            </div>
            <div class="the-whole-box">
                <label>考试地点：</label>
                <div class="itemR"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                    <span>北京工商大学</span><span>北京外国语大学</span> <span>北京师范大学</span> <span>北京大学</span> <span>北京第二外国语学院</span> <span>北京语言大学</span> <span>NEEA赛尔教育科技发展有限公司</span> <span>北京航空航天大学</span>  <span>中央广播电视大学培训中心</span> <span>北京理工大学</span> <span>中央财经大学中央财经大学沙河校区</span> <span>北京市教育考试指导中心</span>
                </div>
            </div>
            <!--出分提醒详情{-->
            <div class="score-bind-detailBox">
                <div class="the-whole-box">
                    <label>出分提醒方式：</label><div class="itemR">微信出分提醒</div>
                </div>
                <div class="the-whole-box">
                    <label>价格：</label><div class="itemR">0.00元</div>
                </div>
                <div class="the-whole-box">
                    <label>有效期：</label><div class="itemR">2017年3月15号至2017年4月14号</div>
                </div>
            </div>
            <div class="not-bind-wx"><span>绑定微信</span>后，才能收到出分提醒哦～</div> <!--未绑定微信提醒-->
            <!--}出分提醒详情-->
            <div class="neea-signup-btn">
                <button class="btn neea-signup-backSignup back-myScore" type="submit">
                    <!--查看我的报名-->
                    立即绑定
                    <!--未绑定则改为:立即绑定-->
                </button>
            </div>

        </div>
    </div>
</div>
<!--}  成功跳转页面-->

<!-- 失败跳转页面 {-->
<div class="neea-signup-box">
    <div class="HS-register-failBG"><span></span></div>
    <div class="neea-signup-content">
        <h2 class="remind-text">抱歉，支付失败！</h2>
        <div class="HS-register-box7">
            <p>支付失败原因：支付宝余额不足</p>

            请点击链接<a href="#">http://www.kaowei.org/UserCenter#/registration</a>，重新支付
        </div>

    </div>
</div>

<!--}  失败跳转页面-->

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