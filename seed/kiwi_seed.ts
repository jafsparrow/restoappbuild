import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// IMPORTANT: Replace with your actual kitchenId and collectionId values
const KITCHEN_ID = 1; // <-- Replace with your kitchen ID
const COLLECTION_ID = 1; // <-- Replace with your collection ID

async function seedCreamizaMenu() {
  console.log("🍦 Seeding Creamiza Premium Ice Cream Cafe menu...");

  // ============================================
  // STEP 1: Create Categories
  // ============================================
  const categoriesData = [
    { name: "Exotic Falooda", color: "#F5A623" },
    { name: "Dry Fruits Falooda", color: "#F5A623" },
    { name: "Regular Falooda", color: "#F5A623" },
    { name: "Cafe Special Treats", color: "#F5A623" },
    { name: "Dry Fruits Sundaes", color: "#F5A623" },
    { name: "Exotic Sundaes", color: "#F5A623" },
    { name: "Premium Sundaes", color: "#F5A623" },
    { name: "Fruits Salad", color: "#F5A623" },
    { name: "Gudbud", color: "#F5A623" },
    { name: "Seasonal Special Desserts", color: "#F5A623" },
    { name: "Cake N Cream Desserts", color: "#F5A623" },
    { name: "Special Ice Cream Shakes", color: "#F5A623" },
    { name: "Premium Creamy Shakes", color: "#F5A623" },
    { name: "Premium Fresh Scoops", color: "#F5A623" },
  ];

  const createdCategories: Record<string, number> = {};

  for (let i = 0; i < categoriesData.length; i++) {
    const cat = categoriesData[i];
    const category = await prisma.category.create({
      data: {
        name: cat.name,
        color: cat.color,
        kitchenId: KITCHEN_ID,
        categoryCode: i + 1,
      },
    });
    createdCategories[cat.name] = category.id;
    console.log(`  ✅ Category created: ${cat.name} (ID: ${category.id})`);
  }

  // ============================================
  // STEP 2: Create Products under each Category
  // ============================================

  // --- Exotic Falooda ---
  const exoticFaloodaId = createdCategories["Exotic Falooda"];
  await prisma.product.createMany({
    data: [
      {
        name: "Mohabath Ka Falooda",
        price: 160,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla Ice Cream + Jelly + Rooh Afza + Dry Nuts + Fruits + Cafe Special Rose Falooda Mix",
      },
      {
        name: "Mango Magic Falooda",
        price: 160,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla + Mango + Dry Fruits + Fruits + Cafe Special Falooda Mix",
      },
      {
        name: "Avocado Falooda",
        price: 180,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Avocado Ice cream + Vanilla + Fruits + Cafe Special Falooda Mix & Cream N Nuts",
      },
      {
        name: "Royal Falooda",
        price: 180,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla + Spanish Delight + Fruits + Nuts + Cafe Special Falooda Mix",
      },
      {
        name: "Kashmiri Falooda",
        price: 200,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Strawberry + Blackcurrant + Butterscotch + Dry Nuts + Fruits + Cafe Special Falooda Mix",
      },
      {
        name: "Tender Falooda",
        price: 200,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Tender + Vanilla + Cream & Nuts + Fruits + Cafe Special Falooda Mix",
      },
      {
        name: "Blueberry Falooda",
        price: 200,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Blueberry + Vanilla Ice Cream + Dry Nuts + Fruits + Cafe Special Falooda Mix",
      },
      {
        name: "Cafe Special Falooda",
        price: 220,
        cost: 0,
        categoryId: exoticFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla + Butterscotch + Arabian & Spanish Delight + Dry Fruits + Fruits + Nuts + Cafe Special Falooda Mix",
      },
    ],
  });
  console.log("  ✅ Exotic Falooda products created (8 items)");

  // --- Dry Fruits Falooda ---
  const dryFruitsFaloodaId = createdCategories["Dry Fruits Falooda"];
  await prisma.product.createMany({
    data: [
      {
        name: "Caramel Nuts Falooda",
        price: 180,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Butterscotch + Caramel Cream + Vanilla + Cafe Special Falooda Mix + Dry Fruits & Nuts",
      },
      {
        name: "Choco Lover Falooda",
        price: 200,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Chocolate + Vanilla + Brownie Cake + Dry Nuts + Cafe Special Falooda Mix",
      },
      {
        name: "Sweet & Sweet Falooda",
        price: 200,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla Ice Cream + Caramel Cream + Gulab Jamun + Sweet Dish + Dry Nuts + Cafe Special Falooda Mix",
      },
      {
        name: "Coffee Delight",
        price: 200,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Natural Coffee Ice Cream + Vanilla + Cafe Special Falooda Mix + Cream & Nuts",
      },
      {
        name: "Cookies & Cream Falooda",
        price: 200,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Cookies & Cream Ice Cream + Vanilla + Oreo Biscoff + Cafe Special Falooda Mix + Dry Fruits & Nuts",
      },
      {
        name: "Almond Treat",
        price: 220,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Spanish Delight + Vanilla + Roasted Almond Ice Cream + Cafe Special Falooda Mix + Cream & Nuts",
      },
      {
        name: "Honeymoon Special Falooda",
        price: 220,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Red Velvet + Kulfi + Fig & Honey Ice Cream + Cafe Special Falooda Mix + Dry Fruits & Nuts",
      },
      {
        name: "Dream In Lotus Falooda",
        price: 240,
        cost: 0,
        categoryId: dryFruitsFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Biscoff Ice Cream + Vanilla + Cafe Special Falooda Mix + Dry Fruits & Nuts",
      },
    ],
  });
  console.log("  ✅ Dry Fruits Falooda products created (8 items)");

  // --- Regular Falooda ---
  const regularFaloodaId = createdCategories["Regular Falooda"];
  await prisma.product.createMany({
    data: [
      {
        name: "Normal Falooda",
        price: 120,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla + Strawberry + Fresh Fruit + Dry Fruits & Cafe Special Falooda Mix",
      },
      {
        name: "Volcano Falooda",
        price: 140,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla + Pineapple + Fruits + Dry Fruits + Cafe Special Falooda Mix",
      },
      {
        name: "Fancy Falooda",
        price: 150,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Strawberry + Pista + Fruits + Dry Fruits + Cafe Special Falooda Mix",
      },
      {
        name: "Pista Punch",
        price: 150,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Pista + Vanilla + Fresh Fruit + Cafe Special Falooda Mix + Cream & Nuts",
      },
      {
        name: "Orange Bubble",
        price: 150,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla + Natural Orange Ice Cream + Fresh Fruits + Nuts + Cafe Special Falooda Mix",
      },
      {
        name: "Arabian Falooda",
        price: 160,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Arabian + Vanilla + Fruits & Nuts + Cafe Special Falooda Mix",
      },
      {
        name: "Sweet & Kheer Falooda",
        price: 160,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Premium Cashew Kheer + Vanilla Ice Cream + Fresh Fruits + Cafe Special Falooda Mix + Cream & Nuts",
      },
      {
        name: "Jack & Jill",
        price: 160,
        cost: 0,
        categoryId: regularFaloodaId,
        collectionId: COLLECTION_ID,
        description:
          "Natural Jack Fruit + Vanilla Ice Cream + Fruits + Cafe Special Falooda Mix + Cream & Nuts",
      },
    ],
  });
  console.log("  ✅ Regular Falooda products created (8 items)");

  // --- Cafe Special Treats ---
  const cafeSpecialTreatsId = createdCategories["Cafe Special Treats"];
  await prisma.product.createMany({
    data: [
      {
        name: "Sizzling (Smoking) Brownie",
        price: 180,
        cost: 0,
        categoryId: cafeSpecialTreatsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Two In One Brownie",
        price: 220,
        cost: 0,
        categoryId: cafeSpecialTreatsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Pistachio Kunafa Regular",
        price: 349,
        cost: 0,
        categoryId: cafeSpecialTreatsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Pistachio Kunafa Mini",
        price: 249,
        cost: 0,
        categoryId: cafeSpecialTreatsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Puttu Ice Cream",
        price: 350,
        cost: 0,
        categoryId: cafeSpecialTreatsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Dream Ice Cream",
        price: 599,
        cost: 0,
        categoryId: cafeSpecialTreatsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
    ],
  });
  console.log("  ✅ Cafe Special Treats products created (6 items)");

  // --- Dry Fruits Sundaes ---
  const dryFruitsSundaesId = createdCategories["Dry Fruits Sundaes"];
  await prisma.product.createMany({
    data: [
      {
        name: "Strawberry Twist",
        price: 160,
        cost: 0,
        categoryId: dryFruitsSundaesId,
        collectionId: COLLECTION_ID,
        description:
          "Strawberry + Vanilla Ice Creams + Dry Fruits + Cream & Nuts",
      },
      {
        name: "Blueberry Garnish",
        price: 180,
        cost: 0,
        categoryId: dryFruitsSundaesId,
        collectionId: COLLECTION_ID,
        description:
          "Combination of Blueberry & Vanilla Ice Cream + Dry Fruits + Cream & Nuts",
      },
      {
        name: "Arabian Story",
        price: 180,
        cost: 0,
        categoryId: dryFruitsSundaesId,
        collectionId: COLLECTION_ID,
        description:
          "Combinations of Arabian Delight & Vanilla Ice Cream + Special Dates + Cream & Nuts",
      },
      {
        name: "Blackcurrant Fudge",
        price: 180,
        cost: 0,
        categoryId: dryFruitsSundaesId,
        collectionId: COLLECTION_ID,
        description:
          "Combinations of Black Currant & Vanilla Ice Cream + Dry Fruits, Cream & Nuts",
      },
      {
        name: "Dry Fruits Basket",
        price: 200,
        cost: 0,
        categoryId: dryFruitsSundaesId,
        collectionId: COLLECTION_ID,
        description:
          "Combinations of Fig & Spanish Ice Cream + Dry Fruits + Honey & Cream",
      },
      {
        name: "Frenge More",
        price: 200,
        cost: 0,
        categoryId: dryFruitsSundaesId,
        collectionId: COLLECTION_ID,
        description:
          "Combinations of Almond & Spanish Delight Ice Cream + Special Roasted Almond + Cream & Nuts",
      },
    ],
  });
  console.log("  ✅ Dry Fruits Sundaes products created (6 items)");

  // --- Exotic Sundaes ---
  const exoticSundaesId = createdCategories["Exotic Sundaes"];
  await prisma.product.createMany({
    data: [
      {
        name: "Latino Loades",
        price: 140,
        cost: 0,
        categoryId: exoticSundaesId,
        collectionId: COLLECTION_ID,
        description: "Vanilla & Chocolate Ice Cream + Nuts & Chocolate",
      },
      {
        name: "Coffee Delight",
        price: 150,
        cost: 0,
        categoryId: exoticSundaesId,
        collectionId: COLLECTION_ID,
        description: "Vanilla & Coffee Ice Cream + Nuts & Chocolate",
      },
      {
        name: "Hiswanik Awake",
        price: 150,
        cost: 0,
        categoryId: exoticSundaesId,
        collectionId: COLLECTION_ID,
        description: "Fig Honey & Chocolate Ice Cream + Nuts & Chocolate",
      },
      {
        name: "Exotic Afric",
        price: 150,
        cost: 0,
        categoryId: exoticSundaesId,
        collectionId: COLLECTION_ID,
        description: "Spanish & Chocolate Ice Cream + Nuts & Chocolate",
      },
      {
        name: "Dark Chocolate",
        price: 160,
        cost: 0,
        categoryId: exoticSundaesId,
        collectionId: COLLECTION_ID,
        description: "Double Scoop Chocolate Ice Cream + Nuts & Chocolate",
      },
      {
        name: "Caramel Coffee",
        price: 160,
        cost: 0,
        categoryId: exoticSundaesId,
        collectionId: COLLECTION_ID,
        description: "Caramel & Coffee Ice Cream + Nuts & Chocolate",
      },
    ],
  });
  console.log("  ✅ Exotic Sundaes products created (6 items)");

  // --- Premium Sundaes ---
  const premiumSundaesId = createdCategories["Premium Sundaes"];
  await prisma.product.createMany({
    data: [
      {
        name: "Lovely Gulab",
        price: 180,
        cost: 0,
        categoryId: premiumSundaesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Brownie Fudge",
        price: 180,
        cost: 0,
        categoryId: premiumSundaesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Oreo Fudge",
        price: 180,
        cost: 0,
        categoryId: premiumSundaesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Tender Creamy Caramel",
        price: 180,
        cost: 0,
        categoryId: premiumSundaesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Premium Lotus",
        price: 200,
        cost: 0,
        categoryId: premiumSundaesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Kunafa Sundae",
        price: 200,
        cost: 0,
        categoryId: premiumSundaesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
    ],
  });
  console.log("  ✅ Premium Sundaes products created (6 items)");

  // --- Fruits Salad ---
  const fruitsSaladId = createdCategories["Fruits Salad"];
  await prisma.product.createMany({
    data: [
      {
        name: "Normal Salad",
        price: 100,
        cost: 0,
        categoryId: fruitsSaladId,
        collectionId: COLLECTION_ID,
        description: "Fresh fruits + Vanilla + Cream & Nuts",
      },
      {
        name: "Royal Salad",
        price: 120,
        cost: 0,
        categoryId: fruitsSaladId,
        collectionId: COLLECTION_ID,
        description: "Dry Nuts + Fruits + Special Cream + Butterscotch",
      },
      {
        name: "Cafe Special Salad",
        price: 150,
        cost: 0,
        categoryId: fruitsSaladId,
        collectionId: COLLECTION_ID,
        description:
          "Alphonso Mango + Jackfruit + Tender Ice Creams + Fruits + Cream & Nuts",
      },
      {
        name: "Custard Salad",
        price: 160,
        cost: 0,
        categoryId: fruitsSaladId,
        collectionId: COLLECTION_ID,
        description: "Custard Mix Fruits + Vanilla & Nuts",
      },
    ],
  });
  console.log("  ✅ Fruits Salad products created (4 items)");

  // --- Gudbud ---
  const gudbudId = createdCategories["Gudbud"];
  await prisma.product.createMany({
    data: [
      {
        name: "Natural Gudbud",
        price: 170,
        cost: 0,
        categoryId: gudbudId,
        collectionId: COLLECTION_ID,
        description:
          "Vanilla + Strawberry + Pineapple + Jack Fruit + Fresh Fruits & Premium Nuts",
      },
      {
        name: "Royal Gudbud",
        price: 190,
        cost: 0,
        categoryId: gudbudId,
        collectionId: COLLECTION_ID,
        description:
          "Mango + Pista + Vanilla + Orange + Fresh Fruits, Jelly & Premium Nuts",
      },
    ],
  });
  console.log("  ✅ Gudbud products created (2 items)");

  // --- Seasonal Special Desserts ---
  const seasonalSpecialDessertsId =
    createdCategories["Seasonal Special Desserts"];
  await prisma.product.createMany({
    data: [
      {
        name: "Seetafal Falooda",
        price: 200,
        cost: 0,
        categoryId: seasonalSpecialDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Fresh Strawberry Falooda",
        price: 200,
        cost: 0,
        categoryId: seasonalSpecialDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Dragon Fruit Falooda",
        price: 200,
        cost: 0,
        categoryId: seasonalSpecialDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Mango Crazy",
        price: 160,
        cost: 0,
        categoryId: seasonalSpecialDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Choco Strawberry",
        price: 180,
        cost: 0,
        categoryId: seasonalSpecialDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
    ],
  });
  console.log("  ✅ Seasonal Special Desserts products created (5 items)");

  // --- Cake N Cream Desserts ---
  const cakeNCreamDessertsId = createdCategories["Cake N Cream Desserts"];
  await prisma.product.createMany({
    data: [
      {
        name: "Black Fantasy",
        price: 200,
        cost: 0,
        categoryId: cakeNCreamDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Red Fantasy",
        price: 200,
        cost: 0,
        categoryId: cakeNCreamDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Jaffodil",
        price: 220,
        cost: 0,
        categoryId: cakeNCreamDessertsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
    ],
  });
  console.log("  ✅ Cake N Cream Desserts products created (3 items)");

  // --- Special Ice Cream Shakes ---
  const specialIceCreamShakesId = createdCategories["Special Ice Cream Shakes"];
  await prisma.product.createMany({
    data: [
      {
        name: "Vanilla Shake",
        price: 100,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Strawberry Shake",
        price: 100,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Pista Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Alphonso Mango Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Rich Chocolate Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Butterscotch Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Pineapple Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Sweet Orange Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Blackcurrant Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Rich Coffee Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Spanish Delight Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Tender Coconut Shake",
        price: 120,
        cost: 0,
        categoryId: specialIceCreamShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
    ],
  });
  console.log("  ✅ Special Ice Cream Shakes products created (12 items)");

  // --- Premium Creamy Shakes ---
  const premiumCreamyShakesId = createdCategories["Premium Creamy Shakes"];
  await prisma.product.createMany({
    data: [
      {
        name: "Creamy Chiku",
        price: 140,
        cost: 0,
        categoryId: premiumCreamyShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Avocado",
        price: 140,
        cost: 0,
        categoryId: premiumCreamyShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Cookies & Creamy",
        price: 140,
        cost: 0,
        categoryId: premiumCreamyShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Arabian Delight",
        price: 140,
        cost: 0,
        categoryId: premiumCreamyShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Blueberry",
        price: 150,
        cost: 0,
        categoryId: premiumCreamyShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Special Kulfi",
        price: 150,
        cost: 0,
        categoryId: premiumCreamyShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Dream In Lotus",
        price: 150,
        cost: 0,
        categoryId: premiumCreamyShakesId,
        collectionId: COLLECTION_ID,
        description: "",
      },
    ],
  });
  console.log("  ✅ Premium Creamy Shakes products created (7 items)");

  // --- Premium Fresh Scoops ---
  const premiumFreshScoopsId = createdCategories["Premium Fresh Scoops"];
  await prisma.product.createMany({
    data: [
      {
        name: "Vanilla Scoop",
        price: 50,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Strawberry Scoop",
        price: 60,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Butterscotch Scoop",
        price: 60,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Alphonso Mango Scoop",
        price: 60,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Sweet Orange Scoop",
        price: 60,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Rich Coffee Scoop",
        price: 60,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Pineapple Scoop",
        price: 60,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Pistachio Scoop",
        price: 60,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Fig N Honey Scoop",
        price: 70,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Real Passion Fruit Scoop",
        price: 70,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Cashew Kheer Scoop",
        price: 70,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Spanish Delight Scoop",
        price: 70,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Rich Chocolate Scoop",
        price: 70,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Roasted Almond Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Fresh Chikku Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Red Velvet Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Arabian Delight Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Avocado Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Indian Jack Fruit Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Blackcurrant Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Special Kulfi Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Tender Coconut Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Blueberry Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Cookies N Cream Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
      {
        name: "Dream Ice Cream Scoop",
        price: 80,
        cost: 0,
        categoryId: premiumFreshScoopsId,
        collectionId: COLLECTION_ID,
        description: "",
      },
    ],
  });
  console.log("  ✅ Premium Fresh Scoops products created (25 items)");

  console.log("\n🎉 Creamiza menu seeded successfully!");
  console.log(`   📂 Categories: 14`);
  console.log(`   🍨 Products: 106`);
}

seedCreamizaMenu()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
