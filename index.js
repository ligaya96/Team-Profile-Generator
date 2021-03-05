const Manager = require("./Manager");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const writefileAsync = util.promisify(fs.writeFile)

function initApp() {
    managerInfo();
    engineerInfo();
    internInfo();
    employeeInfo();
}
 //manager information
function managerInfo(){
     
   inquirer.prompt([{   
    type : "input",
    message: "what is your name?",
    name: "Managername",
  },
  {
      type: "input",
      name: "managerid",
      message: "What is your ID number?",
  },
  {
      type: "input",
      name: "manageremail",
      message: "what is your Email?",
  },

  ])
}
// Engineer Information Prompts
function engineerInfo(){
    inquirer.prompt([{
        type: "input",
        name: "Engineername",
        message: "What is the Engineer name?",
    },
    {
        type: "input",
        name: "Engineeremail",
        message: "What is the Engineers Email?",
    },
    {
    type: "input",
    name: "Engineergithub",
    message: "what is the Engineer's Github Username?",
    },
    {
    type: "list",
    message: "What is this persons role?",
    name : "Egineername",
    choices: [
        "Engineer",
        "Intern",
        "Employee",
    ]
    },
  
])
}
//Interns Information Prompts
function internInfo(){
    inquirer.prompt([{
        type: "list",
        name : "Internrole",
        message: "What is this persons role?",
        choices: [
            "Engineer",
            "Intern",
            "Employee",
        ]
     },
    {
       type: "input",
        name: "Internname",
        message: "What is Interns name?",
    },
    {
        type: "input",
        name: "internemail",
        message: "What is the Intern Email?",
    },
    {
    type: "input",
    name: "School",
    message: "Which School does the Intern attend?",
    },
  
])
}
function employeeInfo(){
    inquirer.prompt([{
        type: "list",
        name : "Employeerole",
        message: "What is this persons role?",
        choices: [
            "Engineer",
            "Intern",
            "Employee",
        ]
        },
        {
        type: "input",
        name: "name",
        message: "What is the Employee name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Employees Email?",
    },
    {
    type: "input",
    name: "years",
    message: "How many years of service?",
    },
  
])
}

writeFileAsync("./index.html", );
initApp();