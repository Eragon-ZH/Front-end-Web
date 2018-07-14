// 默认时间单位1秒
var timerate = 1000;

var cook = new Cook();
var waiter = new Waiter();
var restaurant = new Restaurant(1000, 1, [cook, waiter]);
var allowNewCustomer = false;

function main() {
    // 初始化
    allowNewCustomer = false;
    cook.init();
    waiter.init();
    // 新顾客
    customer = new Customer();
    return new Promise(function(resolve, reject) {
        customer.order();
        resolve();
    }).then(function() {
        setTimeout(function () {
            waiter.takeOrder(customer.orderFoodList)
        },3.5*timerate);
    }).then(function() {
        setTimeout(function () {
            cook.cook(waiter.orderFoodList);
        }, 3.5*timerate);
    })
}

main();
