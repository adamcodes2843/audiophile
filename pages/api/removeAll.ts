import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        const removeItems = await prisma.product.deleteMany({
            where: {
                purchased: false,
            },
        })
        res.status(200).json({message: 'deleted cart items'})
    } catch(error) {
        console.log(error)
    }
}