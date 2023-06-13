-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_checkoutId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "checkoutId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_checkoutId_fkey" FOREIGN KEY ("checkoutId") REFERENCES "Checkout"("id") ON DELETE SET NULL ON UPDATE CASCADE;
