<template>
    <div>
        <!--注册进度  进度条分割状态，默认bg_register_step1，第二第三状态分别为bg_register_step2，bg_register_step3替换之前的类-->
        <div class="register-steps bg_register_step1">
            <span class="stepsText">注册信息</span><span class="stepsText2">确认信息</span><span class="stepsText3">提交成功</span>
        </div>

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
                <!--提示语-->
                <div class="prompt-message">
                    您在此提交的个人信息将会显示在您的成绩报告上，一旦提交后就不能做任何修改，请确保这些信息的真实性和准确性。
                </div>
                <!--国家 地区-->
                <div class="register-input-box">
                    <span class="registerText">国家 / 地区</span>
                    <!--下拉框-->
                    <div class="dropdown outRegisterSelect">
                        <!--报错时添加类registerError-->
                        <button class="btn btn-default dropdown-toggle registerSelectBox registerError" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span class="SelectPlaceholderText">- 请选择 -</span>
                            <span class="btn_registerSelect"><span class="caret"></span></span>
                        </button>
                        <!--下拉框外加样式，此下拉框加registerSelectOption，小下拉框均加registerSelectOption2-->
                        <ul class="dropdown-menu registerSelectOption" style="display: none;" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <!--报错-->
                    <div class="registerError2" style="display:block;">请选择国家和地区</div>
                </div>
                <!--中文姓名-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">中文姓名</span><input class="inputBox2" type="text" placeholder="姓"/><input class="inputBox2" type="text" placeholder="名"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写正确格式的姓名</div>
                </div>
                <!--拼音 英文名-->
                <div class="register-input-box">
                    <span class="registerText">拼音 / 英文姓名</span><input class="inputBox2 registerError" type="text" placeholder="family name"/><input class="inputBox2 registerError" type="text" placeholder="first name"/>
                    <!--报错-->
                    <div class="registerError2" style="display:block;">请填写正确格式的姓名</div>
                    <div class="prompt-message2">中国大陆考生请按新华字典规则输入标准汉语拼音，中国香港、澳门和台湾考生请以证件上的拼音或英文姓名为准；非中国籍考生请输入护照上显示的英文姓名。</div>
                </div>
                <!--称谓-->
                <div class="register-input-box">
                    <span class="registerText">称谓</span>
                    <!--下拉框-->
                    <div class="dropdown outRegisterSelect">
                        <!--报错时添加类 registerError-->
                        <button class="btn btn-default dropdown-toggle registerSelectBox2" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span class="SelectPlaceholderText">- 请选择 -</span>
                            <span class="btn_registerSelect"><span class="caret"></span></span>
                        </button>
                        <ul class="dropdown-menu registerSelectOption2" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <!--报错-->
                    <div class="registerError2" style="display:none;">请选择性别</div>
                </div>
                <!--性别-->
                <div class="register-input-box">
                    <span class="registerText">性别</span>
                    <div class="radio sexBox">
                        <label class="sexBox2">
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked class="sexRadio">
                            男
                        </label>

                        <label class="sexBox2">
                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" class="sexRadio">
                            女
                        </label>
                    </div>

                    <!--报错-->
                    <div class="registerError2" style="display:none;">请选择性别</div>

                </div>
                <!--出生日期-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">出生日期</span>
                    <span class="bornDate">
            <!--年 begin-->
            <div class="dropdown outRegisterSelect">
                <button class="btn btn-default dropdown-toggle yearsDate" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="SelectPlaceholderText">2015年</span>
                    <span class="btn_registerSelect"><span class="caret"></span></span>
                </button>
                <ul class="dropdown-menu registerSelectOption3" aria-labelledby="dropdownMenu1">
                    <li><a href="#">1989</a></li>
                    <li><a href="#">1990</a></li>
                    <li><a href="#">1991</a></li>
                    <li><a href="#">1992</a></li>
                </ul>
            </div>
                        <!--年 end 月 begin-->
            <div class="dropdown outRegisterSelect">
                <button class="btn btn-default dropdown-toggle yearsDate" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="SelectPlaceholderText">9月</span>
                    <span class="btn_registerSelect"><span class="caret"></span></span>
                </button>
                <ul class="dropdown-menu registerSelectOption3" aria-labelledby="dropdownMenu1">
                    <li><a href="#">1989</a></li>
                    <li><a href="#">1990</a></li>
                    <li><a href="#">1991</a></li>
                    <li><a href="#">1992</a></li>
                </ul>
            </div>
                        <!--月 end 日 begin-->
            <div class="dropdown outRegisterSelect">
                <button class="btn btn-default dropdown-toggle yearsDate" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="SelectPlaceholderText">9日</span>
                    <span class="btn_registerSelect"><span class="caret"></span></span>
                </button>
                <ul class="dropdown-menu registerSelectOption3" aria-labelledby="dropdownMenu1">
                    <li><a href="#">1989</a></li>
                    <li><a href="#">1990</a></li>
                    <li><a href="#">1991</a></li>
                    <li><a href="#">1992</a></li>
                </ul>
            </div>
                        <!--日 end-->
        </span>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写出生日期</div>
                </div>
                <!--英文地址第一行-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">英文地址第一行</span><input class="inputBox" type="text"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写正确格式的地址</div>
                </div>
                <!--英文地址第二行-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">英文地址第二行</span><input class="inputBox" type="text" placeholder="以上英文地址每行最多输入55个字符"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写正确格式的地址</div>
                </div>
                <!--省份 / 州-->
                <div class="register-input-box">
                    <span class="registerText">省份 / 州</span>
                    <div class="ProvinceNational">
                        <!--下拉框-->
                        <div class="dropdown outRegisterSelect">
                            <!--报错时添加类registerError-->
                            <button class="btn btn-default dropdown-toggle registerSelectBox2" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span class="SelectPlaceholderText">- 在中国请选择 -</span>
                                <span class="btn_registerSelect"><span class="caret"></span></span>
                            </button>
                            <ul class="dropdown-menu registerSelectOption2" aria-labelledby="dropdownMenu1">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <!--下拉框-->
                        <!--报错-->
                        <div class="registerError2" style="display:none;">请填写正确的国家和地区</div>

                        <!--在美国或加拿大 begin-->
                        <div class="dropdown outRegisterSelect">
                            <!--报错时添加类registerError-->
                            <button class="btn btn-default dropdown-toggle registerSelectBox2" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span class="SelectPlaceholderText">- 在美国或加拿大请选择  -</span>
                                <span class="btn_registerSelect"><span class="caret"></span></span>
                            </button>
                            <ul class="dropdown-menu registerSelectOption2" aria-labelledby="dropdownMenu1">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <!--报错-->
                        <div class="registerError2" style="display:none;">请填写正确的国家和地区</div>
                        <!--在美国或加拿大 end-->

                        <!--报错时添加类registerError-->
                        <input type="text" class="inputBox2" placeholder="其他国家和地区"/>
                        <!--报错-->
                        <div class="registerError2" style="display:none;margin:8px 0;">请填写正确的国家和地区</div>
                    </div>
                </div>
            </div>

            <!--联系信息-->
            <div class="register-information-box">
                <!--信息标题-->
                <div class="informationTitle">
                    联系信息
                </div>
                <!--提示语-->
                <div class="prompt-message">
                    请提供完整、准确、常用的的联系方式，以确保您接收成绩单、考试重要通知以及方便我们能够及时联系到您。
                </div>
                <!--手机号码-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">手机号码</span><input class="inputBox" type="text"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写正确格式的手机号码</div>
                </div>
                <!--座机号码-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">座机号码</span><span class="registerText2">+ 86 - <input type="text" class="inputZone"/> - <input type="text" class="inputZone2"/></span>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写正确格式的座机号码</div>
                </div>
                <!--电子邮箱-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">电子邮箱</span><input class="inputBox" type="email"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写正确格式的电子邮箱</div>
                </div>
            </div>

            <!--身份验证信息-->
            <div class="register-information-box">
                <!--信息标题-->
                <div class="informationTitle">
                    身份验证信息
                </div>
                <!--提示语-->
                <div class="prompt-message">
                    请认真填写信息，确保证件上的姓名和生日等个人信息与报名信息完全一致，一旦提交后将不能做任何修改。
                </div>
                <!--选择身份-->
                <div class="register-input-box">
                    <span class="registerText">请选择您的身份</span>
                    <!--下拉框-->
                    <div class="dropdown outRegisterSelect">
                        <!--报错时添加类registerError-->
                        <button class="btn btn-default dropdown-toggle registerSelectBox2" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span class="SelectPlaceholderText">- 中国大陆考生 -</span>
                            <span class="btn_registerSelect"><span class="caret"></span></span>
                        </button>
                        <ul class="dropdown-menu registerSelectOption2" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <!--报错-->
                    <div class="registerError2" style="display:none;">请选择您的身份</div>
                </div>
                <!--证件类型-->
                <div class="register-input-box">
                    <span class="registerText">证件类型</span>
                    <!--下拉框-->
                    <div class="dropdown outRegisterSelect">
                        <!--报错时添加类registerError-->
                        <button class="btn btn-default dropdown-toggle registerSelectBox2" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span class="SelectPlaceholderText">- 请选择 -</span>
                            <span class="btn_registerSelect"><span class="caret"></span></span>
                        </button>
                        <ul class="dropdown-menu registerSelectOption2" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <!--报错-->
                    <div class="registerError2" style="display:none;">请选择证件类型</div>
                </div>
                <!--证件号码-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">证件号码</span><input class="inputBox2" type="text"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写正确格式的证件号码</div>
                </div>
                <!--护照-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">护照</span><input class="inputBox2" type="text"/>
                    <div class="registerError2" style="display:none;">请填写正确格式的护照编码</div>
                </div>
            </div>

            <!--安全信息-->
            <div class="register-information-box">
                <!--信息标题-->
                <div class="informationTitle">
                    安全信息
                </div>
                <!--提示语-->
                <div class="prompt-message">
                    <div class="prompt-message3">密码长度至少6位，最多20位。为了增强密码的安全性 ，密码中必须包含以下四种字符种的至少三种：</div>
                    <ul>
                        <li><span class="discBox"></span>大写英文字母（A到Z）</li>
                        <li><span class="discBox"></span>小写英文字母（a到z）</li>
                        <li><span class="discBox"></span>数字（0到9）</li>
                        <li><span class="discBox"></span>英文符号（如：!,$,#,%）</li>
                    </ul>
                </div>
                <!--输入密码-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">输入密码</span><input class="inputBox2" type="password"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">请输入正确密码</div>
                </div>
                <!--确认密码-->
                <div class="register-input-box">
                    <!--报错时在inputBox2后添加类registerError-->
                    <span class="registerText">确认密码</span><input class="inputBox2" type="password"/>
                    <!--报错-->
                    <div class="registerError2" style="display:none;">两次输入密码不一致</div>
                </div>
                <!--找回密码问题-->
                <div class="register-input-box">
                    <span class="registerText">找回密码问题</span>
                    <!--下拉框-->
                    <div class="dropdown outRegisterSelect">
                        <!--报错时添加类registerError-->
                        <button class="btn btn-default dropdown-toggle registerSelectBox2" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span class="SelectPlaceholderText">- 请选择 -</span>
                            <span class="btn_registerSelect"><span class="caret"></span></span>
                        </button>
                        <ul class="dropdown-menu registerSelectOption2" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <!--报错-->
                    <div class="registerError2" style="display:none;">请选择找回密码问题</div>
                </div>
                <!--答案-->
                <div class="register-input-box">
                    <!--报错时添加类registerError-->
                    <span class="registerText">答案</span><input class="inputBox2" type="password"/>

                    <!--报错-->
                    <div class="registerError2" style="display:none;">请填写答案</div>
                </div>


            </div>
            <!--按钮-->·
            <div class="registerBtnBox">
                <!--按钮置灰不可用样式，提交按钮替换为类 btn-sureNoSubmit，黑按钮替换为类 btn-noTemporary-->
                <button class="btn-sureNoSubmit">确认提交</button><button class="btn-noTemporary">暂存信息</button>
            </div>
        </div>
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
                <p class="foot-text2">电子邮箱：contact@qiangkaowei.org</p>
                </p>
            </div>
        </footer>
        <!--} 友情链接与版权 -->
    </div>
</template>