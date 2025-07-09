// 3a. Create the text 'My name is: ' as a string
const myName = "My name is: ";

// 3b. create your name as a string
const myFullName = "Dinusha Kasun";

// 3c. Concatenate the two strings
const fullGreeting = myName + myFullName;
console.log(fullGreeting);

// 3d. at a restaurant, you order 1 coffee for $2.50 and 1 sandwich for $5.00. using math calculate the total cost and using string concatenation, create a string that says "Your total is: $7.50". Log the string to the console.
const coffeePrice = 2.5;
const sandwichPrice = 5.0;
const totalCost = coffeePrice + sandwichPrice;
const totalCostString = "Your total is: $" + totalCost.toFixed(2);
console.log(totalCostString);

// 3e. Do the same thing as 3d but use template strings and interpolation
const totalCostTemplateString = `Your total is: $${totalCost.toFixed(2)}`;
console.log(totalCostTemplateString);

// 3h. display the text from 3e but useing alert
alert(totalCostTemplateString);

// 3g. using a multiline string, create the text from 3h and add a line of text underneath that says "Thank you for your order!"
const multilineString = `Your total is: $${totalCost.toFixed(
  2
)}\nThank you for your order!`;
console.log(multilineString); // This code logs the multiline string to the console
