<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--个人中心-高速代报</title>
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
            <li><a href="#"><span class="User-center-icon-5"></span>NEEA注册</a></li>
            <li><a href="#"><span class="User-center-icon-6"></span>服务去订</a></li>
            <li><a href="#"><span class="User-center-icon-7"></span>高速待报</a></li>
        </ul>
    </div>
    <div class="User-center-right UC-HS-register"><!-- 新增 UC-HS-register 样式 -->

        <div class="fraction enroll-success">
            <div class="bg-success"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund； 退款中 bg_refunding 错误信息 bg_error；代报名 bg_toBeSign;   -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s1">已支付200元</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">高速代报已成功！</div>
                <div class="the-whole-box">
                    <label>报名号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>NEEA账号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>科目：</label><div class="itemR">托福</div>
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
                    <label>考场：</label>
                    <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                        <span>北京工商大学</span><span>北京外国语大学</span> <span>北京师范大学</span> <span>北京大学</span> <span>北京第二外国语学院</span> <span>北京语言大学</span> <span>NEEA赛尔教育科技发展有限公司</span> <span>北京航空航天大学</span>  <span>中央广播电视大学培训中心</span> <span>北京理工大学</span> <span>中央财经大学中央财经大学沙河校区</span> <span>北京市教育考试指导中心</span>
                        <button type="button" class="text-open"></button>
                        <!-- 收起把样式换成 text-close -->
                    </div>
                </div>
                <div class="inner-box1 clearfix">
                    <span>高速代报服务效果不错？下一场考试再次代报吧!</span>
                    <button type="button" class="btn-Go">再次购买</button>
                </div>

            </div>
        </div>

        <div class="fraction enroll-success">
            <div class="bg_signing2"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund；退款中 bg_refunding  错误信息 bg_error；代报名 bg_toBeSign;   -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s1">已支付200元</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">正在高速报名，请稍后</div>
                <div class="the-whole-box">
                    <label>报名号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>NEEA账号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>科目：</label><div class="itemR">托福</div>
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
                    <label>考场：</label>
                    <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                        <span>北京工商大学</span><span>北京外国语大学</span> <span>北京师范大学</span> <span>北京大学</span> <span>北京第二外国语学院</span> <span>北京语言大学</span> <span>NEEA赛尔教育科技发展有限公司</span> <span>北京航空航天大学</span>  <span>中央广播电视大学培训中心</span> <span>北京理工大学</span> <span>中央财经大学中央财经大学沙河校区</span> <span>北京市教育考试指导中心</span>
                        <button type="button" class="text-close"></button>
                        <!-- 展开把样式换成 text-open -->
                    </div>
                </div>
                <div class="inner-box1 clearfix">
                    <span>若需修改报名信息，请先取消代报</span>
                    <button class="btn-revise">取消代报</button>
                </div>

            </div>
        </div>

        <div class="fraction enroll-success">
            <div class="bg_toBePay"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund； 退款中 bg_refunding 错误信息 bg_error；代报名 bg_toBeSign;   -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s2">待支付</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">高速代报费待支付</div>
                <div class="the-whole-box">
                    <label>报名号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>NEEA账号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>科目：</label><div class="itemR">托福</div>
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
                    <label>考场：</label>
                    <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                        <span>北京工商大学</span><span>北京外国语大学</span>
                        <button type="button" class="text-close"></button>
                        <!-- 展开把样式换成 text-open -->
                    </div>
                </div>
                <div class="inner-box1 clearfix">
                    <span>若需修改报名信息，请先取消代报</span>
                    <button class="btn-revise">取消代报</button>
                    <button class="btn-uc-pay">立即支付</button>
                </div>

            </div>
        </div>

        <div class="fraction enroll-success">
            <div class="bg-lose"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund； 退款中 bg_refunding 错误信息 bg_error；代报名 bg_toBeSign;   -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s1">已支付200元</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">高速报名失败</div>
                <div class="the-whole-box">
                    <label>报名号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>NEEA账号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>科目：</label><div class="itemR">托福</div>
                </div>
                <div class="the-whole-box">
                    <label>时间：</label>
                    <div class="itemR">
                        <span>2016.11.19</span>   <span>2016.11.19</span>
                    </div>
                </div>
                <div class="the-whole-box">
                    <label>城市：</label><div class="itemR">浙江省杭州市</div>
                </div>
                <div class="the-whole-box">
                    <label>考场：</label>
                    <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                        <span>北京工商大学</span><span>北京外国语大学</span>
                        <button type="button" class="text-close"></button>
                        <!-- 展开把样式换成 text-open -->
                    </div>
                </div>
                <div class="inner-box1 clearfix">
                    <span>报名过期，请重新提交代报</span>
                    <button class="btn-Go">重新提交</button>
                </div>

            </div>
        </div>

        <div class="fraction enroll-success">
            <div class="bg_cancel"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund； 退款中 bg_refunding 错误信息 bg_error；代报名 bg_toBeSign;   -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s1">已支付200元</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">高速代报已取消</div>
                <div class="inner-box2">
                    <div class="the-whole-box">
                        <label>报名号：</label><div class="itemR">4564989496</div>
                    </div>
                    <div class="the-whole-box">
                        <label>NEEA账号：</label><div class="itemR">4564989496</div>
                    </div>
                    <div class="the-whole-box">
                        <label>科目：</label><div class="itemR">托福</div>
                    </div>
                    <div class="the-whole-box">
                        <label>时间：</label>
                        <div class="itemR">
                            <span>2016.11.19</span>   <span>2016.11.19</span>
                        </div>
                    </div>
                    <div class="the-whole-box">
                        <label>城市：</label><div class="itemR">浙江省杭州市</div>
                    </div>
                    <div class="the-whole-box">
                        <label>考场：</label>
                        <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                            <span>北京工商大学</span><span>北京外国语大学</span>
                            <button type="button" class="text-close"></button>
                            <!-- 展开把样式换成 text-open -->
                        </div>
                    </div>
                </div>

                <div class="inner-box1 clearfix">
                    <span>代报已取消，请重新提交报名</span>
                    <button class="btn-Go">重新提交</button>
                </div>

            </div>
        </div>

        <div class="fraction enroll-success special-H"><!-- 当此区块没有广告，内容占高又比较小的时候加此样式 special-H ，去掉原有最小高度的限制 -->
            <div class="bg_refund"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund； 退款中 bg_refunding 错误信息 bg_error；代报名 bg_toBeSign;   -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s3">已退款200元</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">高速代报已退款</div>
                <div class="the-whole-box">
                    <label>支付宝号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>微信号：</label><div class="itemR">4564989496</div>
                </div>
            </div>
        </div>

        <div class="fraction enroll-success">
            <div class="bg_error"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund； 退款中 bg_refunding 错误信息 bg_error； 代报名 bg_toBeSign;  -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s1">已支付200元</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">报名信息错误</div>
                <div class="the-whole-box">
                    <label>报名号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>NEEA账号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>科目：</label><div class="itemR">托福</div>
                </div>
                <div class="the-whole-box">
                    <label>时间：</label>
                    <div class="itemR">
                        <span>2016.11.19</span>   <span>2016.11.19</span>
                    </div>
                </div>
                <div class="the-whole-box">
                    <label>城市：</label><div class="itemR">浙江省杭州市</div>
                </div>
                <div class="the-whole-box">
                    <label>考场：</label>
                    <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                        <span>北京工商大学</span><span>北京外国语大学</span>
                        <button type="button" class="text-close"></button>
                        <!-- 展开把样式换成 text-open -->
                    </div>
                </div>
                <div class="inner-box1 clearfix">
                    <span>NEEA账号和密码不符，请重新提交代报</span>
                    <button class="btn-Go">重新提交</button>
                </div>

            </div>
        </div>

        <div class="fraction enroll-success">
            <div class="bg_toBeSign"></div>
            <!-- 成功报名 bg-success；  失败报名 bg-lose；  报名中 bg_signing2；   待支付 bg_toBePay；  已取消 bg_cancel； 已退款 bg_refund； 退款中 bg_refunding 错误信息 bg_error； 代报名 bg_toBeSign;  -->
            <div class="UC-HS-register-box1">
                <span class="fraction-title">高速代报（First Pass）</span>
                <span class="tag s1">已支付200元</span>
                <!-- 已支付 黄色样式 s1、待支付 灰色 s2 已退款 蓝色 s3 -->
                <div class="text-s4">您有一项进行中的普通代报，无法立即开始高速代报。<br> 请<a href="">联系君君</a>，帮您解决问题。</div>
                <div class="the-whole-box">
                    <label>报名号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>NEEA账号：</label><div class="itemR">4564989496</div>
                </div>
                <div class="the-whole-box">
                    <label>科目：</label><div class="itemR">托福</div>
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
                    <label>考场：</label>
                    <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                        <span>北京工商大学</span><span>北京外国语大学</span> <span>北京师范大学</span> <span>北京大学</span> <span>北京第二外国语学院</span> <span>北京语言大学</span> <span>NEEA赛尔教育科技发展有限公司</span> <span>北京航空航天大学</span>  <span>中央广播电视大学培训中心</span> <span>北京理工大学</span> <span>中央财经大学中央财经大学沙河校区</span> <span>北京市教育考试指导中心</span>
                        <button type="button" class="text-close"></button>
                        <!-- 展开把样式换成 text-open -->
                    </div>
                </div>
                <div class="inner-box1 clearfix">
                    <span>若需修改报名信息，请先取消代报</span>
                    <button class="btn-revise">取消代报</button>
                </div>

            </div>
        </div>

        <div class="text-s1 none-s1">
            <p>您尚未开通高速代报服务，赶紧去开通吧～</p>
            <button type="button" class="btn btn-lg btn-s3">立即开通</button>
        </div>

        <div class="fraction enroll-success">
            <div class="fractionText">
                <span class="fraction-title">
                    雅思普通培训类
                    <a href="#" class="text-s5">开通高速代报，抢位成功率提升500%+</a>
                </span>
                <span>考试时间：<label class="test-time">05月08日</label></span>
                <span>城市：<label class="test-city">北京</label></span>
                <span><label class="examinations">考场：</label><p class="examinationName">北京大学、清华大学、北京师范大学</p></span>
            </div>
            <div class="btnBox">
                <div class="failText">
                    <p>NEEA账号不正确</p>
                    <button type="button" class="btn-Go">重新报名</button>
                    <div class="bg-lose"></div>
                </div>
            </div>
        </div>

    </div>
</div>


</body>
</html>