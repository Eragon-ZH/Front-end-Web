// 设置hash
function setHash() {
    let status = getStatus();
    let productList = status[0];
    let regionList = status[1];
    let hash = "地区:";
    for ( i in regionList ) {
        hash += regionList[i];
        hash += "/";
    }
    hash += ";商品：";
    for ( i in productList ) {
        hash += productList[i];
        hash += "/";
    }
    window.location.hash = hash ;
}
// 根据hash设置选中状态
function setStatus() {
    // 需要解码
    let hash = decodeURI(window.location.hash);
    if ( hash.length > 0 ) {
        let status = hash.split(";");
        let regions = status[0].slice(4);
        let products = status[1].slice(3);
        let regionSelect = document.getElementsByClassName("region");
        let productSelect = document.getElementsByClassName("product");
        let count = 0;
        for ( let i=0; i<regionSelect.length; i++ ) {
            regionSelect[i].checked = false;
            if ( regions.indexOf(regionSelect[i].value)  != -1 ) {
                regionSelect[i].checked = true;
                count += 1;
            }
        }
        // 都选中则选中“全选”
        if ( count == regionSelect.length-1 ) {
            regionSelect[regionSelect.length-1].checked = true;
        }
        count = 0;
        for ( let i=0; i<productSelect.length; i++ ) {
            productSelect[i].checked = false;
            if ( products.indexOf(productSelect[i].value) != -1 ) {
                productSelect[i].checked = true;
                count += 1;
            }
        }
        if ( count == productSelect.length-1 ) {
            productSelect[productSelect.length-1].checked = true;
        }
        // 设置完状态别忘了重绘图表
        redrawTable(getData());
        redrawChartAll();
    }
    else {
        setHash();
    }
}
