import * as bcrypt from "bcrypt";
import { PrismaClient } from "../../../generated/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const createBikes = async (data: any) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: data.customerId,
    },
  });
  const BikeData = {
    brand: data.brand,
    model: data.model,
    year: data.year,
    customerId: data.customerId,
  };

  const Bikes = await prisma.bike.create({
    data: BikeData,
  });

  return Bikes;
};

const getAllFromBikes = async () => {
  const result = await prisma.bike.findMany({});
  return result;
};

const getByIdBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });

  return result;
};

export const BikeService = {
  createBikes,
  getAllFromBikes,
  getByIdBikeFromDB,
};
