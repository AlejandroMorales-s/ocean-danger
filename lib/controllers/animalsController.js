const Reader = require("./../utils/reader");
const AnimalsService = require("./../services/animalsService");

class AnimalsController {
    static getAnimalsByName(name) {
        const animals = Reader.readJsonFile("animals.json");
        const animalsByName = AnimalsService.filterByName(animals, name);
        return animalsByName;
    }
}
module.exports = AnimalsController;