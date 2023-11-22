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
      qstatus: "enabled",
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
      qtitle: "What is the correct syntax for defining a function with 2 arguments in Python?",
      qname: "python_questions",
      qstatus: "enabled",
      qanswers: [
          {
              answer: "my_func(arg1, arg2){}",
              correct: false
          },
          {
              answer: "def my_func(): arg1=10 arg2=20",
              correct: false
          },
          {
              answer: "function my_func(arg1, arg2):",
              correct: false
          },
          {
              answer: "def my_func(arg1, arg2):",
              correct: true
          }
      ]
  },
  {
      qtitle: "What is the correct way to create a list in Python?",
      qname: "python_questions",
      qstatus: "enabled",
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
    qtitle: "Which of the following operators is used for string concatenation in Python?",
    qname: "python_questions",
    qstatus: "enabled",
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
    qstatus: "enabled",
    qanswers: [
      {
        answer: "message = Hello",
        correct: false
      },
      {
        answer: 'message "Hello"',
        correct: false
      },
      {
        answer: "message = 'Hello'",
        correct: true
      },
      {
        answer: "message := Hello",
        correct: false
      }
    ]
  },  
  {
    qtitle: "What is the correct way to access the second element of a list named 'numbers'?",
    qname: "Lists",
    qstatus: "enabled",
    qanswers: [
      {
      answer: "numbers[2]",
      correct: false
      },
      {
      answer: "numbers[1]",
      correct: true
      },
      {
      answer: "numbers.get(1)",
      correct: false
      },
      {
      answer: "numbers.index(1)",
      correct: false
      }
    ]
  },
  {
    qtitle: "What is the correct way to create a dictionary named 'user' and add the key-value pairs 'name' : 'John' and 'email' : 'john@example.com' to it?",
    qname: "Dictionaries",
    qstatus: "enabled",
    qanswers: [
      {
      answer: "user = {'name' : 'John', 'email' : 'john@example.com'}",
      correct: true
      },
      {
      answer: "user = {name : 'John', email : 'john@example.com'}",
      correct: false
      },
      {
      answer: "user = (name = 'John', email = 'john@example.com')",
      correct: false
      },
      {
      answer: "user = ['name' : 'John', 'email' : 'john@example.com']",
      correct: false
      }
    ]
  },
  {
    qtitle: "What is the correct way to access the value associated with the key 'email' in a dictionary named 'user'?",
    qname: "Dictionaries",
    qstatus: "enabled",
    qanswers: [
    {
    answer: "for ['email] in user",
    correct: false
    },
    {
    answer: "users['emails']",
    correct: false
    },
    {
    answer: "email.get('user')",
    correct: false
    },
    {
      answer: "user['email']",
      correct: true
    },
    ]
  }  
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
