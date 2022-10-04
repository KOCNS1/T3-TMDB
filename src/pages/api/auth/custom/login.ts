import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../server/db/client";
import { compareSync } from "bcrypt";
import { User } from "@prisma/client";

const login = async (req: NextApiRequest, res: NextApiResponse<User>) => {
  const { method } = req;
  if (method !== "POST") return res.status(405).end();

  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) return res.status(404).end();

  const isPasswordCorrect = compareSync(password, user.password as string);
  if (!isPasswordCorrect) return res.status(401).end();

  res.status(201).json(user);
};

export default login;
