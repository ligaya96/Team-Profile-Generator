// Engineer Class
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, "engineer", id, email);
    this.github = github;
  }

  getRole() {
    return "engineer";
  }
  getEmail() {
    return this.email;
  }
  getUsername() {
    return this.github;
  }
}

module.exports = Engineer;