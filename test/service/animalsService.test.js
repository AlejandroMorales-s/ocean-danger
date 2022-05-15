const Reader = require("./../../lib/utils/reader");
const animals = Reader.readJsonFile("animals.json");
const AnimalsService = require("./../../lib/services/animalsService");

describe("Unit test for AnimalsService class", () => {

    test("Filter animals by name", () => {
        const animalsByName = AnimalsService.filterByName(animals, "Tiburón");
        expect(animalsByName[0].name).toBe("Tiburón Martillo Gigante");
    });
});