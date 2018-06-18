// 绘制直方图
function createXY() {
    let svg = document.getElementById("histogram");
    x = document.createElementNS("http://www.w3.org/2000/svg","line");
    x.setAttribute("x1",0);
    x.setAttribute("y1",300);
    x.setAttribute("x2",500);
    x.setAttribute("y2",300);
    x.setAttribute("stroke","black");
    y = document.createElementNS("http://www.w3.org/2000/svg","line");
    y.setAttribute("x1",0);
    y.setAttribute("y1",0);
    y.setAttribute("x2",0);
    y.setAttribute("y2",300);
    y.setAttribute("stroke","black");
    svg.appendChild(x);
    svg.appendChild(y);
}
function createRect(x, height, rate) {
    let re = document.createElementNS("http://www.w3.org/2000/svg","rect");
    re.setAttribute("x", x);
    re.setAttribute("y", 299-height*rate);
    re.setAttribute("height", height*rate);
    re.setAttribute("width", 30);
    re.setAttribute("fill", "rgb(96,172,252)");
    return re
}
function drawHistogram(data) {
    createXY();
    let svg = document.getElementById("histogram");
    let max = Math.max.apply(null,data);
    let rate = 280/max;
    for ( var i=0; i<12; i++ ){
        let re = createRect( 40*i+5, data[i], rate );
        svg.appendChild(re);
    }
}
