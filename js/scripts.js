/*This file is for your custom js.  All yours*/

// Calls input from index.html on button click

$(document).ready(function(){

  $("#order-now").click(function(){
    debugger;
    var size = $("input[name=size]:checked").val();
    var newPizza = new Pizza(size)
    var pizzaReceipt = newPizza.order();
    $('#pizza-receipt').text(pizzaReceipt.size);
  });
});

// Business rules for ordering pizza

var Pizza = function (size) {
  this.size = size;
}

Pizza.prototype.order = function () {
  return this;
}
