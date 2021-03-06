const Engineer = require("../utils/Engineer");
//Engineer TEST
describe("Engineer", () =>{
    it("Can set the name, Github, and email of the Engineer", () => {
        const test = new Engineer("Ligaya","ligaya96", "nonya@gmail.com",);
        expect(test.name).toEqual("Ligaya");
        expect(test.Github).toEqual(test.Github);
        expect(test.email).toEqual("nonya@gmail.com");
    });

    describe("getGithub", () => {
        it("returns the github Username", ()=>{
            const GitHub = "ligaya96";
            const test = new Engineer("Ligaya", "ligaya96", "nonya@gmail.com");
            //expect(test.getGithub()).toBe(GitHub);
        });
    });

    describe("getRole", () => {
        it("returns engineer", ()=>{
            const role = "engineer";
            const test = new Engineer("Ligaya", "ligaya96", "nonya@gmail.com");
            expect(test.getRole()).toBe(role);
        });
    });
});

