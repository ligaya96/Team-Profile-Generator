const Employee = require("../utils/Employee");
//Employees Profile TEST
describe("Employee class",() => {
    it("can set the name, id, email",() => {
        const test = new Employee("Ligaya", 0, "noneya@yahoo.com");
        expect(test.name).toEqual("Ligaya");
        expect(test.email).toEqual("noneya@yahoo.com")
        expect(test.id).toEqual(0);
    });
    describe("getRole",() => {
        it("returnsEmployee",() =>{
            const role = "Employee";
            const test = new Employee("Ligaya", 5, "noneya@yahoo.com");
            expect(test.getRole()).toBe(role)
        })
    })
})