// 获取选中选项
function getStatus() {
    let regionSelect = document.getElementsByClassName("region");
    let productSelect = document.getElementsByClassName("product");
    regionList = [];
    productList = [];
    for ( let i=0; i<regionSelect.length; i++ ) {
        if ( regionSelect[i].checked && regionSelect[i].value != "全选" ) {
            regionList.push( regionSelect[i].value );
        }
    }
    for ( let i=0; i<productSelect.length; i++ ) {
        if ( productSelect[i].checked && productSelect[i].value != "全选" ) {
            productList.push( productSelect[i].value );
        }
    }
    return [productList, regionList]
}
// 获取数据
function getData(region,product) {
    var data = [];
    var lsSourceData = JSON.parse(localStorage.getItem("sourceData"));
    let status = getStatus();
    let productList = status[0];
    let regionList = status[1];
    // 获取所有包含选中商品和地区的数据
    // 感觉这段代码写得太傻逼了
    // 遍历商品和地区列表
    for ( let i=0; i<productList.length; i++ ) {
        for ( let j=0; j<regionList.length; j++ ) {
            let foundLs = false;
            // 先从localstorage找相关数据
            if ( lsSourceData != null ) {
                for ( let k=0; k<lsSourceData.length; k++ ) {
                    if ( lsSourceData[k].product == productList[i] &&
                        lsSourceData[k].region == regionList[j] ) {
                            let temp = [];
                            temp.push( lsSourceData[k].product, lsSourceData[k].region );
                            temp = temp.concat( lsSourceData[k].sale );
                            data.push( temp );
                            foundLs = true;
                    }
                    // console.log(data,foundLs);
                }
            }
            // 找不到的话从data.js中找
            if ( foundLs === false ) {
                for ( let k=0; k<sourceData.length; k++ ) {
                    if ( sourceData[k].product == productList[i] &&
                        sourceData[k].region == regionList[j] ) {
                            let temp = [];
                            temp.push( sourceData[k].product, sourceData[k].region );
                            temp = temp.concat( sourceData[k].sale );
                            data.push( temp );
                            break;
                    }
                }
            }
        }
    }
    return data;
}
// 清洗获取到的数据，只保留具体数据
function cleanData(data) {
    let newData = [];
    for ( let i=0; i<data.length; i++ ){
        let temp = [];
        for ( let j=0; j<data[i].length; j++ ){
            if ( isNaN(data[i][j]) == false ) {
                temp.push(data[i][j])
            }
        }
        newData.push(temp)
    }
    // console.log("newData",newData);
    return newData;
}
// 获取数据中的最大值用来计算Rate
function maxData(data) {
    // 说明只有一组数据
    let max
    if ( data.length>9 ){
        max = Math.max.apply(null, data);
    }
    // 多组数据
    else{
        max = Math.max.apply(null, data.map(Function.apply.bind(Math.max, null)));
    }
    // console.log(max);
    return max;
}
