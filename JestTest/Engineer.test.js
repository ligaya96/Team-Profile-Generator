const Engineer = require("../Engineer");
describe("Engineer class", () =>{
    it("Can set the name, Github, and email of the Engineer", () => {
        const test = new Engineer("Ligaya", "nonya@gmail.com", "ligaya96");
        expect(test.name).toEqual("Ligaya");
        expect(test.email).toEqual("anon@yahoo.com");
    });

    describe("getUsername", () => {
        it("returns the github account", ()=>{
            const gitHub = "ligaya96";
            const test = new Engineer("Ligaya", "nonya@gmail.com", "ligaya96");
            expect(test.getUsername()).toBe(gitHub);
        });
    });

    describe("getRole", () => {
        it("returns engineer", ()=>{
            const role = "engineer";
            const test = new Engineer("Ligaya", "nonya@gmail.com", "ligaya96");
            expect(test.getRole()).toBe(role);
        });
    });
});

