// 绘制直方图
function createXY() {
    let svg = document.getElementById("histogram");
    x = document.createElementNS("http://www.w3.org/2000/svg","line");
    x.setAttribute("x1",0);
    x.setAttribute("y1",chartHeight);
    x.setAttribute("x2",500);
    x.setAttribute("y2",chartHeight);
    x.setAttribute("stroke","black");
    y = document.createElementNS("http://www.w3.org/2000/svg","line");
    y.setAttribute("x1",0);
    y.setAttribute("y1",0);
    y.setAttribute("x2",0);
    y.setAttribute("y2",chartHeight);
    y.setAttribute("stroke","black");
    svg.appendChild(x);
    svg.appendChild(y);
}
function createRect(x, height, count, index, rate, color) {
    let re = document.createElementNS("http://www.w3.org/2000/svg","rect");
    re.setAttribute("x", x+(30/count)*index );
    re.setAttribute("y", chartHeight-height*rate);
    re.setAttribute("height", height*rate);
    re.setAttribute("width", 30/count);
    // console.log(color);
    re.setAttribute("fill", color);
    return re
}
// count为共有几组数据，决定了wideth
// index为当前是第几组数据，决定了x
function drawHistogram(data, rate, count, index, color) {
    createXY();
    let svg = document.getElementById("histogram");
    // console.log("color",color);
    for ( var i=0; i<12; i++ ){
        let re = createRect( 40*i+5, data[i], count, index, rate, color );
        svg.appendChild(re);
    }
}
