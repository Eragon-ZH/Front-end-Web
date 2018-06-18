// 绘制折线图
function drawLineChart(data, color) {
    let can = document.getElementById("line-chart");
    let ctx = can.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,300);
    ctx.lineTo(500,300);
    ctx.strokeStyle = "#60acfc"
    ctx.stroke();

    let max = Math.max.apply(null, data);
    let rate = 280/max;
    for ( let i=1; i<12; i++ ){
        ctx.moveTo( 40*(i-1)+20, 300-data[i-1]*rate );
        ctx.lineTo( 40*i+20, 300-data[i]*rate );
    }
    ctx.strokeStyle = color;
    ctx.stroke();

    for ( let i=0; i<12; i++ ){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(40*i+20, 300-data[i]*rate, 3, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    // ctx.closePath();
}
