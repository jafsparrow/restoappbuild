-- AlterTable
ALTER TABLE "order" ADD COLUMN     "deliveryUserId" INTEGER DEFAULT NULL;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_deliveryUserId_fkey" FOREIGN KEY ("deliveryUserId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
