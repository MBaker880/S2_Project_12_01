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
var cartHTML = "<table>" + "<tr>" + "<th>Item</th>" + "<th>Description</th>" + "<th>Price</th>" + "<th>Qty</th>" + "<th>Total</th>" + "</tr>";

// For loop continuing the item array until certain conditions are met
for (var i = 0; i <= item; i++) {
    // Local variable cartHTML adding an image string as its variable
    var cartHTML = "<tr>" + "<td>" + "<img src='tc_item.png' alt='" + item[i] + "'/>" + "</td>" + "<td>" + itemDescription[i] + "</td>" + "<td>$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>" + "<td>$" + itemCost[i] + "</td>" + "</tr>";

    // Multiplying the price variable by the quantity variable to find the current price of a specific item
    var itemCost = (itemPrice * itemQty);


}