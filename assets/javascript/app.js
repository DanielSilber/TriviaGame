var quizQuestions;
var questionNumber;
var buildQuiz;
var showResults;
var buildQuiz;
var userAnswer;

(function () {
    function buildQuiz() {
        var output = [];
        quizQuestions.forEach((currentQuestion, questionNUmber) => {

            var answers = [];
            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
                <input type="radio" name="questions${questionNumber}"

        value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            
            </label>`
                );
            }

            output.push(
                `<div class="question">
        ${currentQuestion.question} </div>
        <div class="answers">
        ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHtml = output.join("");
    }


function showResults() {

    var answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var quizQuestions = [
    {
     question1: "Which city is in southern California?",
        answers: {
            a: "Los Angeles",
            b: "San Francisco",
            c: "Santa Cruz",
            d: "Eureka",
        },
        correctAnswer: "a"
    },
    {
        question2: "Which album was recorded in the 90's?",
        answers: {
            a: "The Dark Side of the Moon",
            b: "The Rise and Fall of Ziggy Stardust",
            c: "Amnesiac",
            d: "Remain in Light",
        },
        correctAnswer: "c"
    },
    {
        question3: "Where do plums grow?",
        answers: {
            a: "moon rocks",
            b: "sea weed",
            c: "mud",
            d: "trees",
        },
        correctAnswer: "d"
    },
    {
        question4: "Which US city is credited as the cultural origin of Techno?",
        answers: {
            a: "Denver",
            b: "Detroit",
            c: "Austin",
            d: "Seattle",
        },
        correctAnswer: "d"
    },
    {
        question5: "Which brand does not make cameras?",
        answers: {
            a: "Nikon",
            b: "tin man can",
            c: "Canon",
            d: "Leica",
        },
        correctAnswer: "b"
    }
];

buildQuiz();

submitButton.addEventListener("click", showResults);

})();
