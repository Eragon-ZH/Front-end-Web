var tableWrapper = document.getElementById("table-wrapper");
var regionList = [];
var productList = [];
var chartHeight = 300;

window.onclick = clickFun;

window.onload = function() {
    // 根据hash设置选项
    setStatus();
    let data = getData();
    // 绘制图表
    redrawTable(data);
    data = cleanData(data);
    let rate = (chartHeight-20)/maxData(data);
    redrawChartAll();
    // 添加鼠标事件
    var trList = document.querySelectorAll("tr");
    for ( let i=1; i<trList.length; i++ ){
        trList[i].onmouseover = redrawChartSingle;
    }
    var table = document.querySelector("table");
    table.onmouseout = redrawChartAll;
}
// 前进后退
window.onpopstate = setStatus;
