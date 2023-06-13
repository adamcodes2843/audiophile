/*
  Warnings:

  - You are about to drop the column `cartId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `checkoutId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_cartId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cartId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cartId",
ADD COLUMN     "checkoutId" TEXT NOT NULL,
ADD COLUMN     "purchased" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "Customer";

-- CreateTable
CREATE TABLE "Checkout" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "payment" TEXT NOT NULL DEFAULT 'e-Money',
    "eMoneyNum" TEXT,
    "eMoneyPIN" TEXT,
    "total" INTEGER,
    "shipping" INTEGER NOT NULL DEFAULT 50,
    "vat" INTEGER,
    "grandTotal" INTEGER,
    "orderSubmitted" BOOLEAN NOT NULL DEFAULT false,
    "timeSubmitted" TIMESTAMP(3),

    CONSTRAINT "Checkout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_checkoutId_fkey" FOREIGN KEY ("checkoutId") REFERENCES "Checkout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
