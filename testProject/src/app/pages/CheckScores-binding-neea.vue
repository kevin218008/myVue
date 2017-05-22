<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--绑定Neea</title>
    <!-- Bootstrap -->
    <link href="content-web/css/bootstrap.min.css" rel="stylesheet">
    <link href="content-web/css/style.css" rel="stylesheet">

</head>


<body>
<!-- 导航 {-->
<!--} 导航 -->

<!-- 绑定NEEA外框 {-->
<div class="content-box-s1 binding-neea-box" style="display: none;">
    <h3 class="form-signin-heading">
        <!--绑定雅思账号-->
        出分提醒方式
    </h3>
    <div class="binding-neea-tips-box">
        <h3>温馨提示</h3>
        <p style="display: none;">
            1.请正确填写NEEA账号信息；<br>2.请确认报名证件在考试日期前后一个月内有效；<br>3.请确保账户余额充足。
        </p>
        <p style="display: none;"> <!--出分提醒-绑定neea-->
            1.微信提醒只针对出分功能，其他功能仍以短信方式通知 ；<br>2.考生申请出分提醒服务后，请妥善保管考试官网账号信息，不用向他人透露；<br>3.出分内容仅供考生个人参考，不能作为签证申请时签证材料使用。
        </p>

    </div>
    <!-- 已绑定账号 {-->
    <div class="login-box" >
        <!--绑定NEEA {-->
        <form class="form-signin" style="display: none">
            <label class="error-msg" >密码或用户名错误</label>
            <div class="form-signin-box">
                <div class="form-group binding-form">
                    <label>已绑定NEEA ID</label>
                    <strong>2039430101</strong>
                    <button class="btn btn-s4" type="button">取消绑定</button>
                </div>

                <div>签发机关<input type="text" class="form-control form-text-icon4" placeholder="请输入您的签发机关" required=""></div><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->
                <p  class="help-block" >
                    例：<span class="tips-s2">公安部出入境管理局请输入：MPS Exit and Entry Administration</span>
                </p>

                <!--雅思未成年在此插入-->

                <div class="checkbox" >
                    <label>
                        <input type="checkbox" value="remember-me"> 已阅读并同意<a class="link-base" href="#">《网上报名协议》</a>
                    </label>
                    <label>
                        <input type="checkbox" value="remember-me"> 同步绑定出分提醒功能
                    </label>
                </div>
                <div class="form-group tips-s1" >
                    以上用户信息仅用于委托代理，考位君会为您的私人信息严格保密。代报为免费项目，不产生任何费用。
                </div>
            </div>
            <button class="btn btn-lg btn-block btn-s1" type="submit">登 录</button>
            <div class="text-box-s1"><a class="link-base" href="#">跳过验证</a></div>
        </form>
        <!--} 绑定NEEA -->


    </div>
    <!--} 已绑定账号 -->

    <!-- 未绑定账号 {-->
    <div class="login-box" >
        <!--绑定NEEA {-->
        <form class="form-signin">
            <label class="error-msg">密码或用户名错误</label>
            <div class="form-signin-box">

                <!-- 新增广告位 -->
                <div class="subscribe-link_box2" >
                    <a href="#"><img src="content-web/images/pic4_4.jpg"></a>
                    <a href="#"><span class="text_s7">免费出国留学通道 &gt;</span></a>
                </div>

                <div>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号<input type="tel" class="form-control form-text-icon1" placeholder="请输入NEEA账号/手机号/邮箱" required=""></div><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->
                <div>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码<div class="input-group2">
                    <input type="password" class="form-control form-text-icon3" placeholder="请输入密码" required="">
                    <button class="btn-see-pw2 cannot" type="button"></button><!--打开可见密码，把cannot样式删掉即可 -->
                </div></div>
                <div >签发机关<input type="text" class="form-control form-text-icon4" placeholder="请输入您的签发机关" required=""></div>
                <p class="help-block" >
                    例如：<span class="tips-s2">公安部出入境管理局请输入：MPS Exit and Entry Administration</span>
                </p>
                <!--雅思未成年 已绑定状态时通用 begin-->
                <div class="nonageBox" >
                    <div class="nonageRadioBox">是否已成年<label class="nonageRadio"><input type="radio" name="user-sex" />是</label>
                        <label><input type="radio" name="user-sex" />否</label></div>
                    <div>监护人姓名<input type="text" class="form-control" placeholder="张三" required=""></div>
                    <div>监护人手机<input type="text" class="form-control" placeholder="12345678890" required=""></div>
                    <div class="nonageRadioBox">
                        与考生关系<label class="relationRadio"><input type="radio" name="relation-type"/>父母</label>
                        <label>
                            <input type="radio" name="relation-type" class="other-type"/>其他<input type="text" class="form-control relationOther" placeholder="兄弟" required="" disabled />
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="readme-1" class="readme1">
                        <label for="readme-1" class="readme1-info"><span>本人</span>，作为考生的监护人，已经阅读并理解了<a href="#">《雅思考试考生须知》</a>（“考生须知”）和<a href="#">《雅思考试考生声明》</a>（“考生声明”）的相关内容并且已经将相关内容解释并告知了考生，在听取了考生的意见后，本人同意考生报名参加雅思考试并理解考生必须完全遵守“考生须知”和“考生声明”的所有条款。本人同意考生在考试结束后可以自行离开考点（如本人自行决定放弃陪同）。</label>
                    </div>
                    <div class="uploadInfo">
                        上传<a href="#">《雅思考试未成年考生监护人确认书》</a>扫描件。
                        <button type="button">选择文件</button>
                    </div>
                    <div class="binding-neea-tips-box">文件格式要求为JPG，JPEG，PDF，大小不超过4M。</div>
                    <table>
                        <tr>
                            <th>文件名</th>
                            <th>大小</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        <tr>
                            <td>雅思未成年人上传.png</td>
                            <td>145.0KB</td>
                            <td>文件上传类型不正确</td>
                            <td>上传失败</td>
                        </tr>
                        <tr>
                            <td>雅思未成年人上传.png</td>
                            <td>145.0KB</td>
                            <td>文件上传类型不正确</td>
                            <td><button type="button">删除</button></td>
                        </tr>
                    </table>
                    <div>
                        <input type="checkbox" id="readme-2" class="readme1">
                        <label for="readme-2" class="readme1-info">本人确认上传的“确认书”扫描件内容完整、真实、有效，与原件具有相同的法律效力。本人理解如有需要，可能会被要求在考试当天提供“确认书”签字原件。</label>
                    </div>
                    <div class="binding-neea-tips-box">根据雅思官方规定，未满十八周岁考生必须上传《未成年考生监护人确认书》才可完成。</div>
                </div>
                <!--雅思未成年 end-->
                <div class="checkbox" style="display: none;">
                    <label><input type="checkbox" value="remember-me"> 已阅读并同意<a class="link-base" href="#">《网上报名协议》</a></label>
                    <label><input type="checkbox" value="remember-me"> 同步绑定出分提醒功能</label>
                </div>
                <div class="tips-s1">
                    以上用户信息仅用于委托代理，考位君会为您的私人信息严格保密。
                    <!--代报为免费项目，不产生任何费用。-->
                </div>
            </div>
            <button class="btn btn-lg btn-s1 btn-marginTop" type="submit"> <!--如果是出分提醒，绑定neea:‘登录’改成‘下一步’，并且添加class:-->
                <!--登 录-->
                下一步
            </button>

        </form>
        <!--} 绑定NEEA -->
    </div>
    <!--} 未绑定账号 -->

    <div class="binding-neea-pic"><a href=""><img src="content-web/images/pic7_5.jpg"></a></div>

</div>
<!--} 绑定NEEA外框 -->

<!-- 出分提醒绑定neea后信息确认框 {-->
<div class="content-box-s1 binding-neea-box neeaBox-noPadding">
    <h3 class="form-signin-heading extra-padding">
        出分提醒方式
    </h3>
    <div class="extra-padding">
        <div class="binding-neea-tips-box ">
            <h3>温馨提示</h3>
            <p> <!--出分提醒-绑定neea:用户确认账号信息页面的文案-->
                1.微信提醒只针对出分功能，其他功能仍以短信方式通知 ；<br>2.考生申请出分提醒服务后，请妥善保管考试官网账号信息，不用向他人透露；<br>3.请确保考试账号、密码正确无误。若填写错误，短信提醒费用将无法退款；<br>4.出分内容仅供考生个人参考，不能作为签证申请时签证材料使用。
            </p>
        </div>
    </div>
    <!-- 已绑定账号 {-->
    <div class="login-box">
        <!--绑定NEEA - 出分提醒信息确认{-->
        <form class="form-signin">
            <div class="form-signin-box">
                <div class="form-group binding-form score-remind-title extra-padding">
                    <label>已绑定账号</label>
                    <strong>2039430101</strong>
                    <button class="btn btn-s4" type="button">取消绑定</button>
                </div>
                <div class="score-style-choose clearfix">
                    <div class="style-box msg floatL ">
                        <div class="style-title"><span>推荐</span>短信出分提醒</div>
                        <div class="stlye-pay">价格：29.90元  <span>原价99.90元</span></div>
                        <div class="msg-bg"></div>
                        <p>长期有效（绑定出分提醒期间）</p>
                    </div>
                    <!--点击时切换class:active-->
                    <div class="style-box wx floatL active">
                        <div class="style-title">微信出分提醒</div>
                        <div class="stlye-pay">价格：29.90元  <span>原价69.90元</span></div>
                        <div class="wx-bg"></div>
                        <p>有效期：2017年3月15日至2017年4月14日</p>
                    </div>
                </div>
                <!--雅思未成年在此插入-->

                <div class="checkbox extra-padding">
                    <label>
                        <input type="checkbox" value="remember-me"> 已阅读并同意<a class="link-base" href="#">《出分协议》</a>
                    </label>
                </div>

            </div>
            <button class="btn btn-lg btn-block btn-s1 score-bind-neea" type="submit">确 认</button>
        </form>
        <!--} 绑定NEEA - 出分提醒信息确认-->
    </div>
    <!--} 已绑定账号 -->

</div>
<!--} 出分提醒绑定neea后信息确认框 -->

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

<!--模态框 用户协议 {-->
<div class="modal-backdrop fade in" style="display: none;"></div>
<div class="modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog binding-agreement">
        <div class="modal-content">
            <button type="button" class="btn-close"></button><!--关闭按钮 -->
            <h3>用户协议</h3>
            <div class="modal-content-box">
                <div class="modal-content-text copyScroll">
                    用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议用户协议...
                </div>
            </div>
        </div>
    </div>
</div>
<!--} 模态框 用户协议 -->

</body>
</html>