import * as bcrypt from "bcrypt";
// import { PrismaClient } from "../../../generated/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { PrismaClient } from "@prisma/client";

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

const getAllFromUser = async () => {
  const result = await prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

const getByIdFromDB = async (id: string) => {
  console.log(id);
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  return result;
};

const updateUserIntoDB = async (id: string, data: any) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data,
  });

  return result;
};

const deleteUserFromDB = async (id: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  const result = await prisma.customer.delete({
    where: { customerId: id },
  });

  return result;
};

export const userService = {
  createUser,
  getAllFromUser,
  getByIdFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};
