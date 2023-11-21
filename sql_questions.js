var questions = [
     {
      qtitle:"Which role would allow a user to execute SELECT statements?",
      qname:"sql_permissions",
      qanswers:[
        {
          answer:"db_datauser",
          correct:false
        },
        {
          answer:"db_datawriter",
          correct:false
        },
        {
          answer:"db_datareader",
          correct:true
        },
        {
          answer: "db_accessadmin",
          correct:false
        }
      ]
   },
     {
      qtitle:"Which database role allows you to execute CREATE TABLE statements?",
      qname:"sql_permissions",
      qanswers:[
        {
          answer:"db_owner",
          correct:false
        },
        {
          answer:"db_accessadmin",
          correct:false
        },
        {
          answer:"db_datawriter",
          correct:false
        },
        {
          answer: "db_ddladmin",
          correct:true
        }
      ]
   },
     {
      qtitle:"A user needs to be able to execute DBCC CHECKDB on the acme database, which role should you grant them?",
      qname:"sql_permissions",
      qanswers:[
        {
          answer:"serveradmin",
          correct:false
        },
        {
          answer:"sysadmin",
          correct:false
        },
        {
          answer:"db_owner on master database",
          correct:false
        },
        {
          answer: "db_owner on acme database",
          correct:true
        }
      ]
   },
     {
      qtitle:"In order to have access to SQL Agent, users need to be granted a SQLAgent* role on which database?",
      qname:"sql_permissions",
      qanswers:[
        {
          answer:"msdb",
          correct:true
        },
        {
          answer:"master",
          correct:false
        },
        {
          answer:"sqlagent",
          correct:false
        },
        {
          answer: "sqlservices",
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
     },
     {
      qtitle:"What does DR stand for?",
      qname:"acronym",
      qanswers:[
        {
          answer:"Database replication",
          correct:false
        },
        {
          answer:"Disaster recovery",
          correct:true
        },
        {
          answer:"Delete recovery",
          correct:false
        },
        {
          answer: "Database restore",
          correct: false
        }
      ]
      },
     {
      qtitle:"What does CTE stand for?",
      qname:"acronym",
      qanswers:[
        {
          answer:"Common table expression",
          correct:true
        },
        {
          answer:"Compile table extract",
          correct:false
        },
        {
          answer:"Count of table expression",
          correct:false
        },
        {
          answer: "Count table elements",
          correct: false
        }
      ]
      },
     {
      qtitle:"What does ETL stand for?",
      qname:"acronym",
      qanswers:[
        {
          answer:"Execute, transform, load",
          correct:false
        },
        {
          answer:"Extract, trigger, load",
          correct:false
        },
        {
          answer:"Execute, trigger, load",
          correct:false
        },
        {
          answer: "Extract, transform, load",
          correct: true
        }
      ]
     },
     {
       qtitle:"What does DDL stand for?",
       qname:"acronym",
       qanswers:[
         {
           answer:"Data derivation language",
           correct:false
         },
         {
           answer:"Data definition language",
           correct:true
         },
         {
           answer:"Dynamic data language",
           correct:false
         },
         {
           answer: "Detailed data language",
           correct: false
         }
       ]
     },
     {
      qtitle:"What does DDL stand for?",
      qname:"acronym",
      qanswers:[
        {
          answer:"Data derivation language",
          correct:false
        },
        {
          answer:"Data definition language",
          correct:true
        },
        {
          answer:"Dynamic data language",
          correct:false
        },
        {
          answer: "Detailed data language",
          correct: false
        }
      ]
     },
     {
      qtitle:"What does SQL stand for?",
      qname:"acronym",
      qanswers:[
        {
          answer:"Structured Query List",
          correct:false
        },
        {
          answer:"Simple Query Language",
          correct:false
        },
        {
          answer:"Simple Query List",
          correct:false
        },
        {
          answer: "Structured Query Language",
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
