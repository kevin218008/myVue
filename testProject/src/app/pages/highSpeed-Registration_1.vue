<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--高速代报-填写信息</title>
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
<div class="content-box-s1 HS-register_wrap1 HS-register_title1">填写信息，快速报名</div>

<div class="content-box-s1 HS-register_wrap1">
    <div class="HS-register_title2"><em class="icon1"></em>意向考试时间</div>
    <div class="HS-register_box1">
        <div class="HS-register_inner1">
            <dl class="ExamChooseBox clearfix">
                <dt class="ExamChooseDate"><select class="form-control"><option>2016年12月</option></select></dt>
                <dd>
                    <button type="button" class="ExamChooseBtn Current"><strong>13</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                    <!--选中按钮增加样式  Current 、 选择完毕其余变为不可选按钮 增加样式 disabled -->

                    <button type="button" class="ExamChooseBtn disabled"><strong>14</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                    <!--当没有逾期样式时，给DateBox里放周几的em添加类out-time2,字号不变与左侧文字底对齐-->
                    <button type="button" class="ExamChooseBtn"><strong>27</strong><span class="DateBox"><em class="out-time2">周六</em></span></button>
                    <button type="button" class="ExamChooseBtn"><strong>13</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                    <button type="button" class="ExamChooseBtn"><strong>14</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                    <button type="button" class="ExamChooseBtn"><strong>27</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                    <button type="button" class="ExamChooseBtn"><strong>2</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                </dd>
            </dl>
            <button type="button" class="delete-lineDate"></button>
        </div>

        <div class="HS-register_inner1">
            <button type="button" class="HS-register_btn">新增一个月份</button>
        </div>
        <div class="HS-register_inner1">
            <span class="text-s1">*&nbsp;您可以选择两个月内的所有考试，请至少选择一个考试时间</span>
        </div>

        <div class="error-msg2" style="display: none;">至少选择一个考试时间</div>
    </div>

    <div class="HS-register_title2"><em class="icon2"></em>意向考试城市</div>
    <div class="HS-register_box1">
        <div class="HS-register_inner1 two-column clearfix">
            <div class="pull-left"><select class="form-control registerError"><option>省</option></select></div>
            <!-- 报错的情况下，给下拉菜单增加样式  registerError　-->
            <div class="pull-right"><select class="form-control" disabled><option>市</option></select></div>
        </div>
        <div class="HS-register_inner2">
            <button type="button" class="btn-page turn-left" style="display: none;"></button>
            <ul class="HS-place-box clearfix">
                <li><label><input type="checkbox"><span>湖北楚才考试服务有限公司（湖北省考试院沙湖考试基地）</span></label></li>
                <li><label><input type="checkbox"><span>北京外国语大学国际教育学院（东院逸夫楼考场）</span></label></li>
                <li><label><input type="checkbox"><span>北京外国语大学国际教育学院（东院逸夫楼考场）</span></label></li>
                <li><label><input type="checkbox"><span>北京外国语大学国际教育学院（东院逸夫楼考场）</span></label></li>
                <li><label><input type="checkbox"><span>北京外国语大学国际教育学院（东院逸夫楼考场）</span></label></li>
                <li><label><input type="checkbox"><span>北京外国语大学国际教育学院（东院逸夫楼考场）</span></label></li>
                <li><label><input type="checkbox"><span>北京外国语大学国际教育学院（东院逸夫楼考场）</span></label></li>
            </ul>

            <button type="button" class="btn-page turn-right"></button>
        </div>
        <div class="HS-register_inner1">
            <span class="text-s1">*&nbsp;建议选择所有考点，抢位成功率会显著提升哦~</span>
        </div>

        <!-- 无数据样式 -->
        <div class="HS-register_inner3">您选择的考试时间和城市，暂无考试安排，请换个试试吧~</div>

        <div class="error-msg2" style="/*display: none;*/">至少选择一个城市</div>
    </div>
</div>

<div class="content-box-s1 HS-register_wrap1">
    <div class="HS-register_title2"><em class="icon3"></em>填写托福考试账号</div>
    <div class="HS-register_box1">

        <form class="form-signin">
            <!-- 已绑定账号代码 {-->
            <div class="form-group binding-form" style="display: none;">
                <label>NEEA&nbsp;账号</label>
                <strong>2039430101</strong>
                <button class="btn-s7" type="button">取消绑定</button>
            </div>
            <!--} 已绑定账号代码 -->

            <!-- 未绑定账号代码 {-->
            <div class="box-style">
                <span class="text_s1">NEEA&nbsp;账号</span>
                <input type="tel" class="form-control registerError" placeholder="请输入NEEA账号">
                <!-- 报错的情况下，给下拉菜单增加样式  registerError　-->
                <span class="text-s2">没有NEEA账号？请先点击暂存按钮保存您的信息，然后戳<a href="#">这里</a>，君君 带你去<a href="#">注册</a>哦~</span>
            </div>
            <!--} 未绑定账号代码 -->

            <div class="box-style">
                <span class="text_s1">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span>
                <input type="password" class="form-control" placeholder="请输入密码">
                <!-- 报错的情况下，给下拉菜单增加样式  registerError　-->
            </div>
            <div class="checkbox">
                <label><input type="checkbox" value="remember-me"> 已阅读并同意<a class="link-base" href="#">《网上报名协议》</a></label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" value="remember-me"> 同步绑定出分提醒</label>
            </div>
            <div class="tips-s1">
                若中途取消出分提醒／解绑考试账号，将无法收到出分提醒。
            </div>
            <div class="tips-s1">
                微信提醒只针对出分功能，其他功能仍以短信方式通知。
            </div>
            <div class="tips-s1">
                以上用户信息仅用于委托代理，考位君会为您的私人信息严格保密。请确认提交信息的准确性。
            </div>

        </form>

        <div class="error-msg2" style="/*display: none;*/">NEEA账号填写错误!</div><!--若是密码错误则提示 ：“密码填写错误!” -->
    </div>
</div>

<div class="HS-register_wrap2 clearfix">
    <button class="satPay_btn2 s1" type="submit">暂存信息</button>
    <button class="satPay_btn2 s2" type="submit">确认提交</button>
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