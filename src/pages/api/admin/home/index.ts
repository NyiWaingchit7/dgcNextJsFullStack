// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { prisma } from "@/utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).send("Unauthorized.");
  if (method === "POST") {
    const { description } = req.body;
    if (!description) res.status(405).send("bad request");
    const homeData = await prisma.homePage.create({ data: { description } });
    return res.status(200).json({ homeData });
  } else if (method === "PUT") {
    const id = Number(req.query.id);
    const { description } = req.body;
    if (!description) res.status(405).send("bad request");
    const exist = await prisma.homePage.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("bad request");
    const homeData = await prisma.homePage.update({
      data: { description },
      where: { id },
    });
    return res.status(200).json({ homeData });
  } else if (method === "DELETE") {
    const id = Number(req.query.id);

    const exist = await prisma.homePage.findFirst({ where: { id } });
    if (!exist) return res.status(405).send("bad request");
    await prisma.homePage.delete({ where: { id } });
    return res.status(200).send("delete successfully");
  }
  res.status(405).send("method not allowed");
}
