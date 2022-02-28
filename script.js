// 1
for (i = 1; i <= 7; i++ ) {
    console.log(i);
}

console.log(`=============`);
// 2
for (i=5; i<=25; i += 4) {
    console.log(i);
}

console.log(`=============`);
// 3a
const wizards = [
    "Harry Potter", 
    "Hermoine Granger", 
    "Ron Weasley"
];
for (char of wizards) {
    console.log(char);
}
console.log(`=============`);

// 4a
let harryPotterMovies = 0;
//4b
while (harryPotterMovies < 8) {
    console.log(harryPotterMovies);
    harryPotterMovies +=1;
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


