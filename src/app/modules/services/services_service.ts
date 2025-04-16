import * as bcrypt from "bcrypt";
import { PrismaClient } from "../../../generated/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const createServices = async (data: any) => {
  await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: data.bikeId,
    },
  });

  const userData = {
    bikeId: data.bikeId,
    serviceDate: data.serviceDate,
    description: data.description,
    status: data.status,
  };

  const user = await prisma.serviceRecord.create({
    data: userData,
  });

  return user;
};

const getAllServicesUser = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};

const getByServicesFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });

  return result;
};

const updateUserIntoDB = async (id: string, data: any) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data,
  });

  return result;
};

export const ServicesService = {
  createServices,
  getAllServicesUser,
  getByServicesFromDB,
  updateUserIntoDB,
};
