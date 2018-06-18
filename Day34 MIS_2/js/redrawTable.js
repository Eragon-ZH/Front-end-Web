// 重绘表格
function redrawTable(data) {
    tableWrapper.innerHTML = "";
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var title = ["商品", "地区", "一月", "二月", "三月", "四月", "五月",
            "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    var th, td;
    var regionCount = countSelect("region");
    var productCount = countSelect("product");

    tableWrapper.appendChild(table);
    table.appendChild(tr);
    // 表头
    for ( i in title ) {
        th = document.createElement("th");
        th.innerHTML = title[i];
        tr.appendChild(th);
    }
    // 内容
    for ( i in data ) {
        tr = document.createElement("tr");
        table.appendChild(tr);
        for ( j in data[i] ) {
            td = document.createElement("td");
            td.innerHTML = data[i][j];
            tr.appendChild(td);
        }
    }
    // 如果选了一个区域和多个商品，则区域在前
    if ( productCount>1 && regionCount==1 ) {
        changeTd();
    }
    // 将同名的合并
    mergeTable(1,0);
    // 为新绘制的表格添加事件
    var trList = document.querySelectorAll("tr");
    for ( let i=1; i<trList.length; i++ ){
        trList[i].onmouseover = redrawChart;
    }
    document.querySelector("table").onmouseout = redrawLineChart;
}
