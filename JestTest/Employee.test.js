const { expect, it } = require("@jest/globals");
const Employee = require("../Employee");
describe("Employee class",() => {
    it("can set the name, years of service, email",() => {
        const test = new Employee("Ligaya", 5, "noneya@yahoo.com");
        expect(test.name).toEqual("Ligaya");
        expect(test.Yearsofservice).toEqual(0)
        expect(test.email).toEqual("noneya@yahoo.com")
    });
    describe("getRole",() => {
        it("returnsEmployee",() =>{
            const role = "Employee";
            const test = new Employee("Ligaya", 5, "noneya@yahoo.com");
            expect(test.getRole()).toBe(role)
        })
    })
})