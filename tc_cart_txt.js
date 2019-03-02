"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Mackenzie Baker
   Date:   2.27.2019
   
   Filename: tc_cart.js
	
*/

// Creating the initial value of the orders total
var orderTotal = 0;

// A variable for the items contained within the shopping cart
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// For loop continuing the item array until certain conditions are met
for (var i = 0; i <= 3; i++) {
   // Local variable cartHTML adding an image string as its variable
   cartHTML += "<tr>" + "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/>" + "</td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td>$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";
   
   // Multiplying the price variable by the quantity variable to find the current price of a specific item
   var itemCost = itemPrice[i] * itemQty[i];

   // Displays the cost for the ordered items
   cartHTML += "<td>$" + itemCost + "</td>" + "</tr>";

   // Items cost and orders total added together to get the the cost of the costomer order
   orderTotal = orderTotal + itemCost;
}

// Completes the shopping cart total and desplays fully calculated order value
cartHTML += "<tr>" + "<td colspan='4'>Subtotal</td>" + "<td>$" + orderTotal + "</td>" + "</tr>" + "</table>";

// Applying the cartHTML variable to the inner html of the div with the id of cart
document.getElementById("cart").innerHTML = cartHTML;