<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--考位报名首页-选择时间地点</title>
    <!-- Bootstrap -->
    <link href="content-web/css/bootstrap.min.css" rel="stylesheet">
    <link href="content-web/css/style.css" rel="stylesheet">

</head>

<body>
<!-- 已选时间地点显示区域 当向下滚动时，给content-box-s2添加类content-s2-fixed{-->
<div class="content-box-s8">
<div class="content-box-s2">
    <div class="container">
        <div class="row">
            <div class="col-xs-4">
                <span class="AlChTitle">已选时间</span>
                <div class="AlChItemOuter">
                    <!-- 显示 已选择的项 {-->
                    <div class="AlChItem">
                        <span class="AlChItemCon">06月13日</span>
                        <span class="AlChItemDel"></span><!-- 删除 已选择的项 -->
                    </div>
                    <!--} 显示 已选择的项 -->
                </div>
                <div class="AlChItemOuter">
                    <!-- 显示 已选择的项 {-->
                    <div class="AlChItem" style="display: none;">
                        <span class="AlChItemCon"></span>
                        <span class="AlChItemDel"></span><!-- 删除 已选择的项 -->
                    </div>
                    <!--} 显示 已选择的项 -->
                </div>
            </div>
            <div class="col-xs-4 col-xs-offset-1">
                <span class="AlChTitle">已选地点</span>
                <div class="AlChItemOuter">
                    <!-- 显示 已选择的项 {-->
                    <div class="AlChItem">
                        <span class="AlChItemCon">乌鲁木齐</span><!--class="AlChItemCon"是溢出省略样式-->
                        <span class="AlChItemDel"></span><!-- 删除 已选择的项 -->
                    </div>
                    <!--} 显示 已选择的项 -->
                </div>
                <div class="AlChItemOuter">
                    <!-- 显示 已选择的项 {-->
                    <div class="AlChItem" style="display: none;">
                        <span class="AlChItemCon"></span>
                        <span class="AlChItemDel"></span><!-- 删除 已选择的项 -->
                    </div>
                    <!--} 显示 已选择的项 -->
                </div>
            </div>
            <div class="col-xs-2 col-xs-offset-1">
                <button type="button" class="AlChSubmit">确认查询</button>
                <!-- 不可用增加样式 disabled eg.<button type="button" class="AlChSubmit disabled"></button>  -->
            </div>
        </div>
    </div>
</div>
</div>
<!--} 已选时间地点显示区域 -->

<div class="content-box-s3">
    <h2 class="choose-TP-type">雅思普通培训类</h2>
    <!-- 选择时间区域 {-->
    <h3 class="choose-TP-title">考试时间选择</h3>
    <div class="choose-TP-outer">
        <div class="choose-TP-btn-box"><button type="button" class="choose-TP-page-left"></button></div>

        <div class="choose-TP-box">
            <!-- 年月与日期选择区域 begin {-->
            <div class="ExamTimeWrap">
                <div class="ExamTimeInner" style="left:0;">

                    <!--一个月份 一页最多4个月份 每月最多6个 {-->
                    <dl class="ExamChooseBox clearfix">
                        <dt class="ExamChooseTag"><span>2015</span>/<span>06</span></dt>
                        <dd>
                            <button type="button" class="ExamChooseBtn Current"><strong>13</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                            <!--选中按钮增加样式  Current 、 选择完毕其余变为不可选按钮 增加样式 disabled -->

                            <button type="button" class="ExamChooseBtn disabled"><strong>14</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                            <!--当没有逾期样式时，给DateBox里放周几的em添加类out-time2,字号不变与左侧文字底对齐-->
                            <button type="button" class="ExamChooseBtn"><strong>27</strong><span class="DateBox"><em class="out-time2">周六</em></span></button>
                            <button type="button" class="ExamChooseBtn"><strong>13</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                            <button type="button" class="ExamChooseBtn"><strong>14</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                            <button type="button" class="ExamChooseBtn"><strong>27</strong><span class="DateBox"><em class="out-time">逾期</em><em class="out-time2">周六</em></span></button>
                        </dd>
                    </dl>
                    <!--} 一个月份 -->

                </div>
                <div class="ExamTimeInner" style="left:840px;">
                    <dl class="ExamChooseBox clearfix">
                        <dt class="ExamChooseTag"><span>2015</span>/<span>06</span></dt>
                        <dd>
                            <button type="button" class="ExamChooseBtn Current"><strong>13</strong><span>周六</span></button>
                            <!--选中按钮增加样式  Current 、 选择完毕其余变为不可选按钮 增加样式 disabled -->

                            <button type="button" class="ExamChooseBtn disabled"><strong>14</strong><span>周日</span></button>
                            <button type="button" class="ExamChooseBtn"><strong>27</strong><span>周六</span></button>
                            <button type="button" class="ExamChooseBtn"><strong>13</strong><span>周六</span></button>
                            <button type="button" class="ExamChooseBtn"><strong>14</strong><span>周日</span></button>
                            <button type="button" class="ExamChooseBtn"><strong>27</strong><span>周六</span></button>
                        </dd>
                    </dl>
                </div>
            </div>

            <!--} 年月与日期选择区域 end-->
        </div>

        <div class="choose-TP-btn-box"><button type="button" class="choose-TP-page-right"></button></div>
    </div>
    <!--} 选择时间区域 -->

    <!-- 选择地点区域 {-->
    <h3 class="choose-TP-title">考试地点选择</h3>
    <div class="choose-TP-outer">
        <div class="choose-TP-box">
            <!--一个区域 {-->
            <dl class="ExamChooseBox clearfix">
                <dt class="ExamChooseTag"><span>华北</span></dt>
                <dd>
                    <button type="button" class="ExamChooseBtn Current text-en"><span>NAGAKUTE C</span></button><!--英文字体“text-en”-->
                    <!--选中按钮增加样式  Current 、 选择完毕其余变为不可选按钮 增加样式 disabled -->

                    <button type="button" class="ExamChooseBtn disabled"><span>呼和浩特</span></button>
                    <button type="button" class="ExamChooseBtn"><span>天津</span></button>
                    <button type="button" class="ExamChooseBtn"><span>太原</span></button>
                    <button type="button" class="ExamChooseBtn"><span>石家庄</span></button>
                </dd>
            </dl>
            <!--} 一个区域 -->

            <!--另一个区域 多行 {-->
            <dl class="ExamChooseBox clearfix">
                <dt class="ExamChooseTag"><span>华东</span></dt>
                <dd>
                    <button type="button" class="ExamChooseBtn"><span class="ExamChooseCon">上海</span></button><!--class="ExamChooseCon"是溢出省略样式-->
                    <button type="button" class="ExamChooseBtn"><span>南京</span></button>
                    <button type="button" class="ExamChooseBtn"><span>南昌</span></button>
                    <button type="button" class="ExamChooseBtn"><span>厦门</span></button>
                    <button type="button" class="ExamChooseBtn"><span>合肥</span></button>
                    <button type="button" class="ExamChooseBtn"><span>宁波</span></button>
                    <button type="button" class="ExamChooseBtn"><span>杭州</span></button>
                    <button type="button" class="ExamChooseBtn"><span>济南</span></button>
                    <button type="button" class="ExamChooseBtn"><span>温州</span></button>
                    <button type="button" class="ExamChooseBtn"><span>福州</span></button>
                    <button type="button" class="ExamChooseBtn"><span>苏州</span></button>
                    <button type="button" class="ExamChooseBtn"><span>青岛</span></button>
                </dd>
            </dl>
            <!--} 另一个区域 -->
        </div>
    </div>
    <!--} 选择地点区域 -->
</div>

</body>
</html>