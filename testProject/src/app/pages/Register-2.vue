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
<div class="register-steps bg_register_step2">
    <span class="stepsText">注册信息</span><span class="stepsText2">确认信息</span><span class="stepsText3">提交成功</span>
</div>
<!--content begin-->
<div class="outRegisterBox">
 <div class="RegisterBox">
<!--托福/雅思 页头 大标题-->
<div class="RegisterHeadTitle">
    托福注册
</div>
<!--个人基本信息-->
<div class="register-information-box">
    <!--信息标题-->
    <div class="informationTitle">
        个人基本信息
    </div>
    <!--国家 地区-->
    <div class="register-input-box steps2">
        <span class="registerText">国家 / 地区</span><span class="registerText4">中国</span>
    </div>
    <!--中文姓名-->
    <div class="register-input-box steps2">
        <span class="registerText">中文姓名</span><span class="registerText4">XXX</span>
    </div>
    <!--拼音 英文名-->
    <div class="register-input-box steps2">
        <span class="registerText">拼音 / 英文姓名</span><span class="registerText4">XXX</span>
    </div>
    <!--称谓-->
    <div class="register-input-box steps2">
        <span class="registerText">称谓</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--性别-->
    <div class="register-input-box steps2">
        <span class="registerText">性别</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--出生日期-->
    <div class="register-input-box steps2">
        <span class="registerText">出生日期</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--英文地址第一行-->
    <div class="register-input-box steps2">
        <span class="registerText">英文地址第一行</span><span class="registerText4">宾夕法尼亚大街338号</span>
    </div>
    <!--英文地址第二行-->
    <div class="register-input-box steps2">
        <span class="registerText">英文地址第二行</span><span class="registerText4">宾夕法尼亚大街338号</span>
    </div>
    <!--省份 / 州-->
    <div class="register-input-box steps2">
        <span class="registerText">省份 / 州</span>
        <div class="ProvinceNational">
            <span class="registerText4">XXXXXX</span>
            <span class="registerText4">XXXXXX</span>
            <span class="registerText4">XXXXXX</span>
        </div>
    </div>
</div>

<!--联系信息-->
<div class="register-information-box">
    <!--信息标题-->
    <div class="informationTitle">
        联系信息
    </div>
    <!--手机号码-->
    <div class="register-input-box steps2">
        <span class="registerText">手机号码</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--座机号码-->
    <div class="register-input-box steps2">
        <span class="registerText">座机号码</span><span class="registerText4">+ 86 - XXXXXX</span>
    </div>
    <!--电子邮箱-->
    <div class="register-input-box steps2">
        <span class="registerText">电子邮箱</span><span class="registerText4">XXXXXX</span>
    </div>
</div>

<!--身份验证信息-->
<div class="register-information-box">
    <!--信息标题-->
    <div class="informationTitle">
        身份验证信息
    </div>
    <!--选择身份-->
    <div class="register-input-box steps2">
        <span class="registerText">请选择您的身份</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--证件类型-->
    <div class="register-input-box steps2">
        <span class="registerText">证件类型</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--证件号码-->
    <div class="register-input-box steps2">
        <span class="registerText">证件号码</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--护照-->
    <div class="register-input-box steps2">
        <span class="registerText">护照</span><span class="registerText4">XXXXXX</span>
    </div>
</div>

<!--安全信息-->
<div class="register-information-box">
    <!--信息标题-->
    <div class="informationTitle">
        安全信息
    </div>
    <!--输入密码-->
    <div class="register-input-box steps2">
        <span class="registerText">输入密码</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--确认密码-->
    <div class="register-input-box steps2">
        <span class="registerText">确认密码</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--找回密码问题-->
    <div class="register-input-box steps2">
        <span class="registerText">找回密码问题</span><span class="registerText4">XXXXXX</span>
    </div>
    <!--答案-->
    <div class="register-input-box steps2">
        <span class="registerText">答案</span><span class="registerText4">XXXXXX</span>
    </div>
</div>
     <!--新增协议-->
     <div class="register-information-box">
         <div class="informationTitle"></div>
         <div class="register-input-box steps2">
             <label for="dealCheckBox" class="dealTxtClass"><input type="checkbox" id="dealCheckBox">已阅读并同意</label><a>《代注册报名协议》</a>
         </div>
     </div>
<!--按钮-->·
<div class="registerBtnBox">
    <button class="btn-sureSubmit">确认提交</button><button class="btn-temporary">暂存信息</button>
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