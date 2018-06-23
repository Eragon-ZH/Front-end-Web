// 获取该class有多少被选中
function countSelect(className) {
    var selectList = document.getElementsByClassName(className);
    var count = 0;
    for ( var i=0; i<selectList.length; i++ ) {
        if ( selectList[i].checked && selectList[i].value != "全选") {
            count += 1;
        }
    }
    return count;
}
// 选中全部选项
function selectAll(className) {
    var selectList = document.getElementsByClassName(className);
    for ( var i=0; i<selectList.length; i++ ) {
        selectList[i].checked = true;
    }
}
// 是否全部选中
function isSelectAll(className) {
    var count = countSelect(className);
    var selectList = document.getElementsByClassName(className);
    if ( count == selectList.length-1 ) {
        return true;
    }
    else {
        return false;
    }
}
// 将“全选”选项取消选中
function setLastCheckedFalse(className) {
    var selectList = document.getElementsByClassName(className);
    for ( var i=0; i<selectList.length; i++ ) {
        if ( selectList[i].value == "全选" ) {
            selectList[i].checked = false;
        }
    }
}
// 是否没有被选中的
function isOnlySelect(className) {
    var count = countSelect(className);
    if ( count == 0 ) {
        return true;
    }
    else {
        return false;
    }
}
