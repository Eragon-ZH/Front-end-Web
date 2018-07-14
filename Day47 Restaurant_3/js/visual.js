// 可视化相关函数
function takeOrderVisual() {
    waiterDiv.style.float = 'right';
}

function dishUpVisual() {
    waiterDiv.style.float = 'left';
}

function refreshMoney() {
    moneyDiv.innerHTML = restaurant.cash;
}

function cookCookVisual() {
    cookDiv.style.backgroundImage = 'url(./img/cook-cook.png)';
    cookDiv.innerHTML = 'Cooking!';
}

function cookVisual() {
    cookDiv.style.backgroundImage = 'url(./img/cook.png)';
    cookDiv.innerHTML = '';
}

function customerEatVisual() {
    customerDiv.style.backgroundImage = 'url(./img/customer-eat.png)';
    customerDiv.innerHTML = 'Eating!';
}

function customerVisual() {
    customerDiv.style.backgroundImage = 'url(./img/customer.png)';
    customerDiv.innerHTML = '';
}

function customerLeaveVisual() {
    customerDiv.style.backgroundImage = 'none'
}

function newCustomer() {
    if ( allowNewCustomer ) {
        text.innerHTML = '';
        customerDiv.style.backgroundImage = 'url(./img/customer.png)';
        main();
    }
}
function addText(str) {
    var content = text.innerText;
    content += '\n';
    content += str;
    text.innerText = content;
}
