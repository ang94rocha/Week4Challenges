//VERY EASY

function min(p1, p2){
    return Math.min(p1, p2);    //Returns smaller of the two arguments 
}
  
var num1 = Number(prompt("Enter a number: "));  //Entering the first number
var num2 = Number(prompt("Enter another number: "));    //Entering the second number
var ans = Number(min(num1, num2)); //Calculating the smallest number
  
console.log("The smaller of the two numbers is " + ans); //Outputting the smaller of the two numbers

//EASY

var students = ["Angel ", "Rocha ", 19,
                "Eddie ", "Puebla ", 19,
                "Marvin ", "Mejia ", 19];   //Array of three students 
console.log("Hello my name is " + students[3] + students[4] + "and I am " + students[5] + " years old.")    //Output using second person 

//MEDIUM
var myArray = {1: "January", 
               2: "February", 
               3: "March",
               4: "April",
               5: "May",
               6: "June",
               7: "July",
               8: "August",
               9: "September",
               10: "October", 
               11: "November", 
               12: "December"}; //Object with keys and values similar to a month calendar 

var userInput = Number(prompt("Enter a number between 1 and 12: ")); //Ask for user input within range

if(userInput >= 1 && userInput <= 12) { //If user input within range...
  console.log(myArray[userInput]);  //Output month 
}
else{
  do {console.log(userInput = Number(prompt("Outside of range (1-12), try again: ")))   //If user input outside of range...
  } 
  while (userInput > 12 || userInput < 1);  //Ask for another input
  console.log(myArray[userInput]);  //Output month if within range
}

//HARD
var Tom = [9, 8];
var Jerry = [10, 45];
var TomBMI = Tom[1] / (Tom[0] * Tom[0]);
var JerryBMI = Jerry[1] / (Jerry[0] * Jerry[0]);

if (JerryBMI > TomBMI) {
  console.log("Is Tom's BMI higher than Jerry's? " + Boolean(TomBMI > JerryBMI)); 
}
else {
  console.log("Is Tom's BMI higher than Jerry's? " + Boolean(JerryBMI > TomBMI)); 
}



