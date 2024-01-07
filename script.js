let questions = [
    "What planet is known as the 'Red Planet'?",
    "Who painted the Mona Lisa?",
    "What's the capital of France?",
    "How many bones are in the human body?",
    "Which element has the chemical symbol 'O'?",
    "Who wrote 'Romeo and Juliet'?",
    "What is the largest mammal in the world?",
    "What is the capital of Japan?",
    "Which famous scientist developed the theory of general relativity?",
    "What is the currency of Australia?",
    "In which year did Christopher Columbus first reach the Americas?",
    "What is the tallest mountain in the world?",
    "Who is known as the 'Father of Computer Science'?",
    "What is the largest ocean on Earth?",
    "Who discovered penicillin?",
    "What is the square root of 64?",
    "Which planet is known as the 'Blue Planet'?",
    "Who directed the movie 'Inception'?",
    "What is the speed of light?"
  ];
  
  let choicesArray = [
    ["Earth", "Mars", "Jupiter", "Saturn"],
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    ["Marseille", "Lyon", "Paris", "Toulouse"],
    ["206", "214", "192", "220"],
    ["Oxygen", "Gold", "Silver", "Iron"],
    ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
    ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
    ["Dollar", "Euro", "Pound", "Australian Dollar"],
    ["1492", "1520", "1607", "1776"],
    ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"],
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Jonas Salk"],
    ["8", "6", "10", "12"],
    ["Earth", "Mars", "Jupiter", "Saturn"],
    ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "James Cameron"],
    ["299,792 kilometers per second", "150,000 kilometers per second", "200,000 kilometers per second", "100,000 kilometers per second"]
  ];
  
  let currentQuestionIndex = 0;
  let lives = 5;
  
  let correctAnswer = [
    "Mars", "Da Vinci", "Paris", "206",
    "Oxygen", "William Shakespeare", "Blue Whale", "Tokyo",
    "Albert Einstein", "Australian Dollar", "1492", "Mount Everest",
    "Alan Turing", "Pacific Ocean", "Alexander Fleming", "8",
    "Earth", "Christopher Nolan", "299,792 kilometers per second"
  ];
  
  document.getElementById('retry').innerText = 'Try Again';
  
  function resetGame() {
    document.getElementById("result").innerHTML = '';
    lives = 5;
    currentQuestionIndex = 0;
  
    let indices = Array.from({ length: questions.length }, (_, index) => index);
  
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
  
    questions = indices.map(index => questions[index]);
    choicesArray = indices.map(index => choicesArray[index]);
    correctAnswer = indices.map(index => correctAnswer[index]);
  
    let choices = choicesArray[currentQuestionIndex];
    for (let i = 0; i < choices.length; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choices[i];
      btn.disabled = false;
    }
  
    document.getElementById('retry').style.display = 'none';
    displayQuestion();
  }
  
  document.getElementById('retry').onclick = resetGame;
  
  function checkAnswer(button) {
    let resultDiv = document.getElementById("result");
  
    if (button.textContent === correctAnswer[currentQuestionIndex]) {
      resultDiv.innerHTML = "Correct!";
  
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => {
          resultDiv.innerHTML = '';
          displayQuestion();
        }, 2000);
      } else {
        resultDiv.innerHTML += " You have completed my Trivia Game!";
      }
    } else {
      lives--;
  
      if (lives <= 0) {
        resultDiv.innerHTML = "Wrong! Game over!";
        document.getElementById('retry').style.display = 'block';
      } else {
        resultDiv.innerHTML = `Wrong! You have ${lives} ${lives === 1 ? 'life' : 'lives'} left.`;
  
        setTimeout(() => {
          resultDiv.innerHTML = '';
          displayQuestion();
        }, 2000);
      }
    }
  
    for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
      document.getElementById(`choice${i + 1}`).disabled = true;
    }
  }
  
  function displayQuestion() {
    let h2 = document.getElementById("question");
    h2.innerHTML = questions[currentQuestionIndex];
  
    let choices = choicesArray[currentQuestionIndex];
    for (let i = 0; i < choices.length; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choices[i];
      btn.disabled = false;
    }
  }
  
  displayQuestion();