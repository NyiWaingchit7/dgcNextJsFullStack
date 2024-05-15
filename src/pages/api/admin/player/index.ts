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
    const { name, age, city, joinDate, role, head, assetUrl } = req.body;

    const isValidate = name && age && city && joinDate;
    if (!isValidate) return res.status(405).send("bad request");

    const data = await prisma.player.create({
      data: { name, age, city, joinDate, role, head, assetUrl },
    });
    const playerMatch = await prisma.playerMatches.create({
      data: { playerId: data.id },
    });
    return res.status(200).json({ data, playerMatch });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const { name, age, city, joinDate, role, head } = req.body;
    const isValidate = name && age && city && joinDate;
    if (!isValidate) return res.status(405).send("bad request");
    const isExist = await prisma.player.findFirst({
      where: { id },
    });
    if (!isExist) return res.status(405).send("This request does not exist");

    const data = await prisma.player.update({
      data: { name, age, city, joinDate, role, head },
      where: { id },
    });
    return res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);
    const playerExist = await prisma.player.findFirst({
      where: { id },
    });
    if (!playerExist) return res.status(405).send("bad request");
    const isPlayerMatchExist = await prisma.playerMatches.findFirst({
      where: { playerId: id },
    });
    if (!isPlayerMatchExist) return res.status(405).send("bad request");
    await prisma.playerMatches.deleteMany({ where: { playerId: id } });
    await prisma.player.delete({ where: { id } });

    return res.status(200).send("deleted Successfully");
  }
  res.status(405).send("method not allowed");
}
