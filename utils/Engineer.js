// Engineer Class
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, Github) {
    super(name, email, Github);
    this.Github = Github;
  }
  getEmail() {
    return this.email;
  }
  getGithub() {
    return this.Github;
  }
  getRole() {
    return "engineer";
  }
 newEmployeeCard() {
  return `<div class="card">
  <div class="card-header bg-info text-light">
   <h3>${this.name}</h3>
  <h5>Engineer</h5>
  </div>
  <div class="card-body" style="background-color: Green;">
  <ul class="list-group">
  <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
  <li class="list-group-item">Github: ${this.Github}</li>
  </ul>
  </div>
  </div>`;
}
}

module.exports = Engineer;