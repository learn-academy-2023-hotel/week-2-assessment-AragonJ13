// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here

function findFirstVowelIndex(inputString) {
    const vowels = "AEIOUaeiou"; // Define the vowels you want to check for.
    
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        console.log(`The first vowel "${inputString[i]}" is at index ${i}.`);
        return i; // Exit the function once the first vowel is found.
      }
    }
    
    console.log("No vowels found in the string.");
    return -1; // Return -1 to indicate that no vowels were found.
  }
  
  // Example usage:
  findFirstVowelIndex("Hello, World!"); // Output: The first vowel "e" is at index 1.


// Critique the code output. 
// Things to consider in your critique: 

//Were you surprised by the output?no it put out the corrected output of 'e'

//Was the output what you expected? 'e'

//Is the correct output being rendered? yes 

//What do you like about the code? like how they used .include , I hadnt seen that method yet 

//What do you dislike? i wouldve used a else if just to make it easier to read.

//Are there best practices that are not being followed? 

//Would you take a different approach? What did you learn? i would i woulve used an else if statement that wouldve returned something if no vowels were found.