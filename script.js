let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
let firstName = "Jonas"
console.log(firstName)
const country = `Ukraine`;
const continent = `Europe`;
const population = 32;
const language = `Ukranian`;
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
const MarkWeight = 78;
const JohnWeight = 95;
const MarkHeight = 1.69;
const JohnHeight = 1.95;

const MarkWeight2 = 95;
const JohnWeight2 = 85;
const MarkHeight2 = 1.88;
const JohnHeight2 = 1.76;
const markBMI = MarkWeight / MarkHeight ** 2;
const JohnBMI = JohnWeight / (JohnHeight * JohnHeight);
const markHigherBMI = markBMI > JohnBMI;
console.log(markBMI, JohnBMI, markHigherBMI);
let isIsland = false;
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
        below average`,
    );
}

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉
if (markBMI > JohnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${JohnBMI})!`);
} else {
    console.log(`John's BMI(${JohnBMI}) is higher than John's(${markBMI})!`);
}

console.log(`9` - `5`);
// 4
console.log(`19` - `13` + `17`);
// 617
console.log(`19` - `13` + 17);
// 617 wrong. Right answer is 23
console.log(`123` < 57);
// false
console.log(5 + 6 + `4` + 9 - 4 - 2)
// 121 wrong 1143 (somehow the numbers after string calculated substraction first)

const numNeighbours = Number(prompt(`How many neighbour countries does your country
have?` )
);
if (numNeighbours === 1) {
    console.log(`Only 1 border!`)
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
}

else {
    console.log(`No borders`)
}
