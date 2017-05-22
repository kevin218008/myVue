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

<!-- 高速代报入口 {-->
<div class="container">
    <div class="row">
        <div class="col-xs-12 register-home-padding">
            <div class="choose-type-outer">
                <div class="choose-head-bg2"></div>
                <div class="type-box">
                    <div class="toefl-type HS-type">
                        <div>
                            <div class="type-name">托福</div>
                            <div class="type-icon"></div>

                        </div>
                    </div>
                    <div class="ielts-type">
                        <div>
                            <div class="type-name">雅思</div>
                            <div class="type-iconHot"></div>
                            <div class="ielts-hover">
                                <div onclick="SelectExam(1, 0);">普通学术类</div>
                                <div onclick="SelectExam(1, 1);">普通培训类</div>
                                <div onclick="SelectExam(1, 2);">签证学术类</div>
                                <div onclick="SelectExam(1, 3);">签证培训类</div>
                            </div>
                        </div>
                    </div>
                    <div class="gre unavailable">
                        <div>
                            <div class="type-name">GRE</div>
                            <div class="type-icon"></div>
                        </div>
                    </div>
                    <div class="sat unavailable">
                        <div>
                            <div class="type-name">SAT</div>
                            <div class="type-icon"></div>
                        </div>
                    </div>
                </div>
                <div class="choose-foot-pic"><a href=""><img src="content-web/images/pic7_3.jpg"></a></div>
                <div class="choose-foot-bg" style="display: none;"></div>
            </div>
        </div>
    </div>
</div>
<!--} 高速代报入口 -->

<!-- 引导开通服务 {-->
<div class="content-box-s1 HS-register_wrap3">
    <div class="HS-register_title1">托福高速代报，你值得拥有</div>
    <div class="HS-register-box8 clearfix">
        <div class="HS-inner-box4 pull-left">
            <dl>
                <dt>抢位技术<span>再升级</span></dt>
                <dd>高速稳定海外代理</dd>
                <dd>成功率超越人工抢位500%+</dd>
            </dl>
            <dl>
                <dt>代报场次<span>选择多</span></dt>
                <dd>选择两个月的所有场次</dd>
                <dd>选择1个城市的所有考点</dd>
            </dl>
        </div>
        <div class="HS-inner-box4 pull-right">
            <dl>
                <dt>一键代报<span>更省心</span></dt>
                <dd>只花30秒填写信息</dd>
                <dd>立即进入高速代报队列</dd>
            </dl>
            <dl>
                <dt>代报服务<span>有保障</span></dt>
                <dd>专享一对一VIP服务</dd>
                <dd>不成功随时退款</dd>
            </dl>
        </div>
    </div>
    <div class="HS-register-box5">
        <button class="HS-register-btn2" type="submit">立即开通</button>
    </div>
</div>
<!--} 引导开通服务 -->

</body>
</html>