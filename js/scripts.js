/*This file is for your custom js.  All yours*/

// Calls input from index.html on button click

$(document).ready(function(){

  $("#order-now").click(function(){
    debugger;
    var newPizza = new Pizza()
    var pizzaReceipt = newPizza.order();
    $('#pizza-receipt').text(pizzaReceipt.size);
  });
});

// Business rules for ordering pizza

var Pizza = function () {
  this.size = "medium";
}

Pizza.prototype.order = function () {
  return this;
}
