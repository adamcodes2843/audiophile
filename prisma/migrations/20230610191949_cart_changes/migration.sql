-- DropIndex
DROP INDEX "Product_cartId_key";

-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "total" DROP NOT NULL,
ALTER COLUMN "vat" DROP NOT NULL,
ALTER COLUMN "grandTotal" DROP NOT NULL,
ALTER COLUMN "timeSubmitted" DROP DEFAULT;
