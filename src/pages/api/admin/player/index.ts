// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).send("Unauthorized.");
  const method = req.method;
  if (method === "POST") {
    const { name, age, city, joinDate, role, head } = req.body;
    console.log(req.body);

    const isValidate = name && age && city && joinDate;
    if (!isValidate) return res.status(405).send("bad request");

    const data = await prisma.player.create({
      data: { name, age, city, joinDate, role, head },
    });
    return res.status(200).json({ data });
  }
  res.status(405).send("method not allowed");
}
