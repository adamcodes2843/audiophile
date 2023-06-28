import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const productId =  req.query.id
    const quantity = req.body
    const quantityNumber = Number(quantity.quantity)

    if(req.method === 'PATCH') {
        const product = await prisma.product.update({
            where: {id: Number(productId)},
            data: {
                quantity: quantityNumber
            }
        })
        res.json(product)
    } else {
        console.log("product could not update")
    }
  }