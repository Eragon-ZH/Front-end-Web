// 将表格中的数据存到localstorage中
function saveData() {
    let thList = document.querySelectorAll("tr");
    let product, region
    let sourceData = [];
    for ( let i=1; i<thList.length; i++ ) {
        let sale = [];
        for ( let j=0; j<thList[i].cells.length; j++ ) {
            if ( j == 0 ) {
                if ( thList[i].cells[j].innerText == "手机" ||
                    thList[i].cells[j].innerText == "笔记本" ||
                    thList[i].cells[j].innerText == "智能音箱" ) {
                    product = thList[i].cells[j].innerText;
                }
                else {
                    region = thList[i].cells[j].innerText;
                }
            }
            if ( j == 1 ) {
                if ( thList[i].cells[j].innerText == "手机" ||
                    thList[i].cells[j].innerText == "笔记本" ||
                    thList[i].cells[j].innerText == "智能音箱" ) {
                    product = thList[i].cells[j].innerText;
                }
                else {
                    region = thList[i].cells[j].innerText;
                }
            }
            if ( j>1 ) {
                sale.push(thList[i].cells[j].innerText);
            }
        }
        sourceData.push({"product":product,"region":region,"sale":sale});
        // console.log("product=",product,"region=",region,"sale=",sale);
    }
    // console.log(sourceData);
    // 将json对象转化为字符串形式才能存储，不然存储结果为[object object]
    sourceData =  JSON.stringify(sourceData);
    localStorage.setItem("sourceData",sourceData);
}
