var questions = [
  {
    qtitle:"Which of the following is the correct extension of the Python file?",
    qname:"file_type",
    qanswers:[
      {
        answer:".python",
        correct:false
      },
      {
        answer:".pl",
        correct:false
      },
      {
        answer:".py",
        correct:true
      },
      {
        answer: ".p",
        correct:false
      }
    ]
  },
  {
    qtitle:"Who developed the Python language?",
    qname:"python_developer",
    qanswers:[
      {
        answer:"Zim Den",
        correct:false
      },
      {
        answer:"Guido van Rossum",
        correct:true
      },
      {
        answer:"Niene Stom",
        correct:false
      },
      {
        answer: "Wick van Rossum",
        correct:false
      }
    ]
  },
  {
    qtitle:"What is a correct syntax to output \"Hello World\" in Python?",
    qname:"print_syntax",
    qanswers:[
      {
        answer:"echo(\"Hello World\")",
        correct:false
      },
      {
        answer:"print(\"Hello World\")",
        correct:true
      },
      {
        answer:"show(\"Hello World\")",
        correct:false
      },
      {
        answer: "output(\"Hello World\")",
        correct:false
      }
    ]
  }
]

var questionselement = document.getElementById("questions")
var questionshtml = ""
questions.forEach(question => {
  questionshtml += `
    <div class="quiz">
      <qtitle>${question.qtitle}</qtitle>
      <form>
  `
  question.qanswers.forEach(answer => {
      if (answer.correct) {
        questionshtml += `<div class = "correct">`
      }
      questionshtml += `
        <input type="radio" id="${answer.answer}" name="${question.qname}" value="${answer.answer}">
        <label for="${answer.answer}">${answer.answer}</label><br>
      `
      if (answer.correct) {
        questionshtml += `</div>`
      }        
  })
  questionshtml += `</form> </div>`
});
questionselement.innerHTML = questionshtml