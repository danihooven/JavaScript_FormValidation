/* *****************************************************************************************
Revised Grade program –In a JavaScript program create 5 students
with five sets of 13 grades each with different values between 0 and 100.
Calculate the average and programmatically assign a letter grade A, B, C, D, F.
The ranges are
90 to 100 = A
80 to 89 = B
70 to 79 = C
60 to 69 = D
below 60 = F.
Write the results to the console log.
Suggestions: Use arrays for the values and functions to simplify the calculations.

Math.random() resource: https://www.w3schools.com/js/js_random.asp
***************************************************************************************** */

// Global Variables
var valueList = [];
var totalNumberOfValues = 0;
var sumOfValues = 0;
var maxPoints = 0;
var average = 0;


// Generate a random grade list
function randomGradeList (numberOfGrades) {
  for (var i = 0; i < numberOfGrades; i++){
    // return random number between 60 and 100
    valueList[i] = Math.floor(Math.random()*(100 - 60 + 1)) + 50;
  }
  totalNumOfValues = valueList.length;
  console.log("Gradebook Log: " + valueList);
  console.log("Number of grades recorded: " + totalNumOfValues);
}


// Calculate total points earned
function pointsEarned (gradeList){
  for (var i = 0; i < totalNumOfValues; i++){
    sumOfValues += gradeList[i];
  }
  console.log("Total points earned: " + sumOfValues);
}


// Calculate the total amount of points possible
function pointsPossible (totalValues) {
  maxPoints = 100 * totalValues;
  console.log("Total points possible: " + maxPoints);
}


// Calculate average grade and assign letter grade
function gradeResult (maxEarned, totalValues) {
  average = maxEarned / totalValues;
  if (average >= 90) {
    console.log("Final Grade: " + average);
    console.log("Letter Grade: A");
  }
  else if(average >= 80 && average <= 89){
    console.log("Final Grade: " + average);
    console.log("Letter Grade: B");
  }
  else if(average >= 70 && average <= 79){
    console.log("Final Grade: " + average);
    console.log("Letter Grade: C");
  }
  else if(average >= 60 && average <= 69){
    console.log("Final Grade: " + average);
    console.log("Letter Grade: D");
  }
  else {
    console.log("Final Grade: " + average);
    console.log("Letter Grade: F");
  };
}

randomGradeList(13);
pointsEarned(valueList);
pointsPossible(totalNumOfValues);
gradeResult(sumOfValues, totalNumOfValues);

