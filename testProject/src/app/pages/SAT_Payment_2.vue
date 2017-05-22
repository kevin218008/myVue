<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--SAT支付第三步一二部分</title>
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
    <div class="satPay_bar_box satPay_bar_step4"><!-- 进度条变化将satPay_bar_step1 样式改为 satPay_bar_step2、satPay_bar_step3...satPay_bar_step7 -->
        <span class="item1"><label>1</label></span>
        <span class="item2"><label>2</label></span>
        <span class="item3"><label>3</label></span>
        <span class="item4"><label>4</label></span>
        <i class="item0"></i><i class="item1"></i><i class="item2"></i><i class="item3"></i>
    </div>
    <!--} 进度条 -->

    <!-- 第三步的第一部分 {-->
    <div class="satPay_content_box2">
        <div class="satPay_title">
            考场信息<span class="text-r">收起</span>
        </div>
        <div class="satPay_info_box1 clearfix">
            <div class="satPay_info_box1L">
                <div class="box1">
                    <img src="content-web/images/sat_place_HK.jpg">
                    <p>香港</p>
                    <span class="icon1">2016.5.27</span>
                    <span class="icon2">SAT subject test</span>
                </div>
                <button type="button" class="satPay_btn3">修改考场信息</button>
            </div>
            <div class="satPay_info_box1R">
                <dl>
                    <dt>考场名称：</dt>
                    <dd>HONG KONG INTERNATIONAL AIRPORT</dd>
                    <dd>教师培训学院</dd>
                </dl>
                <dl>
                    <dt>考场地址：</dt>
                    <dd>HKEAA SAN PO KONG OFFICE 1ST FLOOR</dd>
                    <dd>香港考试及评核局新蒲岗办事处1楼</dd>
                </dl>
                <dl>
                    <dt>Subject ：</dt>
                    <dd>U.S. History</dd>
                    <dd>Biology E/M</dd>
                    <dd>Mathematics Level 1</dd>
                </dl>
            </div>
        </div>

        <div class="satPay_title">个人信息</div>
        <div class="satPay_info_box2">
            <div class="box-style">
                <span class="text_s2">姓</span>
                <input type="text" class="form-control registerError"><!--报错样式增加样式名 registerError -->
                <span class="text_s3">*<span class="text_s4">请填写姓名拼音。例：Zhang</span></span>
                <div class="text_s5" style="display:block;">不能为空</div>
            </div>
            <div class="box-style">
                <span class="text_s2">名</span>
                <input type="text" class="form-control">
                <span class="text_s3">*<span class="text_s4">请填写姓名拼音。例：San</span></span>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
            <div class="box-style">
                <span class="text_s2">性别</span>
                <div class="radio sexBox">
                    <label class="sexBox2"><input type="radio" name="optionsRadios" class="sexRadio" checked>男</label>
                    <label class="sexBox2"><input type="radio" name="optionsRadios" class="sexRadio">女</label>
                </div>
                <span class="text_s3">*</span>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
            <div class="box-style">
                <span class="text_s2">生日</span>
                <div class="text_box">
                    <select class="form-control select1"><option>年</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                    <select class="form-control select1 text_default"><option>月</option></select><!-- 选项内容为非提示文字时，去掉样式 text_default -->
                    <select class="form-control select1"><option>日</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                </div>
                <span class="text_s3">*</span>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
        </div>

        <div class="satPay_title">高中信息</div>
        <div class="satPay_info_box2">
            <div class="box-style">
                <span class="text_s2">高中学校</span>
                <div class="text_box">
                    <input type="text" class="form-control"><!-- 若勾选 我的学校不在列表，则文本框不可用，代码为： <input type="text" class="form-control" disabled> -->
                    <ul class="dropdown_box" style="display: none;">
                        <li title="鼠标经过显示完整内容">ASIA WORLD-EXPO -- ZONE HASIA WORLD-EXPO -- ZONE H</li>
                        <li title="鼠标经过显示完整内容">ASIA WORLD-EXPO -- ZONE H</li>
                    </ul>
                </div>
                <span class="text_s3">*<span class="text_s4">若无法找到对应学校，请勾选下方“我的学校不在列表中”</span></span>
                <div class="text_s6"><label><input type="checkbox">我的学校不在列表中</label></div>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
            <div class="box-style">
                <span class="text_s2">预计毕业时间</span>
                <div class="text_box">
                    <select class="form-control select1"><option>年</option></select><!-- 选项内容为提示文字时，增加样式 text_default-->
                    <select class="form-control select1"><option>月</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                </div>
                <span class="text_s3">*<span class="text_s4">若已经高中毕业，请勾选下方“我已经高中毕业”</span></span>
                <div class="text_s6"><label><input type="checkbox">我已经高中毕业</label></div>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
        </div>

        <div class="satPay_title">邮寄信息</div>
        <div class="satPay_info_box2">
            <div class="box-style">
                <span class="text_s2">国家</span>
                <div class="text_box">
                    <select class="form-control"><option>中国</option></select><!-- 选项内容为提示文字时，增加样式 text_default -->
                </div>
                <span class="text_s3">*</span>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
            <div class="box-style">
                <span class="text_s2">城市</span>
                <input type="text" class="form-control"><!--报错样式增加样式名 registerError -->
                <span class="text_s3">*<span class="text_s4">请填写城市拼音，如“Beijing”</span></span>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
            <div class="box-style">
                <span class="text_s2">街道地址 1</span>
                <input type="text" class="form-control"><!--报错样式增加样式名 registerError -->
                <span class="text_s3">*<span class="text_s4">请填写英文地址，中间不能有（，）符号<br>例：海淀区玉泉路405号抢考位小区1幢二单元303室<br>译：303 Unit2 Block1 NO.405 Yuquan Rd. Haidian District</span></span>
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
            <div class="box-style">
                <span class="text_s2">街道地址 2</span>
                <input type="text" class="form-control"><!--报错样式增加样式名 registerError -->
                <div class="text_s5" style="display:none;">不能为空</div>
            </div>
        </div>

        <div class="btn_box clearfix">
            <button class="satPay_btn2 s1" type="submit">保存信息</button>
            <button class="satPay_btn2 s2" type="submit">下一步</button>
        </div>


    </div>

    <!--} 第三步的第一部分  -->



    <div style="line-height: 30px; padding: 20px 0; background: #4fc4f6; font-size: 18px; text-align: center">-----我是华丽丽的分隔线-----<br>以下内容是第三步的第二部分--上传个人照片</div>

    <!-- 第三步的第二部分--上传个人照片  {-->
    <div class="satPay_content_box2">
        <div class="satPay_title2">上传个人照片</div>
        <div class="satPay_photo_box1 clearfix">
            <div class="satPay_photo_box1L"><img style="display: none;" /></div>
            <div class="satPay_photo_box1R">
                <p>You must provide a photo with your registration, which will become part of your Admission Ticket. By providing your photo , you help us to ensure the integrity of the test administration for all students. </p>
                <p>* 在注册是你需要提供一张你的照片，这张照片将会出现在你的准考证上。<br>* 若考生上传任何不符合规格的照片，将有可能被拒绝参加考试。<br>* 照片格式必须为以下格式：JPG／GIF／PNG</p>
                <div class="satPay_photo_upload">
                    <button type="button" class="satPay_btn1 submit2">上传照片</button>
                    <span class="error-msg" style="display:none;">请先上传个人照片</span>
                    <span>上传进度<span class="upload_progress"><em style="width:10%;"></em><!--进度取值范围为0-100% --></span></span>
                </div>
            </div>
        </div>
        <div class="satPay_photo_btnBox">
            <button class="satPay_btn1" type="submit">下一步</button>
        </div>
        <div class="satPay_photo_title icon1">正确的范例</div>
        <ul class="satPay_photo_box2 clearfix">
            <li><img><span>照片中只有你一个人， 正面面对镜头</span></li>
            <li><img><span>照片中只需要看到你的头部和肩膀，正面面对镜头</span></li>
            <li><img><span>面部要清晰可见</span></li>
            <li><img><span>头部不能遮挡，宗教信仰原因除外</span></li>
            <li><img><span>能容易的通过照片辨认出你</span></li>
            <li><img><span>曝光要精准</span></li>
        </ul>
        <div class="satPay_photo_title icon2">错误的范例</div>
        <ul class="satPay_photo_box2 clearfix">
            <li><img><span>照片中有其他人</span></li>
            <li><img><span>头部显示不全</span></li>
            <li><img><span>模糊，有颗粒噪点，或者因为像素太低看到格子</span></li>
            <li><img><span>头部或脸部被遮挡，而且不是因为宗教信仰的原因</span></li>
            <li><img><span>必须是人类的照片</span></li>
            <li><img><span>曝光过度，有闪光灯的反应</span></li>
        </ul>
        <ul class="satPay_photo_box2 clearfix">
            <li><img><span>离的太远，显示头部和肩部即可</span></li>
            <li><img><span>太近，头部和肩部没有完全显示</span></li>
            <li><img><span>面部不能在阴影中</span></li>
            <li><img><span>不能侧身，或者四分之三侧身，导致你的面部没有全部显示出来</span></li>
        </ul>


    </div>

    <!-- 上传个人照片遮罩  {-->
    <div style="display:none;">
        <div class="modal-backdrop fade in"></div>
        <div class="satPay_photo_box3">
            <div class="imgBox"><img></div><!-- 此处照片截图样式将在功能开发完毕再调整 -->
            <button class="satPay_btn4 s1" type="button">取消上传</button><button class="satPay_btn4 s2" type="button">保存照片</button>
        </div>
    </div>
    <!--} 上传个人照片遮罩  -->

</div>
<!--} content外框 -->

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