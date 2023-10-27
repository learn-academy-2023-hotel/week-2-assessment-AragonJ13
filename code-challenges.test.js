// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

describe("divisableByThree", () => {
    it("takes a object decides if the number inside it is evenly divisible by three or not", () => {
        expect(divisableByThree(object1.number)).toEqual("15 is divisible by three")
        expect(divisableByThree(object2.number)).toEqual("0 is divisible by three")
        expect(divisableByThree(object3.number)).toEqual("-7 is not divisible by three")
    })
})
// b) Create the function that makes the test pass.

//create a function that takes in object 1,2,3
const divisableByThree = (number) => {
    //if statements checks to see if number is divisable by 3 is strickly equal to 0 and returns  `${number} is divisible by three`.
    if (number % 3 === 0){
        return `${number} is divisible by three`
    }
    // also executes the if statement and returns `${number} is not divisible by three` since -7 is not divisable by 3.
    else {
        return `${number} is not divisible by three`
    }
}

// }
// Pseudo code:
// input : three objects
// output: number divisible or not divisible by three

//
// 













// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("someNouns", () => {
    it("takes in array of words and returns array with all words capatalized", () => {
        expect(someNouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(someNouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// b) Create the function that makes the test pass.
// create a function that takes both arrays randomNouns 1&2
const someNouns = (strings) => {
   // iterate usingn strings .map 
    return strings.map((value) => {
        //using bracket notation 0 we .uppercase the first letter in the string and slice 1 returns all the letters after the 1st capatilized letter
        return value[0].toUpperCase() + value.slice(1);
    });
}


// Pseudo code: input: array of strings
//outpit:take in array of words and returns 1st letter capatalized
// 
//