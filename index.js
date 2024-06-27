// Create variables for the welcome message
let greeting = 'Howdy ';
let name = 'Molly ';
let message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
let welcome = greeting + name + message;

// Create variables to hold details about the sign
let sign = 'Montague House';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
let el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
let elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
let elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
let elsubTotal = document.getElementById('subTotal');
elsubTotal.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its contents
let elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
let elgrandTotal = document.getElementById('grandTotal');
elgrandTotal.textContent = '$' + grandTotal;