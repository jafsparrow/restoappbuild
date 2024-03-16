import { PrismaClient } from '@prisma/client';
import { productData, testSample } from './seeddata';
import { jul17data } from './july21data copy';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  await prisma.company.create({
    data: {
      address: 'demo address',
      caption: 'demo caption',
      currencyCode: 'OMR',
      footer: 'demo footer',
      lastOrderNumber: 100,
      logoUrl: '',
      name: 'Dawar Resto Cafe',
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
        username: 'mustafa',
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
        username: 'jafar',
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
        username: 'rasheed',
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

  await prisma.kitchen.create({
    data: {
      name: 'Main',
      printer: 'printer',
      shouldPrintKot: true,
    },
  });

  await prisma.category.createMany({
    data: [
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Drinks',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Breakfast',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Biriyani/Majboos',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Dum Biriyani',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Arabic',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Indian',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Rice and Gravy',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Chinese',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Soup and Sald',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Sandwich',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Juice',
        categoryCode: 33,
      },
      {
        color: '#eeeeee',
        kitchenId: 1,
        name: 'Burger / Combo',
        categoryCode: 33,
      },
    ],
  });

  const july17 = jul17data;
  let finalArr: any[] = [];
  Object.values(july17).forEach((item) => (finalArr = [...finalArr, ...item]));

  console.log(finalArr);
  await prisma.product.createMany({
    data: finalArr,
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
