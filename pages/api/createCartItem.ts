import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {product, cartImage, price, category, quantity} = req.body
    try {
      await prisma.product.create({
        data: {
          product,
          cartImage,
          price,
          category,
          quantity
        }
      })
      res.status(200).json({message: 'Product added to cart'})
    } catch (error) {
      console.log(error)
    }
}