/*This file is for your custom js.  All yours*/

// Calls input from index.html on button click

$(document).ready(function(){

  $("#order-now").click(function(){
    debugger;
    var size = $("input[name=size]:checked").val();
    var toppings = $("input:checkbox:checked").map(function () {
      return $(this).val();
    }).get();
    debugger;
    var newPizza = new Pizza(size, toppings)
    var pizzaReceipt = newPizza.order();
    $('#pizza-receipt').append("<p>" + pizzaReceipt.size + "</p>");
    $('#pizza-receipt').append("<p>" + pizzaReceipt.toppings + "</p>");
    $('#pizza-receipt').append("<p>" + pizzaReceipt.price(size) + "</p>");
    })
  });

// Business rules for ordering pizza

var Pizza = function (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function (size) {
  debugger;
  if (size === "large") {
    this.price = 20
  } else if (size === "medium") {
    this.price = 15
  } else if (size === "small") {
    this.price = 10
  }
  return this.price;
}

Pizza.prototype.order = function () {
  return this;
}
