const Reader = require("../utils/reader");
const animals = Reader.readJsonFile("animals.json");

class AnimalsService {
    static filterByName(animals, name) {
        const result =  animals.filter(animal => {
            if (animal.name.toLowerCase().includes(name.toLowerCase())) {
                return animal;
            }
        });
        return result;
    }
}

module.exports = AnimalsService;