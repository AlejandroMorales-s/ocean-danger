const AnimalsController = require("./lib/controllers/animalsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

//* Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const { application } = require('express');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Ocean in Danger API'});
});

//* Endpoint para obtener todos los animales
app.get('/animals', async (req, res) => {
    const allAnimals =  await prisma.species.findMany({});
    res.json(allAnimals);
});

//* Endpoint para obtener un animal por su id
app.get('/animals/:id', async (req, res) => {
    const id = req.params.id;
    const animal = await prisma.species.findUnique({where: {id: parseInt(id)}});
    res.json(animal);
});

//* Endpoint para obtener un animal por su nombre
app.get('/animals/name/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const animal = AnimalsController.getAnimalsByName(name);
        res.json(animal);
    } catch (error) {
        res.json({message: "Not animal found"});
    }
});

app.listen(port, () => {
    console.log(`Ocean in Danger on port: ${port}`);
});