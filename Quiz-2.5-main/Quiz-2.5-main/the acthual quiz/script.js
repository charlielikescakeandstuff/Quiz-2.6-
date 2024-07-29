const quizData = [
  {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "NaHCO3", "CaCO3"],
    answer: "NaCl"
  },
  {
    question: "Which scientist is known for the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
    answer: "Albert Einstein"
  },
  {
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "100,000 km/s"],
    answer: "300,000 km/s"
  },
  {
    question: "Which element is a liquid at room temperature?",
    options: ["Helium", "Mercury", "Aluminum", "Gold"],
    answer: "Mercury"
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Atom", "Molecule", "Cell", "Organ"],
    answer: "Cell"
  },
  {
    question: "What planet is known for its rings?",
    options: ["Jupiter", "Mars", "Saturn", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "What is the common name for dihydrogen monoxide?",
    options: ["Salt", "Water", "Baking Soda", "Sugar"],
    answer: "Water"
  },
  {
    question: "Which organ is responsible for detoxifying chemicals in the body?",
    options: ["Heart", "Liver", "Kidney", "Lungs"],
    answer: "Liver"
  },
  {
    question: "Which part of the cell contains the genetic material?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
    answer: "Nucleus"
  },
  {
    question: "What is the main gas found in the air we breathe?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Nitrogen"
  },  {
    question: "Which element has the atomic number 6?",
    options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Carbon"
  },
  {
    question: "What is the process by which plants make their food?",
    options: ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
    answer: "Photosynthesis"
  },
  {
    question: "What is the term for a change in the DNA sequence?",
    options: ["Mutation", "Replication", "Transcription", "Translation"],
    answer: "Mutation"
  },
  {
    question: "Which vitamin is produced when the skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D"
  },
  {
    question: "What is the basic unit of heredity?",
    options: ["Gene", "Chromosome", "Protein", "Nucleus"],
    answer: "Gene"
  },
  {
    question: "What is the hottest layer of the Earth's atmosphere?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: "Thermosphere"
  },
  {
    question: "Which scientist developed the laws of motion?",
    options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
    answer: "Isaac Newton"
  },
  {
    question: "What is the main function of red blood cells?",
    options: ["Fight infections", "Transport oxygen", "Clot blood", "Provide nutrients"],
    answer: "Transport oxygen"
  },
  {
    question: "Which gas is essential for respiration?",
    options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Helium"],
    answer: "Oxygen"
  },
  {
    question: "What is the largest bone in the human body?",
    options: ["Femur", "Humerus", "Tibia", "Fibula"],
    answer: "Femur"
  }
  ]//These are the questions that will be asked to the user
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
      const question = quizData[currentQuestion];
      questionElement.innerText = question.question;
    
      optionsElement.innerHTML = "";
      question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
      });
    }
    
    function selectAnswer(e) {
      const selectedButton = e.target;
      if (selectedButton.innerText === quizData[currentQuestion].answer) {
        score++;
        console.log(score)
      }
    
      currentQuestion++;
    
      if (currentQuestion < quizData.length) {
        showQuestion();
   
      } else {
        if(score == 20){ 
          showResultWin()
        }
        else{
          if(score< 10 && score > 2){
            showResultAlmost()
          }
          else {
            if( score == 0){
              showResultLose()
            }
            else{
              showResult()
            }
          }
        }
      }
      
    }
         // Set the duration of the timer in seconds
         const duration = 60; // 60 seconds for this example

         // Select the elements
         const timerElement = document.getElementById('timer');
         const messageElement = document.getElementById('message');
 
         let timeRemaining = duration;
 
         function updateTimer() {
             const minutes = Math.floor(timeRemaining / 62);
             const seconds = timeRemaining % 62;
             timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
 
             if (timeRemaining <= 0) {
                 clearInterval(timerInterval);
                 timerElement.style.display = 'none';
                 messageElement.style.display = showResult();
             }
         }
 
         const timerInterval = setInterval(() => {
             timeRemaining--;
             updateTimer();
         }, 1000);
 
         // Initialize the timer display
         updateTimer();
    function showResult() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length}</p>
        <p style="text-align:center; font-size:50px; color:white" class="title3"></p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #ffff">click here to go back</button></a>
        
        `;
 
    }
    function showResultWin() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} wow!</p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">You really are a science nerd!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #ffff">click here to go back</button></a>
        
        `;
 
    }
    function showResultAlmost() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} </p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Keep trying!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #ffff">click here to go back</button></a>
        
        `;
 
    }
    function showResultLose() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} yikes.. </p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Are you sure you're supposed to be here?</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #ffff">click here to go back</button></a>
        
        `;
 
    }
    showQuestion();
  
