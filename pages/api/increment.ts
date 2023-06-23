import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type dataProps = {
    quantity: number
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    
  }