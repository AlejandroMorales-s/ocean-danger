const Reader = require("./../../lib/utils/reader");
const animals = Reader.readJsonFile("animals.json");
const AnimalsService = require("./../../lib/services/animalsService");

describe("Unit test for ExplorerService class", () => {

    test("Filter explorers in node mission", () => {
        const animalsByName = AnimalsService.filterByName(animals, "Tiburón");
        console.log(animalsByName); 
        expect(animalsByName[0].name).toBe("Tiburón Martillo Gigante");
    });
});