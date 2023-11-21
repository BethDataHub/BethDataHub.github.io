var questions = [
    {
      qtitle:"Which of the following does this best describe? Data warehousing solution that is used for large scale queries and big data analytics",
      qname:"Azure_Tools",
      qanswers:[
        {
          answer:"PowerBI",
          correct:false
        },
        {
          answer:"Azure Databricks",
          correct:false
        },
        {
          answer:"Azure Data Factory",
          correct:false
        },
        {
          answer: "Azure Synapse Analytics",
          correct:true
        }
      ]
    },
    {
      qtitle:"Which of the following does this best describe? Platform based on Apache Spark clusters that will allow you to create big data workflows.",
      qname:"Azure_Tools",
      qanswers:[
        {
          answer:"PowerBI",
          correct:false
        },
        {
          answer:"Azure Databricks",
          correct:true
        },
        {
          answer:"Azure Data Factory",
          correct:false
        },
        {
          answer: "Azure Synapse Analytics",
          correct:false
        }
      ]
    },
    {
      qtitle:"Which of the following does this best describe? Platform that can visual data using Python, R, Scala & SQL.",
      qname:"Azure_Tools",
      qanswers:[
        {
          answer:"PowerBI",
          correct:false
        },
        {
          answer:"Azure Databricks",
          correct:true
        },
        {
          answer:"Azure Data Factory",
          correct:false
        },
        {
          answer: "Azure Synapse Analytics",
          correct:false
        }
      ]
    },
    {
      qtitle:"Which of the following does this best describe? Platform that can store multiple data format types for consumption, up to petaByte.",
      qname:"Azure_Tools",
      qanswers:[
        {
          answer:"PowerBI",
          correct:false
        },
        {
          answer:"Azure Databricks",
          correct:false
        },
        {
          answer:"Azure Data Factory",
          correct:false
        },
        {
          answer: "Azure Data Lake",
          correct:true
        }
      ]
    },
    {
      qtitle:"Which of the following does this best describe? Cloud service that allows etl of big data. It stores pipeline data for 45 days.",
      qname:"Azure_Tools",
      qanswers:[
        {
          answer:"PowerBI",
          correct:false
        },
        {
          answer:"Azure Databricks",
          correct:false
        },
        {
          answer:"Azure Data Factory",
          correct:true
        },
        {
          answer: "Azure Data Lake",
          correct:false
        }
      ]
    },
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
