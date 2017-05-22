<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>抢考位--考位报名首页-选择结果</title>
    <!-- Bootstrap -->
    <link href="content-web/css/bootstrap.min.css" rel="stylesheet">
    <link href="content-web/css/style.css" rel="stylesheet">

</head>

<body>
<!-- 选择结果-已选择内容  {-->
<div class="content-box-s4">
    <div class="choose-result-head" style="display: none">
        <h3>雅思普通培训类</h3>
        <div class="choose-result-head-box">
            <span class="choose-RH-item">2015年06月13日</span><span class="choose-RH-item mar-r2">2015年06月24日</span><span class="choose-RH-item">乌鲁木齐</span><span class="choose-RH-item">杭州</span>
        </div>
        <div class="choose-result-head-box">
            <button type="button" class="btn btn-s3">重新查询</button><button type="button" class="btn btn-s3">订阅考位</button>
        </div>
    </div>
    <!--新增德福选择结果-->
    <div class="choose-result-dafHead">德&nbsp;&nbsp;福</div>
</div>
<!--} 选择结果-已选择内容 -->

<!-- 选择结果-列表  {-->
<div class="container">
    <!-- 统计与排序按钮  {-->
    <div class="row choose-result-tool">
        <div class="col-xs-6 choose-RT-info">共有信息<span>5</span>条</div>
        <div class="col-xs-6 choose-RT-box">
            <label>
                <input type="checkbox" value="remember-me"> 只显示无考位安排组合
            </label>
            <button type="button" class="choose-RT-btn">按有无考位<span class="icon-sort normal"></span></button>
            <button type="button" class="choose-RT-btn">按时间<span class="icon-sort normal"></span></button>
            <button type="button" class="choose-RT-btn Current">按地点
                <span class="icon-sort down"></span><!-- 升序样式代码：<span class="icon-sort up"></span> -->
            </button>
        </div>
    </div>
    <!--} 统计与排序按钮 -->

    <!-- 数据列表  ps: 8-10条分为一页，若只有一页或不满一页，下面也要有只有一页的页码  {-->
    <div class="choose-result-list-outer">
        <div class="choose-result-list">
            <span class="item1">2015年05月08号</span><span class="item2">北京</span><span>北京西北角的那嘎达区的犄角旮旯街道的弄不灵清大学</span><span class="item3">考位紧张</span><span class="item4"><button type="button" class="btn btn-lg btn-s3">马上报名</button></span>
        </div>
        <div class="choose-result-list">
            <span class="item1">2015年05月08号</span><span class="item2">北京</span><span>北京大学</span><span class="item3"></span><span class="item4"><button type="button" class="btn btn-lg btn-s3 disabled">已报满</button></span>
        </div>
        <div class="choose-result-list">
            <span class="item1">2015年05月08号</span><span class="item2">北京</span><span>北京大学</span><span class="item3"></span><span class="item4"><button type="button" class="btn btn-lg btn-s3 disabled">无考场</button></span>
        </div>
    </div>
    <!--} 数据列表 -->

    <div class="choose-result-remarks" style="display: none;">注：君君暂不支持GMAT报名，请登录官网gmat.org报名</div>

    <!-- 高速代报 入口引导 -->
    <div class="HS-entrance-style1"><a href="#">开通高速代报，抢位成功率提升500%</a>&gt;&gt;</div>

    <!-- 页码  {-->
    <nav class="text-center">
        <ul class="pagination">
            <li class="disabled">
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    <!--} 页码 -->
</div>
<!--} 选择结果-列表 -->

</body>
</html>