const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

//* Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const { application } = require('express');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({message: 'alive'});
});

app.get('/animals', async (req, res) => {
    const allAnimals =  await prisma.species.findMany({});
    res.json(allAnimals);
});

app.listen(port, () => {
    console.log(`Ocean in Danger on port: ${port}`);
});