var questions = [
    {
        qtitle:"Which file format should you use for JSON with timestamps?",
        qname:"sql_output",
        qanswers:[
          {
            answer:"avro",
            correct:true
          },
          {
            answer:"parquet",
            correct:false
          },
          {
            answer:"csv",
            correct:false
          },
          {
            answer: "tsv",
            correct:false
          }
        ]
     },
    {
        qtitle:"Which of these is a columnar-storage file format?",
        qname:"file_format",
        qanswers:[
          {
            answer:"avro",
            correct:false
          },
          {
            answer:"parquet",
            correct:true
          },
          {
            answer:"csv",
            correct:false
          },
          {
            answer: "tsv",
            correct:false
          }
        ]
     },
    {
        qtitle:"What is the output of SELECT LEN('SQL Server')?",
        qname:"sql_output",
        qanswers:[
          {
            answer:"10",
            correct:true
          },
          {
            answer:"NULL",
            correct:false
          },
          {
            answer:"12",
            correct:false
          },
          {
            answer: "FALSE",
            correct:false
          }
        ]
     },
     
     {
        qtitle:"What is the output of SELECT SUBSTRING('SUBSTRING',3,5)?",
        qname:"sql_output",
        qanswers:[
          {
            answer:"BS",
            correct:false
          },
          {
            answer:"BSTRI",
            correct:true
          },
          {
            answer:"Error",
            correct:false
          },
          {
            answer: "BST",
            correct:false
          }
        ]
     },
     {
        qtitle:"What is the output of SELECT CONCAT('This','is','a','string')?",
        qname:"sql_output",
        qanswers:[
          {
            answer:"This,is,a,string",
            correct:false
          },
          {
            answer:"This is a string",
            correct:false
          },
          {
            answer:"Error",
            correct:false
          },
          {
            answer: "Thisisastring",
            correct:true
          }
        ]
     },
     {
        qtitle:"What is the output of SELECT REPLACE('REPLACE',P,A)?",
        qname:"sql_output",
        qanswers:[
          {
            answer:"REPLACE",
            correct:false
          },
          {
            answer:"REALACE",
            correct:false
          },
          {
            answer:"Error",
            correct:true
          },
          {
            answer: "REPLPCE",
            correct: false
          }
        ]
     },
     {
        qtitle:"What is the output of SELECT LEFT('LEFT Function',3)?",
        qname:"sql_output",
        qanswers:[
          {
            answer:"ion",
            correct:false
          },
          {
            answer:"LEFT",
            correct:false
          },
          {
            answer:"FALSE",
            correct:false
          },
          {
            answer: "LEF",
            correct: true
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
