//Intern Class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, email, school) {
        super (name, email, school);
        this.School = school;
    }
    getSchool() {
        return this.School;
    }
    getEmail(){
        return this.email
    }
    getRole() {
        return "Intern";
    }
    newEmployeeCard() {
        return `<div class="card">
        <div class="card-header bg-info text-light">
         <h3>${this.name}</h3>
        <h5>Intern</h5>
        </div>
        <div class="card-body" style="background-color:Green;">
        <ul class="list-group">
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item">School: ${this.School}</li>
        </ul>
        </div>
        </div>`;
}
}

module.exports = Intern;

