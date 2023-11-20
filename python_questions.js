var questions = [
  {
      qtitle: "What is the output of the following code?\n<pre>\nprint(2+3)\n</pre>",
      qname: "python_questions",
      qstatus: "enabled",
      qanswers: [
          {
              answer: "23",
              correct: false
          },
          {
              answer: "5",
              correct: true
          },
          {
              answer: "1.5",
              correct: false
          },
          {
              answer: "\"5\"",
              correct: false
          }
      ]
  },
  {
      qtitle: "What data type is the variable `number` in the following code?\n<pre>\nnumber = 10\n</pre>",
      qname: "python_questions",
      qstatus: "disabled",
      qanswers: [
          {
              answer: "Integer",
              correct: true
          },
          {
              answer: "String",
              correct: false
          },
          {
              answer: "Boolean",
              correct: false
          },
          {
              answer: "None",
              correct: false
          }
      ]
  },
  {
      qtitle: "What is the correct syntax for defining a function in Python?",
      qname: "python_questions",
      qstatus: "disabled",
      qanswers: [
          {
              answer: "my_function(parameter1, parameter2) {}",
              correct: false
          },
          {
              answer: "def my_function():\n        parameter1 = 10\n        parameter2 = 20",
              correct: false
          },
          {
              answer: "function my_function(parameter1, parameter2):\n        # function code",
              correct: false
          },
          {
              answer: "def my_function(parameter1, parameter2):\n        # function code",
              correct: true
          }
      ]
  },
  {
      qtitle: "What is the correct way to create a list in Python?",
      qname: "python_questions",
      qstatus: "disabled",
      qanswers: [
          {
              answer: "my_list = (1, 2, 3)",
              correct: false
          },
          {
              answer: "my_list = {1, 2, 3}",
              correct: false
          },
          {
              answer: "my_list = [\"1\" \"2\" \"3\"]",
              correct: false
          },
          {
              answer: "my_list = [1, 2, 3]",
              correct: true
          }
      ]
  },
  {
    qtitle: "Which of the following operators is used for string concatenation in Python?\n<pre>\na + b\n</pre>",
    qname: "python_questions",
    qstatus: "disabled",
    qanswers: [
        {
            answer: "+",
            correct: true
        },
        {
            answer: "-",
            correct: false
        },
        {
            answer: "*",
            correct: false
        },
        {
            answer: "//",
            correct: false
        }
    ]
  },
  {
    qtitle: "What is the correct way to create a variable named 'message' and assign the value 'Hello' to it?",
    qname: "Variables",
    qstatus: "disabled",
    qanswers: [
      {
        answer: "message = 'Hello';",
        correct: true
      },
      {
        answer: "message = Hello;",
        correct: false
      },
      {
        answer: 'message "Hello";',
        correct: false
      },
      {
        answer: "message := Hello;",
        correct: false
      }
    ]
  },
  {
    qtitle: "What is the correct way to add two numbers?",
    qname: "Number_Addition",
    qstatus: "disabled",
    qanswers: [
      {
        answer: "num1 + num2",
        correct: true
      },
      {
        answer: "num1 - num2",
        correct: false
      },
      {
        answer: "num1 * num2",
        correct: false
      },
      {
        answer: "num1 / num2",
        correct: false
      }
    ]
  },
  
  {
    qtitle: "What is the correct way to concatenate two strings?",
    qname: "String_Concatenation",
    qstatus: "disabled",
    qanswers: [
      {
        answer: "firstName + lastName",
        correct: true
      },
      {
        answer: "firstName + lastName",
        correct: false
      },
      {
        answer: "firstName lastName",
        correct: false
      },
      {
        answer: "firstName:=lastName",
        correct: false
      }
    ]
  },
  

  
];

var questionselement = document.getElementById("questions");
var questionshtml = "";

questions.forEach(question => {
  if (question.qstatus === "enabled") {
    questionshtml += `
    <div class="quiz">
      <qtitle>${question.qtitle}</qtitle>
      <form>
  `
  question.qanswers.forEach(answer => {
      if (answer.correct) {
        questionshtml += `<div class = correct>`
      }
      questionshtml += `
        <input type="radio" id="${answer.answer}" name="${question.qname}" value="${answer.answer}">
        <label for="${answer.answer}">${answer.answer}</label><br>
      `
      if (answer.correct) {
        questionshtml += `</div>`
      }        
  })
  questionshtml += `</form> </div>`;
  }
});

questionselement.innerHTML = questionshtml;
