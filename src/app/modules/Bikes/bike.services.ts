import * as bcrypt from "bcrypt";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../../../generated/prisma";


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
    include:{
       customer:true
    }
  });

  return result;
};

export const BikeService = {
  createBikes,
  getAllFromBikes,
  getByIdBikeFromDB,
};
