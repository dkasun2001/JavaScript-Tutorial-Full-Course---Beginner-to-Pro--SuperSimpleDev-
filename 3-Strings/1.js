console.log(typeof 5); // This code logs the type of the number 5 to the console
console.log(typeof "Hello"); // This code logs the type of the string "Hello" to the console

const total1 = "$" + 20.5 + 34.9;
const total2 = "$" + (20.5 + 34.9);
console.log(total1);
console.log(total2);

// Interpolation
const price = 19.99;
const tax = 0.07;
const totalPrice = `Total price: $${(price + price * tax).toFixed(2)}`;
console.log(totalPrice); // This code logs the total price with tax applied, formatted to two decimal places

// Multiline strings
const multilineString = `This is a string that spans
multiple lines. It can include line breaks
and still be treated as a single string.`;
console.log(multilineString); // This code logs a multiline string to the console