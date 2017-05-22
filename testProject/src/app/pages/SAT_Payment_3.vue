<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--SAT支付最后两步</title>
    <!-- Bootstrap -->
    <link href="content-web/css/bootstrap.min.css" rel="stylesheet">
    <link href="content-web/css/style.css" rel="stylesheet">

</head>


<body>
<!-- 导航 {-->
<!--} 导航 -->

<!-- content外框 {-->
<div class="content-box-s1 sat_payment_box">

    <!-- 进度条 {-->
    <div class="satPay_bar_title"><span>选择时间、考点</span><span>登录账号</span><span>填写信息</span><span>支付</span></div>
    <div class="satPay_bar_box satPay_bar_step6"><!-- 进度条变化将satPay_bar_step1 样式改为 satPay_bar_step2、satPay_bar_step3...satPay_bar_step7 -->
        <span class="item1"><label>1</label></span>
        <span class="item2"><label>2</label></span>
        <span class="item3"><label>3</label></span>
        <span class="item4"><label>4</label></span>
        <i class="item0"></i><i class="item1"></i><i class="item2"></i><i class="item3"></i>
    </div>
    <!--} 进度条 -->


    <!-- 第三步的第三部分  {-->
    <div class="satPay_content_box2">
        <div class="satPay_title2">确认个人信息</div>
        <p>*请确保以下所有信息均正确无误</p>
        <div class="satPay_info_box3">
            <div class="text_title">SAT报名信息</div>
            <div class="clearfix">
                <div class="box1L"><img><button type="button" class="satPay_btn3">修改照片</button></div>
                <div class="box1R">
                    <table>
                        <tr><td>姓：<span>Qiang</span></td><td>性别：<span>Femal</span></td></tr>
                        <tr><td>名：<span>Kaowei</span></td><td>高中：<span>我的学校不在列表中</span></td></tr>
                        <tr><td>地址：<span>这是地址这是地址这是地址这是地址这是地址这是地址这是地址这是地址</span></td><td>预计毕业时间：<span>1996.06.22</span></td></tr>
                        <tr><td colspan="2">生日：<span>1990.02.22</span></td></tr>
                    </table>
                    <button type="button" class="satPay_btn3">修改我的信息</button>
                </div>
            </div>
            <div class="box2 clearfix">
                <div class="box2L"><p>考试时间</p><span>2016年6月4日</span></div>
                <div class="box2R"><p>考试地址</p><span>CANADIAN ACAD THEATER，4-1 KOYO-CHO NAKA, KOBE, JAPAN</span></div>
            </div>
            <button type="button" class="satPay_btn3">修改考场信息</button>

        </div>

        <div class="satPay_info_box3 clearfix">
            <div class="text_title">报名费用明细</div>
            <table class="box3">
                <tr><td>项目</td><td class="text-title">费用</td></tr>
                <tr>
                    <td colspan="2">
                        <ol>
                            <li><span>SAT Registration</span><span class="text-num">$1000</span></li>
                            <li><span>International Registration Fee－Americas</span><span class="text-num">$100000</span></li>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="total_box">
                        <div class="text-total">Total<span>$101000</span></div>
                    </td>
                </tr>
            </table>
            <button type="button" class="satPay_btn1">去支付</button>
        </div>
    </div>
    <!--} 第三步的第三部分  -->

    <div style="line-height: 30px; padding: 20px 0; background: #4fc4f6; font-size: 18px; text-align: center">-----我是华丽丽的分隔线-----<br>以下内容是第四步</div>

    <!-- 第四步  {-->
    <div class="satPay_content_box2">
        <div class="satPay_title2">支付</div>
        <p>*请确保以下所有信息均正确无误</p>
        <div class="satPay_info_outer clearfix">
            <div class="pull-left">
                <div class="satPay_info_box4">
                    <div class="text_title">Credit Card Billing Address</div>
                    <p>First Name</p>
                    <input type="text" class="form-control registerError"><!--报错样式增加样式名 registerError -->
                    <div class="text_s5" style="display:block;">不能为空</div>
                    <p>Last Name</p>
                    <input type="text" class="form-control">
                    <p>Address 1</p>
                    <input type="text" class="form-control">
                    <p>Address 2</p>
                    <input type="text" class="form-control">
                    <p>City</p>
                    <input type="text" class="form-control">
                    <p>Zip/Postal Code</p>
                    <input type="text" class="form-control">
                    <p>County</p>
                    <select class="form-control"><option>China</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                </div>
                <div class="satPay_info_box4">
                    <div class="text_title">Details</div>
                    <table>
                        <tr><td>Item</td><td>Price</td></tr>
                        <tr><td>SAT Registration</td><td>$43.00</td></tr>
                        <tr><td>International registration Fee-Americas</td><td>$9.00</td></tr>
                        <tr><td>Total</td><td>$52.00</td></tr>
                    </table>
                </div>
            </div>
            <div class="pull-right">
                <div class="satPay_info_box4">
                    <div class="text_title">Payment Information</div>
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#">Credit Card</a></li>
                    </ul>
                    <p>Type of Card</p>
                    <select class="form-control"><option>China</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                    <p>Card Number</p>
                    <input type="text" class="form-control">
                    <div class="clearfix">
                        <div class="pull-left">
                            <p>Expiration  Month</p>
                            <select class="form-control"><option>Month</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                        </div>
                        <div class="pull-right">
                            <p>Expiration  Year</p>
                            <select class="form-control"><option>Year</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                        </div>
                    </div>
                    <p>Security Code<span class="tips-s3"><img src="content-web/images/sat_pic1.jpg" /></span></p>
                    <input type="text" class="form-control">
                    <p class="text_box">Submit Payment</p>
                    <button type="button" class="satPay_btn1 submit">Cancel</button><button type="button" class="satPay_btn1">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!--} 第四步  -->


</div>
<!--} content外框 -->

<!--成功跳转页面 {-->

<div class="neea-signup-box">
    <div class="neea-signup-successBg"><span></span></div>
    <div class="neea-signup-content">
        <h2>报名成功</h2>
        <div class="infoTxt">报名结果我们将在30分钟之内通知您！</div>
        <p>2016 年06月20日</p>
        <p>M78星云</p>
        <p>ASIA WORLD-EXPO-ZONE G</p>
        <p>SAT考位代报</p>
        <div class="neea-warning2">*短信通知成功后，请至个人中心－我的报名下载并打印SAT准考证。<br>*考试当天必须携带准考证，凭证入场。</div>
        <div class="neea-signup-btn">
            <button class="btn neea-signup-backSignup" type="submit">返回我的报名</button>
        </div>

    </div>
</div>

<!-- } 成功跳转页面 -->


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