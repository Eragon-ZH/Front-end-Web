function Restaurant(money, seats, staffs) {
    this.cash = money;
    this.seats = seats;
    this.staffs = staffs;
    this.hire = function (staff) {
        this.staffs.push(staff);
    }
    this.fire = function (staff) {
        if ( this.staffs.indexOf(staff) != -1 ) {
            this.staffs.splice( this.staffs.indexOf(staff), 1 );
        }
    }
}

function Staff(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

function Waiter(id ,name, salary) {
    if ( typeof Waiter.instance === 'object' ) {
        return Waiter.instance;
    }
    Staff.call(this, id, name, salary);
    // 顾客点的菜
    this.orderFoodList = [];
    Waiter.instance = this;
    this.init = function() {
        this.orderFoodList = [];
    }
    this.takeOrder = function(foodList) {
        waiter.orderFoodList = foodList;
        takeOrderVisual();
    }
    // 上菜
    this.dishUp = function(food) {
        dishUpVisual();
        setTimeout(function () {
            setTimeout(takeOrderVisual(),0.5*timerate);
            addText('waiter dished up "' + food.name.toString() + '"');
            // 上菜后就吃
            customer.eatFoodList.push(food);
            customer.eat();
        }, 0.5*timerate)
    }
}

function Cook(id, name, salary) {
    if ( typeof Cook.instance === 'object' ) {
        return Cook.instance;
    }
    Staff.call(this, id, name, salary);
    this.cookNumber = 0;
    this.cookFoodList = [];
    Cook.instance = this;
    this.init = function () {
        this.cookNumber = 0;
        this.cookFoodList = [];
    }
    this.cook = function(foodList) {
        var time = [];
        this.cookFoodList = foodList;
        for ( var i=0; i<foodList.length; i++ ) {
            time.push(foodList[i].time);
            // 因为多个setTimeout同时，所有后面的菜烹饪时间需要加上之前所有菜的时间。
            for ( var j=0; j<i; j++ ) {
                time[i] += foodList[j].time
            }
        }
        for ( var i=0; i<foodList.length; i++ ) {
            this.cookOneDish(foodList[i], time[i]);
        }
    }
    this.cookOneDish = function(food, time) {
        cookCookVisual();
        setTimeout(function() {
            addText('\ncook cooked food "' + food.name + '" cost ' +
                food.cost + '$');
            cook.cookNumber += 1;
            // 更新花费
            restaurant.cash -= food.cost;
            refreshMoney();
            console.log(cook.cookNumber, cook.cookFoodList.length);
            // 全部烹饪完成停止烹饪
            if ( cook.cookNumber == cook.cookFoodList.length) {
                cookVisual();
            }
            waiter.dishUp(food);
        }, time*timerate)
    }
}

function Customer() {
    if ( typeof Customer.instance === 'object' ) {
        return Customer.instance;
    }
    // 点的菜
    this.orderFoodList = [];
    // 做好还没吃的菜
    this.eatFoodList = [];
    // 一共吃的菜的数量
    this.eatFoodNumber = 0;
    Customer.instance = this;
    this.eat = function () {
        // 如果没吃完所有菜并且有做好没吃的菜就吃
        if ( this.eatFoodNumber != this.orderFoodList.length &&
                this.eatFoodList.length > 0 ) {
            customerEatVisual();
            setTimeout(function() {
                addText('\ncustomer eaten food "' +
                    customer.eatFoodList.shift().name.toString() + '"');
                customer.eatFoodNumber += 1;
                customerVisual();
                // 如果所有菜都吃了就离开
                if ( customer.eatFoodNumber == customer.orderFoodList.length ) {
                    customer.leave();
                }
            }, 3*timerate)
        }
    }
    this.order = function() {
        // 点菜数量
        var randFoodNumber = parseInt(Math.random()*5+1,10);
        dishUpVisual();
        setTimeout(function () {
            for ( var i=0; i<randFoodNumber; i++ ) {
                // 随机点一道菜
                var randFoodIndex = parseInt(Math.random()*foodList.length,10);
                var orderFood = new Food(foodList[randFoodIndex]);
                customer.orderFoodList.push(orderFood);
            }
            for ( var i=0; i<customer.orderFoodList.length; i++ ) {
                addText('customer ordered "' +
                customer.orderFoodList[i].name.toString() +
                '" price ' + customer.orderFoodList[i].price.toString() + '$');
            }
        }, 3*timerate);
    }
    this.leave = function() {
        // 离开前结账
        for ( var i=0; i<this.orderFoodList.length; i++ ) {
            restaurant.cash += this.orderFoodList[i].price;
        }
        refreshMoney();
        customerVisual();
        cookVisual();
        addText('\ncustomer leaves');
        customerLeaveVisual();
        Customer.instance = undefined;
        allowNewCustomer = true;
    }
}

function Food(args) {
    this.name = args.name;
    this.cost = args.cost;
    this.price = args.price;
    this.time = args.time;
}
