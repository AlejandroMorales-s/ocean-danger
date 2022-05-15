const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const tiburonMartilloGigante = await prisma.species.upsert({
      where: { name: 'Giant Hammerhead Shark' },
      update: {},
      create: {
        name: 'Giant Hammerhead Shark',
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
    const delfinCabezaBlanca = await prisma.species.upsert({
      where: { name: 'White-headed dolphin' },
      update: {},
      create: {
        name: 'White-headed dolphin',
        cientificName: 'Cephalorhynchus hectori',
		region: 'Nueva Zelanda',
		minWeight: 40,
		maxWeight: 60,
		color: 'Gray and white',
		diet: 'Carnivore',
		lifeExpectancy: '20 years',
    url: "https://i.pinimg.com/originals/f9/53/a9/f953a96a525edacc35fb6f503edd3463.jpg",
    description: "The Hector's dolphin is the smallest member of the family Delphinidae. Adults range in length from 1.2 to 1.6 m and weigh 40 to 60 kg.3 The species has slight sexual dimorphism, with females being slightly larger and heavier than males. The body shape is robust with no distinguishable beak or snout. The Hector's dolphin has a rounded dorsal fin and concave edges. The overall color is a pale gray but closer inspection reveals a complex chromatic upholstery. The forehead is gray with black highlights and the tip of the snout is black. The chest and belly are white, and on them a dark gray line runs from the flippers to the eyes. Another band runs from the sides to the dorsal fin."
      },
    });
    const rorcualComun = await prisma.species.upsert({
      where: { name: 'Rorual Comun' },
      update: {},
      create: {
        name: 'Rorual Comun',
        cientificName: 'Balaenoptera physalus',
		region: 'west of Corsica, Sardinia, Sicily and in the Ligurian Sea.',
		minWeight: 1800,
		maxWeight: 17000,
		color: 'Dark Gray',
		diet: 'Ominvore',
		lifeExpectancy: '80 and 90 years',
    url: "https://www.chiledesarrollosustentable.cl/wp-content/uploads/2018/12/ballena-rorcual-III.jpg",
    description: "The fin whale has an elongated and hydrodynamic body with a falciform dorsal fin located on the posterior third of the body. The caudal fin ends sharply and has a gray crest. The average length is usually 18 meters. Females are longer than males and can reach a length of about 19 meters. They can weigh up to 90 tons. The fin whale has a dark gray back and sides and a white belly. Their baleen has 260 to 480 blades on each side of the mouth, dark almost black in color, except for those in front of the right side, which are white. The ventral folds reach approximately to the navel and range from 50 to 100. The most notable characters that differentiate them from other species are the asymmetrical coloration of the left lower jaw, which is usually darker than the right, the white supra-mandibular spot and the V-shaped spot between the two spiracle openings; as well as the scars on the posterior margin of the caudal fin and the wounds along the body due to confrontations with other individuals. Another distinctive feature is the blow that can form a column of a height between 4 and 6 meters."
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