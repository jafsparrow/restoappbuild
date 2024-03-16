import { PrismaClient } from '@prisma/client';
import { productData, testSample } from './seeddata';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const jsonParsed = JSON.parse('./july21data.json');
  await prisma.company.create({
    data: {
      address: 'demo address',
      caption: 'demo caption',
      currencyCode: 'OMR',
      footer: 'demo footer',
      lastOrderNumber: 100,
      logoUrl: '',
      name: 'demo reso cafe',
      decimalZeros: 2,
      lat: '333',
      long: '444',
      printer: 'demo main',
      secondaryLanguageName: 'arabic name',
    },
  });

  await prisma.collection.create({
    data: {
      name: 'arabic',
    },
  });
  await prisma.user.createMany({
    data: [
      {
        password: 1234,
        username: 'democash1',
        isAdmin: false,
        isCashier: true,
        isKitchenUser: true,
        isWaiter: true,
        name: 'demo cash user',
        phone: 'demo phone',
      },
      {
        password: 1234,
        username: 'admin',
        isAdmin: true,
        isCashier: true,
        isKitchenUser: true,
        isWaiter: true,
        name: 'demo admin user',
        phone: 'demo phone',
      },
      {
        password: 1234,
        username: 'demowaiter1',
        isAdmin: false,
        isCashier: false,
        isKitchenUser: false,
        isWaiter: true,
        name: 'demo waiter user',
        phone: 'demo phone',
      },
      {
        password: 1234,
        username: 'demokitchen1',
        isAdmin: false,
        isCashier: false,
        isKitchenUser: true,
        isWaiter: false,
        name: 'demo kitchen user',
        phone: 'demo phone',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
