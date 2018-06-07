var tableWrapper = document.getElementById("table-wrapper");
var regionList = [];
var productList = [];

window.onclick = clickFun;

window.onload = function() {
    data = getData();
    redraw(data);
}
