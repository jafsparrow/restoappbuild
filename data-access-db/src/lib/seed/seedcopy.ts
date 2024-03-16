import { PrismaClient } from '@prisma/client';
import { jul17data } from './july21data copy';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  // await prisma.company.deleteMany();
  const july17 = jul17data;
  let finalArr: any[] = [];
  const productArray = Object.values(july17).forEach(
    (item) => (finalArr = [...finalArr, ...item])
  );

  console.log(finalArr);
  await prisma.product.createMany({
    data: finalArr,
  });
  // await prisma.collection.deleteMany();
  // const createdCollection = await prisma.collection.create({
  //   data: collectionData,
  // });

  // await prisma.company.create({ data: companyData });
  // await prisma.collection.create({
  //   data: {
  //     name: 'Arabic',
  //   },
  // });
  // await prisma.user.create({
  //   data: {
  //     username: 'jafar',
  //     password: 1234,
  //   },
  // });

  console.log(`Seeding finished.`);
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
