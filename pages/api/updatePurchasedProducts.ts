import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method === 'PATCH') {
        const product = await prisma.product.updateMany({
            where: {
                purchased: false
            },
            data: {
                purchased: true
            }
        })
        res.json(product)
    } else {
        console.log("product could not update")
    }
  }