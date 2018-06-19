// 获取数据
function getData(region,product) {
    var regionSelect = document.getElementsByClassName("region");
    var productSelect = document.getElementsByClassName("product");
    regionList = [];
    productList = [];
    var data = [];
    // 获取选中的商品和地区的列表
    for ( var i=0; i<regionSelect.length; i++ ) {
        if ( regionSelect[i].checked && regionSelect[i].value != "全选" ) {
            regionList.push( regionSelect[i].value );
        }
    }
    for ( var i=0; i<productSelect.length; i++ ) {
        if ( productSelect[i].checked && productSelect[i].value != "全选" ) {
            productList.push( productSelect[i].value );
        }
    }
    // 获取所有包含选中商品和地区的数据
    for ( i in sourceData ) {
        if ( regionList.indexOf( sourceData[i].region ) != -1 &&
            productList.indexOf( sourceData[i].product ) != -1 ) {
            var temp = [];
            temp.push( sourceData[i].product, sourceData[i].region );
            temp = temp.concat( sourceData[i].sale );
            data.push( temp );
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
