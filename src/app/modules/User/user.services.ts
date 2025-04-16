import * as bcrypt from "bcrypt";
import { PrismaClient } from "../../../generated/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const createUser = async (data: any) => {
  const existingUser = await prisma.customer.findFirst({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new ApiError(httpStatus.FOUND, "Email already exists");
  }

  const userData = {
    email: data.email,
    name: data.name,
    phone: data.phone,
  };

  const user = await prisma.customer.create({
    data: userData,
  });

  return user;
};

export const userService = {
  createUser,
};
