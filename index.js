const fs = require("fs");
const inquirer = require("inquirer")
const Manager = require("./utils/Manager");
const Engineer = require("./utils/Engineer");
const Intern = require("./utils/Intern");
const employees = [];

 //Mangers information
function EmployeeProfile(){
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

  ]).then(response => {
      const manName = response.Managername;
      const manId = response.managerid;
      const manEmail = response.managerEmail;
      const manager = new Manager(manName, manId, manEmail);
      employees.push(manager);
      console.log(manager);
      engineerInfo();
  })
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
]).then(response => {
    const engineName = response.Engineername;
    const engineEmail = response.Engineeremail;
    const engineGithub = response.Engineergithub;
    const engineer = new Engineer(engineName, engineEmail, engineGithub);
    employees.push(engineer);
    console.log(engineer);
    internInfo();
})
}
//Interns Information Prompts
function internInfo(){
    inquirer.prompt([{
       type: "input",
        name: "Studentname",
        message: "What is Interns name?",
    },
    {
        type: "input",
        name: "studentEmail",
        message: "What is the Student Email?",
    },
    {
    type: "input",
    name: "School",
    message: "Which School does the Intern attend?",
    },
    {
        type: "list",
        message: "Would you like to add another employee?: ",
        choices: ["Yes", "NO"],
        name: "addingEmployee"
    }
  
]).then(response => {
    const internName = response.Studentname;
    const internEmail = response.studentEmail;
    const internSchool = response.school;
    const intern = new Intern(internName, internEmail, internSchool);
    employees.push(intern);
    console.log(intern);
    if (addingEmployee === "Yes"){
        EmployeeProfile();
    } else if (addingEmployee === "NO") {
        Empcards();
    }
})
function Empcards() {
    let employeeCards = "";
    employees.forEach(employee => {
        let employeeCard = employee.newEmployeeCard();
        employeeCards += employeeCard;
    });

    let CreateHTML = `
 <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>TEAM-Profile Gen</title>
    </head>
        <body>
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Teammates!</h1>
                    </div>
                </div>
             </div>
        <div class = "container" style="padding-top: 5rem;"> 
          <div class="card-columns justify-content-center">
              ${employeeCards}
            </div>
        </div>
     </body>
   </html>`;
    fs.writeFile("./dist/index.html", CreateHTML, (err)=> {
        if (err) {
            throw err;
        }
    });
};
};
EmployeeProfile();