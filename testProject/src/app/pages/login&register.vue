<template>
    <div>
        <!-- 导航 {-->
        <!--} 导航 -->

        <!-- 登录注册忘记密码外框 {-->
        <div class="banner-outer login-bg">
            <div class="login-box-outer1">
                <div class="login-box">
                    <!--登录 {-->
                    <div class="login-box-in" style="left:414px;">
                        <form class="form-signin">
                            <a href="#" class="form-signin-link1 go-right">立即注册</a>
                            <h3 class="form-signin-heading">
                                用户登录
                            </h3>
                            <label class="error-msg">手机号码格式错误</label>
                            <div class="form-signin-box">
                                <input type="tel" class="form-control form-text-icon1" placeholder="请输入手机号码" required=""><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->
                                <input type="password" class="form-control form-text-icon3" placeholder="请输入密码" required="">
                                <div class="checkbox">
                                    <a href="#" class="form-signin-link2">忘记密码</a>
                                    <label>
                                        <input type="checkbox" value="remember-me"> 记住密码
                                    </label>
                                </div>
                                <!--联合登录-->
                                <div class="signin-group">
                                    <div class="signin-title">其他账号登陆</div>
                                    <div class="signin-icon"><a><span class="icon-weibo"></span></a></div>
                                    <div class="signin-icon"><a><span class="icon-qq"></span></a></div>
                                    <div class="signin-icon"><a><span class="icon-wechat"></span></a></div>
                                </div>
                            </div>
                            <button class="btn btn-lg btn-block btn-s1" type="submit">登 录</button>
                        </form>
                    </div>
                    <!--} 登录 -->

                    <!--注册 {-->
                    <div class="login-box-in" style="left:0px;">
                        <form class="form-signin">
                            <a href="#" class="form-signin-link1 go-left">返回登录</a>
                            <h3 class="form-signin-heading">
                                新用户注册
                            </h3>
                            <label class="error-msg">手机号码格式错误</label>
                            <div class="form-signin-box">
                                <input type="tel" class="form-control form-text-icon1" placeholder="请输入手机号码" required=""><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->

                                <div class="form-inline">
                                    <input type="text" class="form-control form-text-icon2" placeholder="请输入验证码" required="">
                                    <button class="btn btn-s2" type="submit">发送验证码</button>
                                    <!-- 发送后进入按钮倒数不可用状态，代码为：<button class="btn btn-default btn-s2 disabled" type="submit">(55s)</button> -->
                                </div>
                                <input type="password" class="form-control form-text-icon3" placeholder="请输入密码" required="">
                                <div class="tips-s1">
                                    您绑定的手机号码，将用于即时接收您订阅的考位信息哦~(*^__^*)
                                </div>
                            </div>
                            <button class="btn btn-lg btn-block btn-s1" type="submit" @click="first()">注 册</button>
                        </form>
                    </div>
                    <!--} 注册 -->

                    <!--忘记密码 {-->
                    <div class="login-box-in" style="left:0px;">
                        <form class="form-signin">
                            <a href="#" class="form-signin-link1 go-left">返回登录</a>
                            <h3 class="form-signin-heading">
                                忘记密码
                            </h3>
                            <label class="error-msg">手机号码格式错误</label>
                            <div class="form-signin-box">
                                <input type="tel" class="form-control form-text-icon1" placeholder="请输入手机号码" required=""><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->

                                <div class="form-inline">
                                    <input type="text" class="form-control form-text-icon2" placeholder="请输入验证码" required="">
                                    <button class="btn btn-s2" type="submit">发送验证码</button>
                                    <!-- 发送后进入按钮倒数不可用状态，代码为：<button class="btn btn-default btn-s2 disabled" type="submit">(55s)</button> -->
                                </div>
                                <input type="password" class="form-control form-text-icon3" placeholder="请输入新密码" required="">
                                <input type="password" class="form-control form-text-icon3" placeholder="请确认新密码" required="">
                            </div>
                            <button class="btn btn-lg btn-block btn-s1" type="submit">确 认 修 改</button>
                        </form>
                    </div>
                    <!--} 忘记密码 -->
                </div>
            </div>
        </div>
        <!--} 登录注册忘记密码外框 -->

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

        <!--模态框 登录、注册、忘记密码 {-->

        <!-- Modal -->
        <div class="modal-backdrop fade in" style="display: none;"></div>
        <div class="modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog login-box-outer2"><!-- login-box-outer2为登录框新的定位信息与宽度 -->
                <div class="modal-content">
                    <div class="login-box">
                        <button type="button" class="btn-close"></button><!--关闭按钮 -->

                        <!--登录 {-->
                        <div class="login-box-in" style="left:0;">
                            <form class="form-signin">
                                <a href="#" class="form-signin-link1 go-right">立即注册</a>
                                <h3 class="form-signin-heading">
                                    用户登录
                                </h3>
                                <label class="error-msg">手机号码格式错误</label>
                                <div class="form-signin-box">
                                    <input type="tel" class="form-control form-text-icon1" placeholder="请输入手机号码" required=""><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->
                                    <input type="password" class="form-control form-text-icon3" placeholder="请输入密码" required="">
                                    <div class="checkbox">
                                        <a href="#" class="form-signin-link2">忘记密码</a>
                                        <label>
                                            <input type="checkbox" value="remember-me"> 记住密码
                                        </label>
                                    </div>
                                </div>
                                <button class="btn btn-lg btn-block btn-s1" type="submit">登 录</button>
                            </form>
                        </div>
                        <!--} 登录 -->

                        <!--注册 {-->
                        <div class="login-box-in" style="left:414px;">
                            <form class="form-signin">
                                <a href="#" class="form-signin-link1 go-left">返回登录</a>
                                <h3 class="form-signin-heading">
                                    新用户注册
                                </h3>
                                <label class="error-msg">手机号码格式错误</label>
                                <div class="form-signin-box">
                                    <input type="tel" class="form-control form-text-icon1" placeholder="请输入手机号码" required=""><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->

                                    <div class="form-inline">
                                        <input type="text" class="form-control form-text-icon2" placeholder="请输入验证码" required="">
                                        <button class="btn btn-default btn-s2" type="submit">发送验证码</button>
                                        <!-- 发送后进入按钮倒数不可用状态，代码为：<button class="btn btn-default btn-s2 disabled" type="submit">(55s)</button> -->
                                    </div>
                                    <input type="password" class="form-control form-text-icon3" placeholder="请输入密码" required="">
                                    <div class="checkbox">
                                        * 您绑定的手机号码，将用于即时接收您订阅的考位信息<br>&nbsp;&nbsp;&nbsp;哦~(*^__^*)
                                    </div>
                                </div>
                                <button class="btn btn-lg btn-block btn-s1" type="submit">注 册</button>
                            </form>
                        </div>
                        <!--} 注册 -->

                        <!--忘记密码 {-->
                        <div class="login-box-in" style="left:414px;">
                            <form class="form-signin">
                                <a href="#" class="form-signin-link1 go-left">返回登录</a>
                                <h3 class="form-signin-heading">
                                    忘记密码
                                </h3>
                                <label class="error-msg">手机号码格式错误</label>
                                <div class="form-signin-box">
                                    <input type="tel" class="form-control form-text-icon1" placeholder="请输入手机号码" required=""><!-- required="" 这句代码bootstrap会判断当输入为空时出现一个小的提示框，文字为 请填写此字段，若不需要可删掉。 -->

                                    <div class="form-inline">
                                        <input type="text" class="form-control form-text-icon2" placeholder="请输入验证码" required="">
                                        <button class="btn btn-default btn-s2" type="submit">发送验证码</button>
                                        <!-- 发送后进入按钮倒数不可用状态，代码为：<button class="btn btn-default btn-s2 disabled" type="submit">(55s)</button> -->
                                    </div>
                                    <input type="password" class="form-control form-text-icon3" placeholder="请输入新密码" required="">
                                    <input type="password" class="form-control form-text-icon3" placeholder="请确认新密码" required="">
                                </div>
                                <button class="btn btn-lg btn-block btn-s1" type="submit">确 认 修 改</button>
                            </form>
                        </div>
                        <!--} 忘记密码 -->
                    </div>
                </div>
            </div>
        </div>


        <!--} 模态框 登录、注册、忘记密码 -->


        <!--模态框 loading {-->
        <div class="modal-backdrop fade in" style="display: none;"></div>
        <div class="loading-box" style="display: none;">
            <div class="loading-pic"></div>
            <div class="loading-text">考位君正在赶来...</div>
        </div>
        <!--} 模态框 loading -->
        <ol>
            <my-item v-for="x in myList" v-bind:td="x"></my-item>
        </ol>
    </div>

</template>
<script>

    module.exports={
        data:function(){
            return {
                greeting:'hello'
            }
        },
        methods:{
            first:function () {
                console.log('hi')
            }

        }
//        created:function () {
//            console.log(this)
//        }
    }
</script>