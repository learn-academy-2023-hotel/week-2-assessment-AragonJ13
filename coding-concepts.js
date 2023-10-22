// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: "H o t e l 2 0 2 3"
// b) Verify and explain:I thought using .split would seperate all the letter and numbers but instead converted the string into an array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: `Hello, LEARN Student`
// b) Verify and explain: I forgot to slow down and look at the code it returned undefined because it is a function and does not have a return statement

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:11,13,15
// b) Verify and explain:the onlyOdds variable is running a function that is filtering the numbers and using modulo to check the remainder of number by 2 is not equal to 0 which whill rule out the even numbers and retuen only odd numbers 

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:"JavaScript"
// b) Verify and explain:the object myCodingSkills has a bunch of properties. In ths console.log and using dot notation it wanted to print languages and it also has a [] notation of 0 which prints "JavaScript"

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George"
// b) Verify and explain:I thought it would only log "George" but when I ran it , it printed out the whole class { student: 'George', cohort: 'Hotel', year: 2023 }. 
