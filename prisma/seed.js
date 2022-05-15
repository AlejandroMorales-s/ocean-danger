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
    url: "https://static.nationalgeographic.es/files/styles/image_3200/public/Tibur%C3%B3n%20martillo%2002.webp?w=768",
    description: "The most striking feature of all hammerhead shark species is the particular shape of the T-shaped head, with the eyes and nostrils located at the ends of the head, thanks to which the side-to-side head movement when swimming, it can see everything around it and even what is behind it. The pectoral fins are located behind the gills, and the caudal fin has a black tip. Almost the entire dorsal part is gray or brown, but turns white near the ventral part. Like most sharks, hammerheads have counter-coloration, i.e. a dark color on the back and a light color on the belly. Seen from below, the hammerhead blends in with the brightness of the surface waters; seen from above, it blends in with the dark seafloor. Counter-coloration is a type of mimicry that allows the shark to surprise its prey."
      },
    });
    const ballenaAzul = await prisma.species.upsert({
      where: { name: 'Blue Whale' },
      update: {},
      create: {
        name: 'Blue Whale',
        cientificName: 'Balaenoptera musculus',
		region: 'Baja California Sur',
		minWeight: 130000,
		maxWeight: 150000,
		color: 'Blue',
		diet: 'Krill',
		lifeExpectancy: '80 to 90 years',
    url: 'https://a-z-animals.com/media/2021/04/Biggest-Whale-header.jpg',
    description: 'The blue whale is an extremely large marine mammal, with a long, torpedo-shaped body. They have blue-gray colored skin, with a slightly lighter colored underside; they have two pectoral fins, a small dorsal fin on their backs, and a large fluke.',
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