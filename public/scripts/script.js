// DIRECTIONS
// Rewrite the following pieces of code from the last unit, but use functions when possible. 

//Uncomment out the code provided below, or use your own solutions from the classwork assignments last week (periods 1-2 in Unit 4.2: Decision Making)

// Temp Coversion App:
// let degFahren = Number(prompt("Enter the degrees in Fahrenheit"));

// let degCel = (5 / 9) * (degFahren - 32);
// let celcius = `${degFahren}\xB0 Fahrenheit is ${degCel}\xB0`;
// let msg = "";

// if (degFahren < 69) {
    // msg = "Oh that's cold!";
// } else if (degFahren >= 69) {
    // msg = "Temperature is just right!";
// } else {
    
    // msg = "That's not a temperature";
// }

// document.getElementById('celcius').innerHTML = celcius;
// document.getElementById('msg').innerHTML = msg;



let msg1 = "That's the temperature!";
let msg2 = "I'm not liking the weather";


function temperature (degFahren){ 
    degFahren = Number(prompt("Enter the degrees in Fahrenheit"));
    let degCel = (5 / 9) * (degFahren - 32);
    let celcius = `${degFahren}\xB0 Fahrenheit is ${degCel}\xB0`;
    console.log(celcius);
    document.getElementById('celcius').innerHTML = celcius;
    document.getElementById('msg').innerHTML = msg1;
} 


temperature();







//Shopping Cart App:
// const userName = prompt("Welcome to the shopping cart! Whats your name?");

// const item1 = prompt("Item 1 name:");
// let item1price = Number(prompt(`${item1} price:`));

// const item2 = prompt("Item 2 name");
// let item2price = Number(prompt(`${item2} price:`));

// const item3 = prompt("Item 3 name");
// let item3price = Number(prompt(`${item3} price:`));

// if (!item1price || item1price == 0) {
//     item1price = Number(prompt(`${item1} price is not valid, please enter a price`));
// }
// if (!item2price || item2price == 0) {
//     item2price = Number(prompt(`${item2} price is not valid, please enter a price`));
// }
// if (!item3price || item3price == 0) {
//     item3price = Number(prompt(`${item3} price is not valid, please enter a price`));
// }

// const total = (item1price + item2price + item3price) * 1.0625;
// document.getElementById('total').innerHTML = `${userName}, your grand total is: $${total.toFixed(2)}.`