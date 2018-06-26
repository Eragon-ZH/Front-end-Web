// 合并
function mergeTable(startRow,col) {
    var table = document.querySelector("table");
    // 如果i+1和start相同，则start的rowSpan+1,i+1隐藏
    for ( var i=startRow; i<table.rows.length-1; i++ ){
        if ( table.rows[startRow].cells[col].innerHTML == table.rows[i+1].cells[col].innerHTML ){
            table.rows[startRow].cells[col].rowSpan += 1;
            table.rows[i+1].cells[col].style.display = "none";
        }
        else {
            // 如果不相同接着进行下一个的比较
            mergeTable( i+1, 0);
        }
    }
}

// 将第一列和第二列调转
function changeTd() {
    var table = document.querySelector("table");
    for ( var i=0; i<table.rows.length; i++ ){
        var temp = table.rows[i].cells[0].innerHTML;
        table.rows[i].cells[0].innerHTML = table.rows[i].cells[1].innerHTML;
        table.rows[i].cells[1].innerHTML = temp;
    }
}
