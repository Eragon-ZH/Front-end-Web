// 点击事件
function clickFun(ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if ( target.nodeName.toLowerCase() == "input" ) {
        // 点击全选时全选
        if ( target.value == "全选" && target.checked ) {
            selectAll(target.className);
        }
        else {
            // 如果除了“全选”都选中了全选
            if ( isSelectAll(target.className) ) {
                selectAll(target.className);
            }
            else {
                // 如果没有全选取消“全选”的选中转态
                setLastCheckedFalse(target.className);
            }
            // 不能全不选
            if ( !target.checked && isOnlySelect(target.className)) {
                target.checked = true;
            }
        }
        // 获取数据 重绘图表
        redrawTable(getData());
        redrawChartAll();
        // console.log(data);
    }
    // if ( target.nodeName.toLowerCase() !== "td" ||
    //         target.nodeName.toLowerCase() !== "textarea" ) {
    //     clearButton();
    // }
}
