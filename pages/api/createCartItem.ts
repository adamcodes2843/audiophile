import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {product, cartImage, price, category, quantity, slug, id} = req.body
      try {
        await prisma.product.create({
          data: {
            product,
            slug,
            cartImage,
            price,
            category,
            quantity,
            id
          }
        })
        res.status(200).json({message: 'Product added to cart'})
      } catch (error) {
        console.log(error)
      }
}