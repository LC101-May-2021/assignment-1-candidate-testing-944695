const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman is space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];
let correctNumber = 0;
let totalNumber = 5;



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Candidate name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < 5; i++)
  {
    candidateAnswers[i] = input.question((i + 1) + ") " + questions[i]); 
    console.log(`Your answer: ${candidateAnswers[i]}`);
    console.log(`Correct answer: ${correctAnswers[i]}\n`);

  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = correctNumber / totalNumber;
  let i;

  for (i = 0; i < 5; i++)
  {
     //console.log(`The user's responses is ${candidateAnswers[i]}. The correct response is ${correctAnswers[i]}.`);
// comment
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase())
    {
      correctNumber++;
    }
    
    /*if (i === 0)
    {
    
    if ((candidateAnswers[i] === "Sally Ride") || (candidateAnswers[i] === "sally ride") || (candidateAnswers[i] === "SALLY RIDE"))
      {
        correctNumber++;
      }
    }

    if (i === 1)
    {
      if ((candidateAnswers[i] === "True") || (candidateAnswers[i] === "true") || (candidateAnswers[i] === "TRUE"))
      {
        correctNumber++;
      }
    }

    if (i === 2)
    {
      if ((candidateAnswers[i] === "40") || (candidateAnswers[i] === "fourty") || (candidateAnswers[i] === "Fourty") || (candidateAnswers[i] === "FOURTY"))
      {
        correctNumber++;
      }
    }

    if (i === 3)
    {
     if ((candidateAnswers[i] === "Trajectory") || (candidateAnswers[i] === "trajectory") || (candidateAnswers[i] === "TRAJECTORY"))
      {
        correctNumber++;
      }
    }

    if (i === 4)
    {
      if ((candidateAnswers[i] === "3") || (candidateAnswers[i] === "three") || (candidateAnswers[i] === "Three") || (candidateAnswers[i] === "THREE"))
      {
        correctNumber++;
      }
    }*/
  }

  grade = correctNumber / totalNumber;
  console.log(">>> Overall Grade: " + ((correctNumber/totalNumber) * 100) + "% (" + correctNumber + " out of 5 responses correct) <<<");

  if (grade >= 0.8)
  {
    console.log(">>> Status: PASSED <<<\n");
  }
  else
  { 
    console.log(">>> Status: FAILED <<<\n");
  }
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log("Welcome " + candidateName);
  
  askQuestion();
  gradeQuiz(candidateAnswers);
}

runProgram();


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};