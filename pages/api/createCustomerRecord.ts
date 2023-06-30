import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {name, email, phone, address, zip, city, country, payment, eMoneyNum, eMoneyPIN, total, shipping, vat, grandTotal, products} = req.body
    try{
        await prisma.checkout.create({
            data: {
                name,
                email,
                phone,
                address,
                zip,
                city,
                country,
                payment,
                eMoneyNum,
                eMoneyPIN,
                total,
                shipping,
                vat,
                grandTotal,
                orderSubmitted: true,
                products: {
                    connect: products
                }
            }
        })
        res.status(200).json({message: 'Customer record created'})
    } catch (error) {
        console.log(error)
    }
}