// 绘制折线图
function drawLineChart(data, color, rate) {
    let can = document.getElementById("line-chart");
    let ctx = can.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,chartHeight);
    ctx.lineTo(500,chartHeight);
    ctx.strokeStyle = "#60acfc"
    ctx.stroke();

    let max = Math.max.apply(null, data);
    for ( let i=1; i<12; i++ ){
        ctx.moveTo( 40*(i-1)+20, chartHeight-data[i-1]*rate );
        ctx.lineTo( 40*i+20, chartHeight-data[i]*rate );
    }
    ctx.strokeStyle = color;
    ctx.stroke();

    for ( let i=0; i<12; i++ ){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(40*i+20, chartHeight-data[i]*rate, 3, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    // ctx.closePath();
}
