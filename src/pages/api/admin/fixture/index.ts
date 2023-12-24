// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { Result } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).send("Unauthorized.");
  const method = req.method;
  if (method === "POST") {
    const { opponentTeamId } = req.body;

    if (!opponentTeamId) return res.status(405).send("bad request");

    const data = await prisma.fixture.create({
      data: { opponentTeamId },
    });
    return res.status(200).json({ data });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const { opponentTeamId, myTeamResult, opponentTeamResult } = req.body;
    const isValid =
      opponentTeamId &&
      myTeamResult !== undefined &&
      opponentTeamResult !== undefined;
    if (!isValid) return res.status(405).send("bad request");

    let matchResult;
    if (myTeamResult === opponentTeamResult) {
      matchResult = Result.DRAW;
    } else {
      matchResult =
        myTeamResult > opponentTeamResult ? Result.WIN : Result.LOSE;
    }

    const isExist = await prisma.fixture.findFirst({
      where: { id },
    });
    if (!isExist) return res.status(405).send("This request does not exist");

    const data = await prisma.fixture.update({
      data: { opponentTeamId, myTeamResult, opponentTeamResult, matchResult },
      where: { id },
    });
    return res.status(200).json({ data });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);
    const exist = await prisma.fixture.findFirst({
      where: { id },
    });
    if (!exist) return res.status(405).send("bad request");

    await prisma.fixture.delete({ where: { id } });

    return res.status(200).send("deleted Successfully");
  }
  res.status(405).send("method not allowed");
}
