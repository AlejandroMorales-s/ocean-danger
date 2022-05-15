const fs = require("fs");
const Reader = require("./../../lib/utils/reader");

describe("Unit test for Reader class", () => {
    test("Read json file", () => {
        const animals = Reader.readJsonFile("animals.json");
        expect(animals).not.toBe(false);
    });
});