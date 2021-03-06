const Manager = require("../utils/Manager");
// Manager TEST
describe("Manager class", () =>{
    it("Can set the name, id, and email", () => {
        const test = new Manager("Ligaya", 1282, "noneya@gmail.com");
        expect(test.name).toEqual("Ligaya");
        expect(test.id).toEqual(1282);
        expect(test.email).toEqual("noneya@gmail.com");
    });

    describe("getRole", () => {
        it("returns Manager", ()=>{
            const role = "Manager";
            const test = new Manager("Ligaya", 1282, "noneya@gmail.com");
            expect(test.getRole()).toBe(role);
        });
    });
});