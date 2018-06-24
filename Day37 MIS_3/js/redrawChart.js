// 鼠标滑过，用鼠标数据绘图
function redrawChartSingle() {
    // 不在输入数据状态才绘图
    if ( document.querySelectorAll("button").length == 1 ) {
        let tdList = this.cells;
        let data = [];
        for ( let j=2; j<tdList.length; j++ ){
            data.push(parseInt(tdList[j].innerHTML));
        }
        // console.log(data);
        document.getElementById("histogram").innerHTML="";
        let ctx = document.getElementById("line-chart").getContext("2d");
        ctx.clearRect(0,0,500,chartHeight);
        let rate = (chartHeight-20)/maxData(data);

        drawHistogram(data, rate, 1, 0, "#60acfc");
        drawLineChart(data,"#60acfc", rate);
    }
}
// 选项更改，用所有选中数据绘图
function redrawChartAll() {
    let data = cleanData(getData());
    let rate = (chartHeight-20)/maxData(data)
    let colors = [ "#60acfc", "#23c2db", "#63d6b2", "#dce459", "#feb64d",
            "#fa816b", "#d1587f", "#668ed6", "#ffe168"]
    // console.log("data",data);
    let ctx = document.getElementById("line-chart").getContext("2d");
    ctx.clearRect(0,0,500,chartHeight);
    for ( let i=0; i<data.length; i++ ){
        drawLineChart(data[i], colors[i], rate);
    }

    document.getElementById("histogram").innerHTML="";
    let count = data.length;
    if ( count>9 ) {
        drawHistogram(data, rate, 1, 0, "#60acfc");
        return;
    }
    else {
        for ( let i=0; i<data.length; i++ ){
            drawHistogram(data[i], rate, count, i, colors[i]);
        }
    }
}
