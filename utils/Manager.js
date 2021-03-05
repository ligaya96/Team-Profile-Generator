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
}

module.exports = Manager;
