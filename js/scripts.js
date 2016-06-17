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
    })
  });

// Business rules for ordering pizza

var Pizza = function (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.order = function () {
  return this;
}
