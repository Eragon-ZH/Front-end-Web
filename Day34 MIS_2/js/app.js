var tableWrapper = document.getElementById("table-wrapper");
var regionList = [];
var productList = [];

window.onclick = clickFun;

window.onload = function() {
    data = getData();
    // 绘制图表
    redrawTable(data);
    drawHistogram([80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]);
    drawLineChart([80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200],"#60acfc");
    // 添加鼠标事件
    var trList = document.querySelectorAll("tr");
    for ( let i=1; i<trList.length; i++ ){
        trList[i].onmouseover = redrawChart;
    }
    var table = document.querySelector("table");
    table.onmouseout = redrawLineChart;
}
