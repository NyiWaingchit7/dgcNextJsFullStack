// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import Nextauth from "../../auth/[...nextauth]";
import { prisma } from "@/utils/db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, Nextauth);
  if (!session) res.status(401).send("unauthorize");
  const method = req.method;
  if (method === "GET") {
    const homeData = await prisma.homePage.findMany();

    const playerData = await prisma.player.findMany();
    const playerMatches = await prisma.playerMatches.findMany();
    const opponentTeam = await prisma.opponentTeam.findMany({
      orderBy: { id: "asc" },
    });
    const fixture = await prisma.fixture.findMany({
      orderBy: { id: "asc" },
    });
    const achievement = await prisma.achievement.findMany({
      orderBy: { id: "asc" },
    });
    const event = await prisma.event.findMany({
      orderBy: { id: "asc" },
    });
    return res.status(200).json({
      homeData,
      playerData,
      playerMatches,
      opponentTeam,
      fixture,
      achievement,
      event,
    });
  }
  res.status(405).send("method not allowed");
}
