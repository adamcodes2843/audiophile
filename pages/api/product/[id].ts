import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const productId = req.query.id 

    if(req.method === 'DELETE') {
        const product = await prisma.product.delete({
            where: {id: Number(productId)}
        })
        res.json(product)
    } else {
        console.log("product could not be deleted")
    }
}