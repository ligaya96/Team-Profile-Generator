const Intern = require("../Intern");
describe("Intern class", () =>{
    it("Can set the name, email, School of the Intern", () => {
        const test = new Intern("Ligaya", "nonya@gmail.com", "UW");
        expect(test.name).toEqual("Ligaya");
        expect(test.email).toEqual("nonya@gmail.com");
    });

    describe("getSchool", () => {
        it("returns the school the intern is attending", () => {
            const school = "UW";
            const test = new Intern("Ligaya", "nonya@gmail.com", "UW");
            expect(test.getSchool()).toBe(school);
        });
    });

    describe("getRole", () => {
        it("returns Intern", ()=>{
            const role = "Intern";
            const test = new Intern("Ligaya", "nonya@gmail.com", "UW");
            expect(test.getRole()).toBe(role);
        });
    });
});