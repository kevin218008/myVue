<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--个人中心--我的订阅</title>
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
                </ul>
                <!--} 导航项 -->

                <!-- 登录与登录后 {-->
                <ul class="nav navbar-nav navbar-right head-link">
                    <!--登录前 {-->
                    <li class="user-logout" style="display: none;"><img src="content-web/images/icon_bg2_1.png" class="img-circle"><a href="login&register.vue">登录</a>/<a href="login&register.vue">注册</a></li>
                    <!--注：1、圆角头像需要再img标签跟随样式 img-circle；
                           2、默认头像（目前没有上传头像功能）登录后img的src地址变为 icon_bg2_2.png -->
                    <!--} 登录前 -->
                    <!--登录后  推测结果，需要UI确认 {-->
                    <li class="user-login">
                        <span class="head-img"><img src="content-web/images/icon_bg2_5.png" class="img-circle"></span>
                        <a href="User-center.html" class="head-username">王二狗</a>
                        <ul class="head-username-nav">
                            <li><a>关联账号</a></li>
                            <li><a>我的报名</a></li>
                            <li><a>我的订阅</a></li>
                            <li><a>我的出分</a></li>
                            <li><a>NEEA注册</a></li>
                            <li><a>服务去订</a></li>
                            <li><a>退出登录</a></li>
                        </ul>
                    </li>
                    <!--} 登录后 -->
                </ul>
                <!--} 登录与登录后 -->

            </div>
        </div>
    </nav>
</header>
<!--} 导航 -->
<div class="content-box-s3 User-center-bg clearfix">
<div class="User-center-left">
    <div class="content-box-s6">
        <img src="content-web/images/icon_bg2_3.png" class="user-center-head">
        <div class="user-center-title">个人中心</div>
    </div>
    <ul class="nav nav-sidebar nav-s3">
        <li class="active"><a href="#"><span class="User-center-icon-1"></span>账号管理</a></li>
        <li><a href="#"><span class="User-center-icon-2"></span>我的报名</a></li>
        <li><a href="#"><span class="User-center-icon-3"></span>我的订阅</a></li>
        <li><a href="#"><span class="User-center-icon-4"></span>我的出分</a></li>
        <li><a href=""><span class="User-center-icon-5"></span>NEEA注册</a></li>
        <li><a href=""><span class="User-center-icon-6"></span>服务去订</a></li>
    </ul>
    <div class="User-center-left-pic"><a href=""><img src="content-web/images/pic7_2.jpg"></a></div>
</div>
<div class="User-center-right">

    <!-- 新增个人信息内容　{-->
    <div class="user-bind">
        <div class="bind-title">
            <span>我的信息</span>
        </div>
        <div class="UC-user-info">
            <div class="UC-user-info-I1">
                <label>姓名：</label><span class="text-sty1">甜橙橙</span>
                <label>意向考试：</label><span class="text-sty2">雅思、托福</span>
            </div>
            <div class="UC-user-info-I1">
                <label>意向培训课程：</label><span class="text-sty3">我在自学、线上小班课、我已报班、线下一对一、线下大班课</span>
            </div>
            <div class="UC-user-info-I1">
                <label>年龄：</label><span class="text-sty1">上班族</span>
                <label>意向国家：</label><span class="text-sty2">英国，美国</span>
            </div>
            <div class="UC-user-info-I1">
                <label>意向留学服务：</label><span class="text-sty3">全程DIY、已找机构代办、海外租房推荐、机票推荐、跨境汇款服务、游学项目</span>
            </div>
            <div class="UC-user-info-I1">
                <label>预计出国时间：</label><span class="text-sty3">三年后</span>
            </div>
        </div>
        <div class="UC-user-info" style="display: none;">
            <div class="UC-user-info-I2">
                <p>完善您的信息有助于抢考位为您量身定制<br>个性化的抢位、培训、留学方案。</p>
                <button type="button" class="btn-s8">完善信息</button>
            </div>
        </div>
    </div>
    <!--} 新增个人信息内容　-->

<!-- 账号管理 {-->
<div class="user-bind">
    <div class="bind-title">
        <span>关联账号</span>
    </div>
    <div class="bind-Box">
        <div class="bind-content"><span class="bindType">绑定手机</span><span class="bindInfo">13555555555</span><span class="bindYes">已绑定</span></div>
        <div class="bind-content"><span class="bindType">绑定QQ账号</span><span class="bindInfo">1234567890</span><span class="bindYes">已绑定</span></div>
        <div class="bind-content current2"><span class="bindType">绑定微博账号</span><span class="bindInfo">爱珠向日葵</span><span class="bindYes">已绑定</span></div>
    </div>
</div>
<!--} 账号管理 -->

<!-- 我的出分-短信出分提醒 {-->
<div class="user-bind">
    <div class="bind-title">
        <span>我的出分</span>
    </div>
    <div class="bind-Box score-Box">
        <div class="bind-content score-top-box clearfix">
            短信出分提醒
            <button class="btn floatR" type="button">更换提醒方式</button>
        </div>
        <div class="score-content-box">
            <p class="score_style_pay">托福出分提醒方式：短信出分提醒   &nbsp;&nbsp;价格：29.90元   </p>
            <p class="validate_time">长期有效（绑定出分提醒期间）</p>
        </div>
    </div>
    <div class="tips-s1">若中途取消出分提醒或者解绑考试账号，将无法收到短信或者微信出分提醒，也无法退款哦～</div>
    <!--<div class="tips-s1">若中途取消出分提醒或者解绑考试账号，将无法收到短信或者微信出分提醒，也无法退款哦～</div>-->
</div>
<div class="user-bind">
    <!--<div class="bind-title">-->
        <!--<span>我的出分</span>-->
    <!--</div>-->
    <div class="bind-Box score-Box">
        <div class="bind-content score-top-box wx clearfix">
            微信出分提醒
            <button class="btn floatR" type="button">更换提醒方式</button>
        </div>
        <div class="score-content-box">
            <p class="score_style_pay">托福出分提醒方式：微信出分提醒   &nbsp;&nbsp;价格：0.00元   </p>
            <p class="validate_time">有效期：2017年3月15日至2017年4月14日 <span class="floatR">续时30天</span></p>
        </div>
    </div>
    <!--<div class="tips-s1">若中途取消出分提醒或者解绑考试账号，将无法收到短信或者微信出分提醒，也无法退款哦～</div>-->
</div>
    <div class="history-mark">
        <div class="Visa2">
            <div class="history-title">
                托福
                <label class="history-title4">
                    <!--<img src="content-web/images/pic-nomark.png">2017.2.28将图改为文字-->
                    未出分
                </label>
            </div>
            <!--考试地点与时间-->
            <div class="place-time not-score">
                <span class="placeBox">考位君还未发现您的考试信息喔～</span>
            </div>
        </div>
    </div>
    <!--出分失败{-->
    <div class="history-mark">
        <div class="Visa2">
            <div class="history-title">
                托福
                <label class="history-title4">
                    出分失败
                </label>
            </div>
            <!--考试地点与时间-->
            <div class="place-time not-score">
                <span class="placeBox">您的账号信息错误，请重新绑定！</span>
                <label class="history-title5">
                    重新绑定
                </label>
            </div>
        </div>
    </div>
    <!--}出分失败-->
<!--} 我的出分-短信出分提醒 -->

<!-- 我的订阅-无订阅　｛-->
<div class="text-s1 none-s1">
    <p>您还没有订阅任何考位，赶快去订阅吧！</p>
    <button type="button" class="btn btn-lg btn-s3">我要订阅</button>
</div>
<!--} 我的订阅-无订阅　-->

<!--跨年-->
<div class="fraction enroll-fail">
    <div class="normal-title">雅思普通培训类</div>
    <div class="stepBox">
        <div class="YearsBox">
            <div class="step-1"><span class="step-2">2015年</span><span class="step-3">05月20日</span><span class="step-3" style="display: none;">12月05日</span></div>
            <div class="step-1"><span class="step-2">2015年</span><span class="step-3">12月05日</span></div>
        </div>
        <div class="CityBox">
            <div class="step-1"><span class="step-2">城市</span><span class="step-3">北京</span><span class="step-3">天津</span></div>
        </div>
    </div>
    <div class="stepBox2"><button type="button" class="btn-Go">修改订阅</button></div>

    <!-- 高速代报 入口引导 -->
    <div class="HS-entrance-style2"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>

    <!-- 新增广告位 -->
    <div class="subscribe-link_box1">
        <a href="#" style="display: none;"><img src="content-web/images/pic4_3.jpg"></a>
        <a href="#"><img src="content-web/images/pic5_3.gif"></a><!-- 朗播的广告位  -->
        <a href="#"><span class="text_s7">免费出国留学通道<span>免费通道 &gt;</span></span></a>
    </div>

</div>

<!-- 报名成功　｛-->
<div class="fraction enroll-success">
    <div class="fractionText">
        <span class="fraction-title">托福大陆</span>
        <span>考试时间：<label class="test-time">05月08日</label></span>
        <span>城市：<label class="test-city">北京</label></span>
        <span><label class="examinations">考场：</label><p class="examinationName">北京大学、清华大学、北京师范大学</p></span>
        <button type="button" class="btn-Go">查看考场</button>
    </div>
    <div class="btnBox">
        <div class="report-point">
            <div>温馨提示：</div>
            <p>1.报名完成后需要去官网完善信息</p>
            <p>2.请带好你的考试证明准时参加考试</p>
        </div>

        <!--去官网修改考试信息-->
        <div class="go-revise">
            <a href="#">去官网修改考试信息</a>
        </div>
        <div class="bg-success"></div>
    </div>
</div>
<!--} 报名成功　-->

<a href="#" class="subscribe-link_s2" style="display: none;"><img src="content-web/images/pic4_2.jpg"></a><!-- 新增广告位 -->
<a href="#" class="subscribe-link_s2"><img src="content-web/images/pic5_1.gif"></a><!-- 新增朗播广告位  我的报名 页面用此广告   -->
<a href="#" class="subscribe-link_s2"><img src="content-web/images/pic5_2.gif"></a><!-- 新增朗播广告位   我的出分 页面用此广告  -->

<!--报名失败-->
<div class="fraction enroll-success">
    <div class="fractionText">
        <span class="fraction-title">雅思普通培训类</span>
        <span>考试时间：<label class="test-time">05月08日</label></span>
        <span>城市：<label class="test-city">北京</label></span>
        <span><label class="examinations">考场：</label><p class="examinationName">北京大学、清华大学、北京师范大学</p></span>
    </div>
    <div class="btnBox">
        <div class="failText">
            <p>您的考位被别人抢先报名了！</p>
            <button type="button" class="btn-Go">重新报名</button>
            <div class="bg-lose"></div>
        </div>
    </div>
</div>
<!--} 报名失败　-->

<!--报名中-->
<div class="fraction enroll-success">
    <div class="fractionText">
        <span class="fraction-title">雅思普通培训类</span>
        <span>考试时间：<label class="test-time">05月08日</label></span>
        <span>城市：<label class="test-city">北京</label></span>
        <span><label class="examinations">考场：</label><p class="examinationName">北京大学、清华大学、北京师范大学</p></span>
    </div>
    <div class="btnBox">
        <div class="failText">
            <p>正在为您报名，请耐心等待！</p>
            <div class="bg-signing"></div>
        </div>
    </div>
</div>
<!--} 报名中　-->

<!-- 我的订阅-有订阅　｛-->
<div class="exist-subscribe">
    <!--雅思普通培训-->
    <div class="normal-testing">
        <div class="normal-title">雅思普通培训类</div>
        <div class="date-place">
            <span class="begin-date">05年08日</span><span class="end-date">05年09日</span><span class="place1">北京</span><span class="place2">天津</span><button class="btn-revise">修改订阅</button>
        </div>
    </div>

    <!--可报名考位-->
    <div class="seat-quantity">
        <!--考位信息-->
        <div class="seat-information">
            <div class="normal-title">
                共有可报名考位<span class="seats">5</span>个 <span class="seat-close btn-toggle">收起</span><!--当点击按钮后给按钮替换类为btn-toggle2-->
            </div>

            <!--考位具体信息-->
            <div class="seat-th">
                <span class="testing-time">考试时间</span><span class="testing-country">城市</span><span class="testing-examination">考场</span><span class="choose-RT-btn">按时间</span><span class="choose-RT-btn Current">按地点</span>
            </div>
            <div class="seat-list">
                <div class="seat-content">
                    <span class="testing-time">2015年06月20日</span><span class="testing-country">北京</span><span class="testing-examination">北京大学</span><button class="btn-Go">前往报名</button>
                </div>
                <div class="seat-content">
                    <span class="testing-time">2015年06月20日</span><span class="testing-country">北京</span><span class="testing-examination">北京师范大学</span><button class="btn-Go">前往报名</button>
                </div>
                <div class="seat-content current2">
                    <span class="testing-time">2015年06月20日</span><span class="testing-country">北京</span><span class="testing-examination">清华大学</span><button class="btn-Go">前往报名</button>
                </div>
            </div>
            <!--页码-->
            <nav class="text-center">
                <ul class="pagination">
                    <li class="disabled">
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    <li class="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>

<!--托福国际-->
<div class="normal-testing">
    <div class="normal-title">托福国际</div>
    <div class="date-place">
        <span class="begin-date">05年08日</span><span class="end-date">05年09日</span><span class="place1">北京</span><span class="place2">天津</span><button class="btn-revise">修改订阅</button>
    </div>
</div>
<!--} 我的订阅-有订阅　-->

<!-- 我的出分提示　｛-->
<div class="text-s1 none-s1">
    您还没有绑定出分提醒！
    <div class="text-s3">绑定后，一旦出分考位君会在第一时间通知你</div>
    <button type="button" class="btn btn-lg btn-s3">出分提醒</button><button type="button" class="btn btn-lg btn-s6">解绑NEEA</button>
</div>

<div class="text-s1 none-s1">
    绑定失败！
    <div class="text-s3">您的NEEA账号信息错误，请重新绑定！</div>
    <button type="button" class="btn btn-lg btn-s3">重新绑定</button>
</div>

<!--} 我的出分提示　-->

<!--我的出分-->
<div class="history-mark">
    <!--标题-->
    <div class="history-title clearfix">
        <span>我的出分</span>
        <button class="btn-revise">解绑NEEA</button><button class="btn-revise">取消出分</button>
    </div>

    <!--未出分-->
    <div class="Visa2">

        <div class="history-title">
            托福国际
            <label class="history-title2"><img src="content-web/images/pic-nomark.png"/></label>
        </div>

        <!--考试地点与时间-->
        <div class="place-time">
            <span class="placeBox">考试地点：<label>浙江省教育考试服务中心</label></span><span class="timeBox">考试时间：<label>2015年06月22日</label></span>
        </div>
    </div>

    <!--已取消-->
    <div class="Visa2">

        <div class="history-title">
            托福国际
            <label class="history-title3">已取消</label>
        </div>

        <!--考试地点与时间-->
        <div class="place-time">
            <span class="placeBox">考试地点：<label>浙江省教育考试服务中心</label></span><span class="timeBox">考试时间：<label>2015年06月22日</label></span>
        </div>
    </div>

    <!--hold住-->
    <div class="Visa">

        <div class="history-title">
            雅思普通签证类
            <label class="history-title2">HOLDED</label>
        </div>

        <!--考试地点与时间-->
        <div class="place-time">
            <span class="placeBox">考试地点：<label>浙江省教育考试服务中心</label></span><span class="timeBox">考试时间：<label>2015年06月22日</label></span>
        </div>


        <!--查看完整报告-->
        <div class="completeReport">
            <p>*提醒：您的考试结果请与 <a href="">巴拉巴拉</a> 联系</p>
        </div>
    </div>

    <!--已出分-->
    <div class="Visa">

        <div class="history-title">
            雅思普通签证类
        </div>

        <!--考试地点与时间-->
        <div class="place-time">
            <span class="placeBox">考试地点：<label>浙江省教育考试服务中心</label></span><span class="timeBox">考试时间：<label>2015年06月22日</label></span>
        </div>

        <!--成绩单-->
        <div class="report-card">
            <div class="report-card2"><span>听力</span><span>阅读</span><span>写作</span><span>口语</span><span>平均</span><span class="total-points">总分</span></div>
            <div class="report-card3"><span>7.5</span><span>7.5</span><span>7.5</span><span>7.5</span><span>7.5</span><span class="total-points">7.5</span></div>
        </div>

        <!--查看完整报告-->
        <div class="completeReport">
            <p>*成绩仅供参考，完整报告可去官网查看 <a href="">点击此处</a> 访问</p>
            <p>&nbsp;考试成绩以您最终到的成绩单为准，您的成绩单在考试后第10个工作日以EMS快递寄送给您！</p>
        </div>

        <!-- 高速代报 入口引导 -->
        <div class="HS-entrance-style2"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>

    </div>

    <!--SAT未出分-->
    <div class="Visa2">

        <div class="history-title">
            SAT
            <label class="history-title2"><img src="content-web/images/pic-nomark.png"/></label>
        </div>

        <!--考试地点与时间-->
        <div class="place-time">
            <span class="placeBox">考试地点：<label>SAT Subject Test</label></span><span class="timeBox">考试时间：<label>2015年06月22日</label></span>
        </div>
    </div>

    <!--SAT已出分-->
    <div class="Visa">

        <div class="history-title">
            SAT
        </div>

        <!--考试地点与时间-->
        <div class="place-time">
            <span class="placeBox">考试地点：<label>SAT with Essay</label></span><span class="timeBox">考试时间：<label>2015年06月22日</label></span>
        </div>

        <!--成绩单-->
        <div class="report-card">
            <div class="report-card4"><span>Reading</span><span>Writing</span><span>Mathematics Level 2</span></div>
            <div class="report-card5"><span>7.5</span><span>7.5</span><span>7.5</span></div>
        </div>

        <!--查看完整报告-->
        <div class="completeReport">
            <p>*成绩仅供参考，完整报告可去官网查看 <a href="">点击此处</a> 访问</p>
        </div>
    </div>

</div>
<!--我的出分-->

<!--新增NEEA注册 已绑定 begin-->
<div class="add-neea-register">
    <!--NEEA 托福注册成功 begin-->
    <!--标题-->
    <div class="history-title clearfix">
        <span>账号注册</span>
        <button class="btn-revise">继续注册</button>
    </div>
    <!--标题 end 注册成功内容begin-->

    <div class="fraction enroll-success addRegisterBox">
        <!--注册成功-->
        <div class="fractionText">
            <span class="fraction-title">托福大陆</span>
            <span>时间：<label class="test-time">05月08日</label></span>
            <span>账号：<label class="test-city">12345678</label></span>
            <span><label class="examinations">类型：</label><p class="examinationName">托福</p></span>

            <!-- 高速代报 入口引导 -->
            <div class="HS-entrance-style2"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>

        </div>
        <div class="btnBox">
            <div class="report-point">
                <div>温馨提示：</div>
                <p>1.注册成功后需要您去官网充值考试费。</p>
                <p>2.请保持您的手机信号畅通，以便考位君及时通知您重要信息。</p>
            </div>

            <!--去官网修改考试信息-->
            <div class="go-revise">
                <a href="#">去官网修改考试信息</a>
            </div>
            <div class="bg_register_success"></div>
        </div>
    </div>
    <!--托福注册成功 end 注册中 begin-->

    <div class="fraction enroll-success">
        <div class="addTitleText">
            <span class="fraction-title">雅思注册</span>
        </div>
        <div class="addFailText">
            <p>创建时间：2015年9月1日</p>
            <p>考位君正在帮您注册NEEA账户中，不要着急~</p>
            <p>注册成功后，君君会立即短信通知您！</p>

            <!-- 高速代报 入口引导 -->
            <div class="HS-entrance-style2"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>

        </div>
        <div class="bg_registering"></div>
    </div>
    <!--注册中-->

    <!--注册未完成 begin-->
    <div class="fraction enroll-success">
        <div class="addTitleText">
            <span class="fraction-title">雅思注册</span>
        </div>
        <div class="addFailText">
            <p>创建时间：2016年9月1日</p>
            <p>您的邮箱/身份证/手机号码已被注册使用，请核实后<a href="">重新注册</a>。</p>
        </div>
        <div class="bg_register_fail"></div>
    </div>
    <!--注册未完成 end-->

    <!--雅思成功 begin-->
    <div class="fraction enroll-success addRegisterBox">
        <!--注册成功-->
        <div class="fractionText">
            <span class="fraction-title">雅思大陆</span>
            <span>时间：<label class="test-time">05月08日</label></span>
            <span>账号：<label class="test-city">12345678</label></span>
            <span><label class="examinations">类型：</label><p class="examinationName">雅思</p></span>
        </div>
        <div class="btnBox">
            <div class="report-point">
                <div>温馨提示：</div>
                <p>1.注册成功后需要您去官网充值考试费。</p>
                <p>2.请保持您的手机信号畅通，以便考位君及时通知您重要信息。</p>
            </div>

            <!--去官网修改考试信息-->
            <div class="go-revise">
                <a href="#">去官网修改考试信息</a>
            </div>
            <div class="bg_register_success"></div>
        </div>
    </div>
    <!--雅思成功 end-->
</div>
<!--新增NEEA注册 已绑定 end-->


<!--新增NEEA注册 未绑定 begin-->
<div class="add-neea-register">
    <div class="noBinding">
        <!--标题-->
        <div class="history-title clearfix">
            <button class="btn-revise">我要注册</button>
        </div>
        <!--标题 end-->

        <div class="noBindingText">您还没有NEEA账户，赶快去注册吧~</div>
    </div>
</div>
<!--新增NEEA注册 未绑定 end-->

<!--新增NEEA注册 未完成 begin-->
<div class="add-neea-register">
    <div class="noBinding">
        <!--标题-->
        <div class="history-title clearfix">
            <span>账号注册</span>
            <button class="btn-revise">继续注册</button>
        </div>
        <!--标题-->

        <!--注册失败 begin-->
        <div class="fraction enroll-success">
            <div class="addTitleText">
                <span class="fraction-title">雅思注册</span>
            </div>
            <div class="addFailText">
                <p>创建时间：2016年9月1日</p>
                <p>注册未完成，请<a href="">重新注册</a>。</p>
            </div>
            <div class="bg_no_Finish"></div>
        </div>
        <!--注册失败 end-->

        <!--注册记录 begin-->
        <div class="add-register-history">
            <!--标题-->
            <div class="history-title clearfix">
                <span>注册记录</span>
            </div>
            <!--标题-->

            <!--托福成功 begin-->
            <div class="fraction enroll-success addRegisterBox">
                <!--注册成功-->
                <div class="fractionText">
                    <span class="fraction-title">托福大陆</span>
                    <span>时间：<label class="test-time">05月08日</label></span>
                    <span>账号：<label class="test-city">12345678</label></span>
                    <span><a href=""  class="go-register">注册信息</a></span>
                </div>

                <div class="btnBox">
                    <div class="report-point">
                        <div>温馨提示：</div>
                        <p>1.注册成功后需要您去官网充值考试费。</p>
                        <p>2.请保持您的手机信号畅通，以便考位君及时通知您重要信息。</p>
                    </div>

                    <!--去官网修改考试信息-->
                    <div class="go-revise">
                        <a href="#">去官网修改考试信息</a>
                    </div>
                    <div class="bg_register_success"></div>
                </div>
            </div>
            <!--托福成功 end-->
        </div>
        <!--注册记录 end-->
    </div>
</div>
<!--新增NEEA注册 未完成 end-->

<!--新增服务去订 begin-->
<!--无服务状态-->
<div class="noBindingText">您还没有使用考位君的服务哦～</div>
<div class="user-serve">
    <div class="serve-head">
        <span>我的服务</span><button class="btn-Go btn-CancelAll">全部取消</button>
    </div>
    <div class="serve-information">
        <div class="serve-content">
            <!--无服务状态-->
            <span class="">考位报名</span><span class="noServe"><span></span>暂无服务</span>
        </div>
        <div class="serve-content">
            <span class="">考位订阅</span><button class="btn-Go">取消</button>
        </div>
        <div class="serve-content current2">
            <span class="">出分提醒</span><button class="btn-Go">取消</button>
        </div>
    </div>
</div>
<!--新增服务去订 end-->
</div>
</div>

<!--弹窗 取消NEEA弹窗-->
<div class="popBox" style="display: none;">
    <div class="popTitle">温馨提示</div>
    <div class="popText">解绑NEEA账号后将无法获取您的考试信息</div>
    <div class="btnPop">
        <button type="button" class="btn-sure">是，解绑</button><button type="button" class="btn-No">否，不解绑</button>
    </div>
</div>
<!--取消NEEA弹窗end-->

<!--取消手机绑定弹窗 begin-->
<div class="popBox" style="display: none;">
    <div class="popTitle">温馨提示</div>
    <div class="popText">取消手机绑定后您将无法收到考分短信哦</div>
    <div class="btnPop">
        <button type="button" class="btn-sure">是，取消</button><button type="button" class="btn-No">否，不取消</button>
    </div>
</div>
<!--取消手机绑定弹窗 end-->
</body>
</html>