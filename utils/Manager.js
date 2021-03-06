//Manager Class
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email) {
        super (name, id, email);
    }
    getRole() {
        return "Manager";
    }
    getid() {
        return this.id;
    }
    getEmail(){
        return this.email
    }
    newEmployeeCard() {
        return `<div class="card">
        <div class="card-header bg-info text-light">
         <h3>${this.name}</h3>
        <h5>Manager</h5>
        </div>
        <div class="card-body" style="background-color:Green;">
        <ul class="list-group">
        <li class="list-group-item">Id: ${this.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        </ul>
        </div>
        </div>`;
}
}

module.exports = Manager;
