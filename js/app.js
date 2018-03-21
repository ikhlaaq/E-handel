$(function () {

    $(".add-to-cart").click(function (event) {
        event.preventDefault();
        var name = $(this).attr("data-name");
        var price = Number($(this).attr("data-price"));
        my_shoppingCart.addItemToCart(name, price, 1);
        displayCart();
    });
    $("#clear-cart").click(function (event) {
        my_shoppingCart.clearCart();
        displayCart();
    })

    function displayCart() {
        var cartArray = my_shoppingCart.listCart();
        var output = "";
        for (var i in cartArray) {

            output += "<li>"
                + cartArray[i].name
                + " X " + cartArray[i].price
                + " = " + cartArray[i].total
                + " <button class='plus-item' data-name='"
                + cartArray[i].name + "'>+</button>"
                + " <button class='subtract-item' data-name='"
                + cartArray[i].name + "'>-</button>"
                + " <button class='delete-item' data-name='"
                + cartArray[i].name + "'>X</button>"
                + "</li>";
        }
        $("#show-cart").html(output);
        $("#count-cart").html(my_shoppingCart.countCart());
        $("#total-cart").html(my_shoppingCart.totalCart());
    }
    $("#show-cart").on("click", ".delete-item", function (event) {
        var name = $(this).attr("data-name");
        my_shoppingCart.removeItemFromCartAll(name);
        displayCart();

    });
    $("#show-cart").on("click", ".subtract-item", function (event) {
        var name = $(this).attr("data-name");
        my_shoppingCart.removeItemFromCart(name);
        displayCart();

    });

    $("#show-cart").on("click", ".plus-item", function (event) {
        var name = $(this).attr("data-name");
        my_shoppingCart.addItemToCart(name, 0, 1);
        displayCart();
    });

});

