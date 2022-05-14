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
    const tortugaCarey = await prisma.species.upsert({
      where: { name: 'Tortuga Carey' },
      update: {},
      create: {
        name: 'Tortuga Carey',
        cientificName: 'Eretmochleys',
		region: 'Port Veracruz',
		minWeight: 45,
		maxWeight: 68,
		color: 'Black and white',
		diet: 'Omnivore',
		lifeExpectancy: '30 to 50 years',
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