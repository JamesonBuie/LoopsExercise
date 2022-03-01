// 1
for (i = 1; i <= 7; i++) {
    console.log(i);
}

console.log(`=============`);
// 2
for (i = 5; i <= 25; i += 4) {
    console.log(i);
}

console.log(`=============`);
// 3a
const wizards = [
    "Harry Potter",
    "Hermoine Granger",
    "Ron Weasley"
];
// 3b
for (item of wizards) {
    console.log(item);
}
console.log(`=============`);

// 4a
let harryPotterMovies = 0;
//4b
while (harryPotterMovies < 8) {
    console.log(harryPotterMovies);
    harryPotterMovies++;
}
//4c
console.log(`=============`);
console.log(harryPotterMovies);

// BONUS
// 5a
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
];
console.log(`========`);
// 5b
for (house of hogwartsHouses) {

    for (char of house) {
        console.log(char);
    }
};

// 6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];
// 6b
// Using For loop
let magicQuote = ``;
for (i = 0; i < quote.length; i++) {
    magicQuote = `${magicQuote} ${quote[i]}`; // adds a new string from the array to the new string for each loop
    console.log(magicQuote);
}
magicQuote = magicQuote.trim(); // removes space in front of string in terminal
console.log(magicQuote);

// Using for of loop
let message = ``;
for (word of quote) {
    message += ` ${word}`;
}
message = message.trim()
console.log(message);



console.log(`=======`);
// 7
for (i=1; i<26; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // checks to see if i is a multiple of 3 and 5
        console.log("Expecto Patronum");
    } else if (i % 3 === 0) { // checks to see if i is a multiple of 3
        console.log("Expecto");
    } else if (i % 5 === 0) { // checks to see if i is a multiple of 5
        console.log("Patronum");
    } else {
        console.log(i);
    }
}