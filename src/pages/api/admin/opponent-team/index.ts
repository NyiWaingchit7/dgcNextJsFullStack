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
    const { name } = req.body;

    if (!name) return res.status(405).send("bad request");

    const data = await prisma.opponentTeam.create({
      data: { name },
    });
    return res.status(200).json({ data });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const { name } = req.body;

    if (!name) return res.status(405).send("bad request");
    const isExist = await prisma.opponentTeam.findFirst({
      where: { id },
    });
    if (!isExist) return res.status(405).send("This request does not exist");

    const data = await prisma.opponentTeam.update({
      data: { name },
      where: { id },
    });
    return res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);
    const exist = await prisma.opponentTeam.findFirst({
      where: { id },
    });
    if (!exist) return res.status(405).send("bad request");
    await prisma.fixture.deleteMany({ where: { opponentTeamId: id } });
    const data = await prisma.opponentTeam.delete({ where: { id } });

    return res.status(200).send("deleted Successfully");
  }
  res.status(405).send("method not allowed");
}
