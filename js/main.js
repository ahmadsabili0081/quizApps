let quiz = document.querySelector('.apps__container');
let submitBtn = document.querySelector('.submitBtn'); 
let score = 0;
let currentQuestion = 0;
let answerel = document.querySelectorAll('.answer')
let questionEl = document.querySelector('.question');
let a__text = document.querySelector('#a__text');
let b__text = document.querySelector('#b__text');
let c__text = document.querySelector('#c__text');
let d__text = document.querySelector('#d__text');
let container = document.querySelector('.container');
let quizApps = [
  {
    question : "Apa kepanjangan dari HTML?",
    a : "HyperText Markup Language",
    b :  "HyperTexts Markups Language",
    c : "Hypertext Markups Language",  
    d: "Hypertext Markup Languages",
    correct : "a"
  },
  {
    question : "Apa kepanjangan dari PHP?",
    a : " Hypertext Preprocessor",
    b : "Hypertext Preprocessors",
    c : "Hypertexts Preprocessor",  
    d : "Hypertexts Preprocessors",
    correct : "a"
  },
  {
    question : "Javascript adalah sebuah bahasa yang bergerak disisi?",
    a : " server side",
    b : "client side",
    c : "server side jaringan",  
    d : "server side dan client side",
    correct : "b"
  },
  {
    question : "Javascript dirancang oleh?",
    a : "peter which",
    b : "alebert enstein",
    c : "brandon eich",  
    d : "eich brandon",
    correct : "c"
  },
  {
    question : "C++ rilis perdana pada tahun?",
    a : "1980",
    b : "1982",
    c : "1985",  
    d : "1990",
    correct : "c"
  },
  {
    question : "C++ adalah bahasa pemograman tingkat?",
    a : "rendah",
    b : "tinggi",
    c : "menengah",  
    d : "sulit",
    correct : "b"
  }
];

class addQuestions{
  static displayQuerstion(){
    let currentQuizData = quizApps[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a__text.innerText = currentQuizData.a;
    b__text.innerText = currentQuizData.b;
    c__text.innerText = currentQuizData.c;
    d__text.innerText = currentQuizData.d;
  }
  static getAnswer(){
    let answer =  undefined;
    answerel.forEach((answers) => {
      if(answers.checked){
        return answer = answers.id;
      }
    });
    return answer;
  }
  static deletedCheked(){
    answerel.forEach((answers) => {
      answers.checked = false;
    })
  }
}
document.addEventListener('DOMContentLoaded', addQuestions.displayQuerstion);
submitBtn.addEventListener('click', () => {
  let answer = addQuestions.getAnswer()
  if(answer === undefined){
      window.alert('Jawaban anda belum diklick')
  }else{
    if(answer === quizApps[currentQuestion].correct){
      score++;
    }
    currentQuestion++;
    if(currentQuestion < quizApps.length){
      addQuestions.displayQuerstion();
    }else{
      quiz.innerHTML = `<h2>Jawaban kamu yang benar ${score}/${quizApps.length} pertanyaan</h2> <button class="reload" onclick = "location.reload()">Reload</button>`;
    }
    addQuestions.deletedCheked()
  }
});

let matchMediaPhone = matchMedia('(max-width:360px)');
matchMediaPhone.addListener(handleMediaScreen);
function handleMediaScreen(e){
  if(e.matches){
    container.style.display = "none"
  }else{
    container.style.display = "block";
  }
}

