// 选项更改时，重绘所有图
function redrawChart() {
    let tdList = this.cells;
    let data = [];
    for ( let j=2; j<tdList.length; j++ ){
        data.push(tdList[j].innerHTML);
    }
    // console.log(data);
    document.getElementById("histogram").innerHTML="";
    let ctx = document.getElementById("line-chart").getContext("2d");
    ctx.clearRect(0,0,500,300);
    drawHistogram(data);
    drawLineChart(data,"#60acfc");
}
// 鼠标滑过时，重绘折线图
function redrawLineChart() {
    let data = getData();
    let color = [ "#60acfc", "#23c2db", "#3d6b2", "#dce459", "#feb64d",
            "#fa816b", "#d1587f", "668ed6", "#ffe168"]
    console.log(data);
    let ctx = document.getElementById("line-chart").getContext("2d");
    ctx.clearRect(0,0,500,300);
    for ( let i=0; i<data.length; i++ ){
        drawLineChart(data[i].slice(2), color[i]);
    }
}
