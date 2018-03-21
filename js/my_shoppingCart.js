
// Functions

var my_shoppingCart = {};

// 1.cart : array (var)    
// 2.Item : Object/Class (var/template)
// 3.addItemToCart : function
// 4.removeItemFromCart : function
// 5.removeItemFromCartAll : function
// 6.clearCart : function
// 7.countCart : function
// 8.totalCart : function
// 9.listCart :  function

//********************************


// 1.cart : array (var) 
my_shoppingCart.cart = [];

// 2.Item : Object/Class (var/template)
my_shoppingCart.Item = function (name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};
// 3.addItemToCart(name, price, count)
my_shoppingCart.addItemToCart = function (name, price, count) {
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart[i].count += count;
            return;
        }
    }
    var item = new this.Item(name, price, count);
    this.cart.push(item);
};



// 4.removeItemFromCart(name) 
my_shoppingCart.removeItemFromCart = function (name) { //removes one item
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart[i].count--;
            if (this.cart[i].count === 0) {
                this.cart.splice(i, 1);

            }
            break;
        }
    }
};

// 5.removeItemFromCartAll(name)
my_shoppingCart.removeItemFromCartAll = function (name) { //removes all item
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart.splice(i, 1);
            break;
        }
    }
};


// 6.clearCart()
my_shoppingCart.clearCart = function () {
    this.cart = [];
}

// 7.countCart() -> return total count
my_shoppingCart.countCart = function () {
    var totalCount = 0;
    for (var i in this.cart) {
        totalCount += this.cart[i].count;
    }
    return totalCount;
};


// 8.totalCart() -> return total cost
my_shoppingCart.totalCart = function () {
    var totalCost = 0;
    for (var i in this.cart) {
        totalCost += this.cart[i].price * this.cart[i].count;
    }
    return totalCost;

};


// 9.listCart() -> array of Item
my_shoppingCart.listCart = function () {
    var cartCopy = [];
    for (var i in this.cart) {
        var item = this.cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];

        }
        itemCopy.total = item.price * item.count;
        cartCopy.push(itemCopy);

    }
    return cartCopy;
};


