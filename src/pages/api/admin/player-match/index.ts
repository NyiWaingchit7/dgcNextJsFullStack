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
  if (method === "PUT") {
    const id = Number(req.query.id);
    const { win, draw, lose, playerId } = req.body;
    const isValidate = id && playerId;
    if (!isValidate) return res.status(405).send("bad request");
    const isExist = await prisma.playerMatches.findFirst({
      where: { id },
    });
    if (!isExist) return res.status(405).send("This request does not exist");
    const winRate = Math.round((win / (win + draw + lose)) * 100);

    const data = await prisma.playerMatches.update({
      data: { win, draw, lose, winRate },
      where: { id, playerId },
    });
    return res.status(200).json({ data });
  }

  res.status(405).send("method not allowed");
}
