-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isCashier" BOOLEAN NOT NULL DEFAULT false,
    "isWaiter" BOOLEAN NOT NULL DEFAULT true,
    "isKitchenUser" BOOLEAN NOT NULL DEFAULT false,
    "isHomeDeliveryUser" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL DEFAULT 1,
    "name" TEXT NOT NULL,
    "secondaryLanguageName" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "hasVariant" BOOLEAN NOT NULL DEFAULT false,
    "hasModifiers" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" INTEGER NOT NULL,
    "qwickViewOrder" INTEGER DEFAULT 1,
    "categoryId" INTEGER NOT NULL,
    "color" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT 'product details',
    "printName" TEXT NOT NULL DEFAULT 'Not Added',

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryCode" INTEGER NOT NULL DEFAULT 1,
    "color" TEXT NOT NULL,
    "kitchenId" INTEGER NOT NULL,
    "isAvailableAllDay" BOOLEAN NOT NULL DEFAULT true,
    "startTime" TEXT NOT NULL DEFAULT '',
    "endTime" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kitchen" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "printer" TEXT NOT NULL,
    "shouldPrintKot" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "kitchen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modifier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "modifierGroupId" INTEGER,
    "orderItemId" INTEGER,

    CONSTRAINT "modifier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modifierGroup" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION,
    "image" TEXT,
    "printName" TEXT,
    "printModifiersAsItems" BOOLEAN NOT NULL DEFAULT false,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "modifierGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "orderNumber" INTEGER NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tableId" INTEGER,
    "createdUserId" INTEGER NOT NULL,
    "orderType" TEXT NOT NULL DEFAULT 'table',
    "customerName" TEXT,
    "customerId" INTEGER NOT NULL DEFAULT 1,
    "deliveryUserId" INTEGER,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL DEFAULT 'Spider',
    "type" TEXT NOT NULL DEFAULT 'table',

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItem" (
    "id" SERIAL NOT NULL,
    "customeKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kotNumber" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "userId" INTEGER,
    "status" TEXT,
    "orderItemType" TEXT NOT NULL DEFAULT 'new',
    "message" TEXT NOT NULL DEFAULT '',
    "count" INTEGER NOT NULL,
    "modifiers" TEXT NOT NULL DEFAULT '',
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "productId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "orderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modifierapplied" (
    "id" SERIAL NOT NULL,
    "modifierId" INTEGER NOT NULL,
    "orderItemId" INTEGER NOT NULL,

    CONSTRAINT "modifierapplied_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kot" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedUserId" INTEGER,
    "kitchenId" INTEGER,

    CONSTRAINT "kot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "secondaryLanguageName" TEXT NOT NULL DEFAULT 'add other laguage',
    "logoUrl" TEXT NOT NULL,
    "lastOrderNumber" INTEGER NOT NULL,
    "caption" TEXT NOT NULL,
    "footer" TEXT NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" TEXT DEFAULT '',
    "long" TEXT DEFAULT '',
    "decimalZeros" INTEGER DEFAULT 3,
    "printer" TEXT NOT NULL DEFAULT 'Not configured',

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "printName" TEXT NOT NULL,
    "isPercentage" BOOLEAN NOT NULL DEFAULT true,
    "value" DOUBLE PRECISION NOT NULL,
    "companyId" INTEGER,

    CONSTRAINT "tax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "floor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "floor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER,
    "floorId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tableSeats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tableId" INTEGER NOT NULL,

    CONSTRAINT "tableSeats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posSession" (
    "id" SERIAL NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "createdUserId" INTEGER NOT NULL,
    "initialCash" DOUBLE PRECISION NOT NULL DEFAULT 1,

    CONSTRAINT "posSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "order_orderNumber_key" ON "order"("orderNumber");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_kitchenId_fkey" FOREIGN KEY ("kitchenId") REFERENCES "kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant" ADD CONSTRAINT "variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modifier" ADD CONSTRAINT "modifier_modifierGroupId_fkey" FOREIGN KEY ("modifierGroupId") REFERENCES "modifierGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modifier" ADD CONSTRAINT "modifier_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "orderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modifierGroup" ADD CONSTRAINT "modifierGroup_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_deliveryUserId_fkey" FOREIGN KEY ("deliveryUserId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_kotNumber_fkey" FOREIGN KEY ("kotNumber") REFERENCES "kot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modifierapplied" ADD CONSTRAINT "modifierapplied_modifierId_fkey" FOREIGN KEY ("modifierId") REFERENCES "modifier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modifierapplied" ADD CONSTRAINT "modifierapplied_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "orderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kot" ADD CONSTRAINT "kot_updatedUserId_fkey" FOREIGN KEY ("updatedUserId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kot" ADD CONSTRAINT "kot_kitchenId_fkey" FOREIGN KEY ("kitchenId") REFERENCES "kitchen"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax" ADD CONSTRAINT "tax_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table" ADD CONSTRAINT "table_floorId_fkey" FOREIGN KEY ("floorId") REFERENCES "floor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tableSeats" ADD CONSTRAINT "tableSeats_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posSession" ADD CONSTRAINT "posSession_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
