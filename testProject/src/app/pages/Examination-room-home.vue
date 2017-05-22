

<template>
<div>
    <!-- 看考场-head  {-->
    <div class="content-box-s4">
        <div class="page-title1" title="看考场"></div>
    </div>
    <!--} 看考场-head -->

    <!-- 看考场-筛选和搜索  {-->
    <div class="content-box-s5">
        <div class="container">
            <div class="row">
                <div class="col-xs-2">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            请先选择考试类型
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">雅思大陆</a></li>
                            <li><a href="#">托福大陆</a></li>
                            <li><a href="#">托福国际</a></li>
                        </ul>
                    </div><!-- /btn-group -->
                </div><!-- /.col-xs-2 -->
                <div class="col-xs-8">
                    <div class="input-group has-feedback">
                        <input type="text" class="form-control" placeholder="输入考场名">
                        <button type="button" class="glyphicon glyphicon-remove form-control-feedback" style="display: none;"></button><!--删除输入文本的按钮，输入文本后显示，点击清空文本框内容 -->
                        <span class="input-group-btn"><button class="btn btn-default btn-s4" type="button">搜索一下</button></span>
                    </div><!-- /input-group -->
                </div><!-- /.col-xs-8 -->
            </div><!-- /.row -->
        </div>
    </div>
    <!--} 看考场-筛选和搜索 -->

    <!-- 看考场-列表  {-->
    <div class="content-box-s3">
        <!-- 标签 一级分类  {-->
        <ul class="nav nav-tabs nav-justified nav-s1">
            <li role="presentation" class="active"><a href="#">雅思大陆</a></li>
            <li role="presentation"><a href="#">托福大陆</a></li>
            <li role="presentation"><a href="#">托福国际</a></li>
        </ul>
        <!--} 标签 一级分类 -->
        <!-- 标签 二级分类  {-->
        <div class="content-box-s6">
            <div class="btn-group btn-group-s1" role="group">
                <span class="btn btn-default active">普通学术类</span>
                <span class="btn btn-default">普通培训类</span>
                <span class="btn btn-default">签证学术类</span>
                <span class="btn btn-default">签证培训类</span>
            </div>
        </div>
        <!--} 标签 二级分类 -->

        <!-- 考场列表  {-->
        <div class="Exam-room-list">
            <!--一个区域 以此重复 {-->
            <dl class="ExamChooseBox clearfix Exam-room-box">
                <dt class="ExamChooseTag"><span>华北</span></dt>
                <dd>
                    <button type="button" class="ExamChooseBtn Current"><span>北京</span></button>
                    <!--选中按钮增加样式  Current 、 选择完毕其余变为不可选按钮 增加样式 disabled -->

                    <button type="button" class="ExamChooseBtn"><span>呼和浩特</span></button>
                    <button type="button" class="ExamChooseBtn"><span>天津</span></button>
                    <button type="button" class="ExamChooseBtn"><span>太原</span></button>
                    <button type="button" class="ExamChooseBtn"><span>石家庄</span></button>
                    <button type="button" class="ExamChooseBtn"><span>石家庄</span></button>
                    <!--一行所有区域的校区 默认隐藏  ps:
                        1、6个区域（一行）后面跟随一个校区的div，里面包含6个区域的校区，点击展开；
                        2、不足6个做一行处理；
                        {-->
                    <div class="Exam-room-bg clearfix" style="display: block;">
                        <!--一个区域的校区 以此重复{-->
                        <div class="Exam-room-box2" style="display: block;">
                            <a href="#" class="ExamChooseBtn">北京师范大学辅仁校区 继续教育与教师培训学院</a>
                            <a href="#" class="ExamChooseBtn">北京师范大学辅仁校区</a>
                            <a href="#" class="ExamChooseBtn">中华女子学院</a>
                        </div>
                        <!--} 一个区域的校区 以此重复 -->
                    </div>
                    <!--} 一行所有区域的校区 -->
                    <button type="button" class="ExamChooseBtn"><span>石家庄</span></button>
                </dd>
            </dl>
            <!--} 一个区域 以此重复 -->

        </div>
        <!--} 考场列表 -->


    </div>
    <!--} 看考场-列表 -->

    <!-- 看考场-搜索结果  {-->
    <div class="content-box-s3 Exam-room-3Outer" style="display: block;">
        <h4>“<span>雅思大陆</span>—<span>北京</span>”搜索结果如下</h4>
        <div class="Exam-room-box3 clearfix">
            <div class="Exam-room-3Item">
                <img src="../pages/content-web/images/pic3.jpg">
                <a href="#" class="ER-school-name"><span>北京师范大学</span></a>
            </div>
            <div class="Exam-room-3Item">
                <img src="../pages/content-web/images/pic3.jpg">
                <a href="#" class="ER-school-name"><span>北京外交人员服务局信息与培训中心</span></a>
            </div>
        </div>
    </div>
    <!--} 看考场-搜索结果 -->

    <!-- 看考场-搜索为0时返回结果  {-->
    <div class="content-box-s3 Exam-room-3Outer" style="display:block;">
        <h3><small>没有搜索到和  “<span>wuxian</span>” 相关的内容，不如换个关键字试试吧。</small></h3>
        <div class="content-empty"></div>
    </div>
    <!--} 看考场-搜索为0时返回结果 -->
</div>

</template>