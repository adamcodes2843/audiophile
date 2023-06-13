-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "product" TEXT NOT NULL,
    "cartImage" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "shipping" INTEGER NOT NULL DEFAULT 50,
    "vat" INTEGER NOT NULL,
    "grandTotal" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "payment" TEXT NOT NULL DEFAULT 'e-Money',
    "eMoneyNum" INTEGER,
    "eMoneyPIN" INTEGER,
    "cartId" TEXT NOT NULL,
    "submitted" BOOLEAN NOT NULL DEFAULT false,
    "timeSubmitted" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_cartId_key" ON "Product"("cartId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cartId_key" ON "Customer"("cartId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
