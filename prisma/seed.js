const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const tiburonMartilloGigante = await prisma.species.upsert({
      where: { name: 'Tiburón Martillo Gigante' },
      update: {},
      create: {
        name: 'Tiburón Martillo Gigante',
        cientificName: 'Sphyrna mokarran',
		region: 'Golfo de México',
		minWeight: 230,
		maxWeight: 450,
		color: 'Gray',
		diet: 'Carnivore',
		lifeExpectancy: '20 to 30 years',
      },
    });

    console.log('Adding new data to the database...');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();