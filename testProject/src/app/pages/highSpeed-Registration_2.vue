<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--高速代报-引导支付页</title>
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
<div class="content-box-s1 HS-register_wrap3">
    <div class="HS-register_title1">开通高速通道，享受专属特权</div>
    <div class="HS-register-box2">
        <div class="HS-inner-box1 UC-HS-register-box1">
            <div class="text-s9">高速代报信息确认</div>
            <div class="the-whole-box">
                <label>手机号码：</label><div class="itemR">4564989496</div>
            </div>
            <div class="the-whole-box">
                <label>考试科目：</label><div class="itemR">托福</div>
            </div>
            <div class="the-whole-box">
                <label>NEEA账号：</label><div class="itemR">4564989496</div>
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
                <label>考试地点：</label>
                <div class="itemR special_box"><!-- special_box 用于前面字段两个字，右侧有展开收起样式的情况 作用是增加宽度，避免一行情况下展开按钮掉下去的问题 -->
                    <span>北京工商大学</span>
                </div>
            </div>
        </div>

        <ul class="HS-inner-box2 clearfix">
            <li>中华女子学校</li>
            <li>中央广播电视大学培训中心</li>
            <li>北京外国语大学国际教育学院（东院逸夫楼考场）</li>
            <li>北京市海淀区教育培训学校</li>
            <li>中央广播电视大学培训中心</li>
            <li>中华女子学校</li>
            <li>北京市海淀区教育培训学校</li>
            <li>北京外国语大学国际教育学院（东院逸夫楼考场）</li>
        </ul>

    </div>

    <div class="HS-register-box3 clearfix">
        <div class="HS-inner-box3 type1">
            <img src="content-web/images/pic6_1.jpg">
            <div class="text-s6">白银级</div>
            <ul class="text-box">
                <li>深度神经网络算法解码</li>
                <li>高效稳定海外代理</li>
                <li>负载均衡机制</li>
                <li>8小时内进入高优先级代报队列</li>
                <li>抢位成功率超越人肉刷考位100+</li>
                <li>不成功随时退款</li>
            </ul>
            <div class="text-s7">适合报名2个月后的考试，<br>选择所有考点的考生</div>
            <dl class="text-s8">
                <dt>原价：400元</dt>
                <dd>特惠价：200元</dd>
            </dl>
            <button type="button" class="HS-register-btn">立即开通</button>
        </div>

        <div class="HS-inner-box3 type2">
            <img src="content-web/images/pic6_2.jpg">
            <div class="text-s6">黄金级</div>
            <ul class="text-box">
                <li>深度神经网络算法解码</li>
                <li>高效稳定海外代理</li>
                <li>负载均衡机制</li>
                <li>4小时内进入高优先级代报队列</li>
                <li>抢位成功率超越人肉刷考位200+</li>
                <li>不成功随时退款</li>
                <li>报名服务器优先使用权</li>
            </ul>
            <div class="text-s7">适合考试时间距今1-2个月，<br>选择考点超过半数的考生</div>
            <dl class="text-s8">
                <dt></dt>
                <dd>特惠价：300元</dd>
            </dl>
            <button type="button" class="HS-register-btn">立即开通</button>
        </div>

        <div class="HS-inner-box3 type3">
            <img src="content-web/images/pic6_3.jpg">
            <div class="text-s6">钻石级</div>
            <ul class="text-box">
                <li>深度神经网络算法解码</li>
                <li>高效稳定海外代理</li>
                <li>负载均衡机制</li>
                <li>立刻进入高优先级代报队列</li>
                <li>抢位成功率超越人肉刷考位500+</li>
                <li>不成功随时退款</li>
                <li>报名服务器独享权</li>
            </ul>
            <div class="text-s7">适合报名1个月内的考试，<br>选择考点低于半数的考生</div>
            <dl class="text-s8">
                <dt>原价：700元</dt>
                <dd>特惠价：500元</dd>
            </dl>
            <button type="button" class="HS-register-btn">立即开通</button>
        </div>

    </div>
    <!--新增雅思专权栏{-->
    <div class="HS-register-box3 IELTS-prerogative">
        <!--只有钻石级别-->
        <ul class="clearfix">
            <li class="floatL">
                钻石级 <br/>
                <span>代报队列提高排序100%</span>
            </li>
        </ul>

        <!--两种级别-->
        <!--<ul class="clearfix two-rank">--><!--激活状态li添加class:actived-->
            <!--<li class="floatL diamond actived">-->
                <!--钻石级 <br/>-->
                <!--<span>代报队列提高排序100%</span>-->
            <!--</li>-->
            <!--<li class="floatL gold">-->
                <!--黄金级 <br/>-->
                <!--<span>代报队列提高排序100%</span>-->
            <!--</li>-->
        <!--</ul>-->

        <!--三种级别-->
        <!--<ul class="clearfix three-rank">-->
            <!--<li class="floatL diamond "> &lt;!&ndash;激活状态li添加class:actived&ndash;&gt;-->
                <!--钻石级<br/>-->
                <!--<span>代报队列提高排序100%</span>-->
            <!--</li>-->
            <!--<li class="floatL gold">-->
                <!--黄金级<br/>-->
                <!--<span>代报队列提高排序100%</span>-->
            <!--</li>-->
            <!--<li class="floatL ag ">-->
                <!--白银级<br/>-->
                <!--<span>代报队列提高排序100%</span>-->
            <!--</li>-->
        <!--</ul>-->
        <div class="prerogative-box">
            <div class="prerogative-title">专属特权</div>
            <dl class="prerogative-inner clearfix">
                <dt><em>1</em>深度神经网络算法解码</dt>
                <dt><em>2</em>高效稳定海外代理</dt>
                <dt><em>3</em>负载均衡机制</dt>
                <dt><em>4</em>报名服务器独享权</dt>
                <dt><em>5</em>赠送雅思高分冲刺课</dt>
                <dt><em>6</em>赠送高分大礼包（机经、真题模考等）</dt>
            </dl>
            <button><span>¥99</span><em>¥588</em>，立即开通</button>
        </div>
    </div>
    <!--}新增雅思专权栏-->

    <!--新增客服联系方式 {-->
    <div class="HS-register-box9">
        <div class="item icon1">
            <strong class="text-s13">联系电话</strong>
            <span>0571-56758695</span>
        </div>
        <div class="item icon2">
            <strong class="text-s13">工作时间</strong>
            <span class="text-s14">
                周一至周五： 10：00 - 19：00<br>周六至周日： 11：00 - 18：00
            </span>
        </div>
    </div>
    <!--} 新增客服联系方式 -->

    <div class="HS-link-box"><a href="#">我还有疑问，想与君君聊聊</a></div>

    <div class="HS-register-box4">
        <img class="img-style" src="content-web/images/pic6_4.jpg">
        <div class="text-s9">代报费用确认</div>
        <span>代报费：0元（使用上次结余的白银级高速代报费288元）</span>
        <!-- 图片与文案对应为：
        <img class="img-style" src="content-web/images/pic6_5.jpg"> 代报费：0元（使用上次结余的黄金级高速代报费388元）
        <img class="img-style" src="content-web/images/pic6_6.jpg"> 代报费：0元（使用上次结余的钻石级高速代报费588元）
        -->
    </div>
    <div class="text-s10">*请点击确认按钮，确认代报信息无误</div>
    <div class="HS-register-box5">
        <button class="HS-register-btn2" type="submit">确认提交</button>
    </div>

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

<!-- 弹框 -->
<div class="popBox" style="display: none;">
    <div class="popTitle">温馨提示</div>
    <div class="popText">解绑NEEA会同时取消<span class="remind-text">正在进行的代报</span>，以及关联的出分提醒，确定解绑吗？</div>
    <div class="btnPop">
        <button type="button" class="btn-sure">是，解绑</button><button type="button" class="btn-No">否，不解绑</button>
    </div>
</div>

<div class="popBox" style="display: none;"><!-- 只有一个按钮的弹框 -->
    <div class="popTitle">温馨提示</div>
    <div class="popText">代报已成功，不可取消</div>
    <div class="btnPop">
        <button type="button" class="btn-No">我知道了</button>
    </div>
</div>

</body>
</html>