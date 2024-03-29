questionDiv('#question');
answerDiv('#answer');
feedbackDiv('#feedback');
let currentQuestion = null;

function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length); //get a random number
            const question = questions[index]; //use the random number as an index to get a random question from the array of questions
            if (index > questions.length) { //handle potential errors
                reject('An error occurred while fetching the trivia question.');
            } else {
                resolve(question); //resolve the promise
            }
        }, 1000); //delay to simulate time to fetch a question
    });
}

function displayQuestion(triviaQuestion) {
    questionDiv.textContent = triviaQuestion.question; //give new content to the div
    answerDiv.value = ''; //reset the answer field
    feedbackDiv.textContent = ''; //reset the feedback div
}

document.querySelector('#questionBtn').addEventListener('click', () => {
    getTriviaQuestion().then((question)=> { //get a random question
        currentQuestion = question; //update the currentQuestion variable
        displayQuestion(question); //pass the question to the displayQuestion function
    })
    .catch((error) => {
        console.log(error); //log any errors
    })
})

document.querySelector('#answerBtn').addEventListener('click', () => {
    let feedbackMessage; //temporary variable to store a message
    const userAnswer = answerDiv.value.trim().toLowerCase(); //normalizes the user's answer
    console.log(userAnswer, currentQuestion.answer); //prints both answers to the log to help with debugging
    if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) { //evaluates both answers
        feedbackDiv.style.color = "green"; //update font color of the feedbackDiv object
        feedbackMessage = `Great job! Your answer is correct.`; //update the message variable
    } else {
        feedbackDiv.style.color = "red"; //update font color of the feedback object
        feedbackMessage = `Sorry, that is incorrect. The correct answer is: "${currentQuestion.answer}". Try another question!`; //update the message variable
    }
    feedbackDiv.textContent = feedbackMessage; //update the feedbackDiv with the message content
})