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
