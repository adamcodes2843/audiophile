/*
  Warnings:

  - Made the column `total` on table `Checkout` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vat` on table `Checkout` required. This step will fail if there are existing NULL values in that column.
  - Made the column `grandTotal` on table `Checkout` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timeSubmitted` on table `Checkout` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Checkout" ALTER COLUMN "total" SET NOT NULL,
ALTER COLUMN "vat" SET NOT NULL,
ALTER COLUMN "grandTotal" SET NOT NULL,
ALTER COLUMN "timeSubmitted" SET NOT NULL,
ALTER COLUMN "timeSubmitted" SET DEFAULT CURRENT_TIMESTAMP;
