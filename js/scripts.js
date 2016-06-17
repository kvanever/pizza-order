/*This file is for your custom js.  All yours*/

// Calls input from index.html on button click

$(document).ready(function(){

  $("#order-now").click(function(){
    var size = $("input[name=size]:checked").val();
    var toppings = $("input:checkbox:checked").map(function () {
      return $(this).val();
    }).get();
    var newPizza = new Pizza(size, toppings)
    $('#pizza-receipt').html("")
    $('#pizza-receipt').append("<p>Thank you for your order.</p><p>You selected a " + newPizza.size + " pizza with " + newPizza.toppings.join(' and ') + " for a grand total of $" + newPizza.price(size, toppings) + ".</p>")
    })
  });

// Business rules for ordering pizza

var Pizza = function (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.toppings.push("cheese");
}

Pizza.prototype.price = function (size, toppings) {
  if (size === "large") {
    this.price = 20
  } else if (size === "medium") {
    this.price = 15
  } else if (size === "small") {
    this.price = 10
  }
  for (i = 0; i <= toppings.length; i++) {
    if (toppings[i] === "pepperoni" || toppings[i] === "sausage" || toppings[i] === "anchovies") {
    this.price += 2
  } else if (toppings[i] === "onion" || toppings[i] === "mushrooms") {
    this.price += 1
  }
}
  return this.price;
}
