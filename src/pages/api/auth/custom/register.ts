import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../server/db/client";
import { hashSync, genSaltSync } from "bcrypt";
import { User } from "@prisma/client";

const register = async (req: NextApiRequest, res: NextApiResponse<User>) => {
  const { method } = req;
  if (method !== "POST") return res.status(405).end();

  const { email, password } = req.body;
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });

  res.status(201).json(user);
};

export default register;
