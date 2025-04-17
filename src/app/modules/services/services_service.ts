import * as bcrypt from "bcrypt";
// import { PrismaClient } from "../../../generated/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const  CreateServices = async (data: any) => {

  const userData = {
    bikeId: data.bikeId,
    serviceDate: data.serviceDate,
    description: data.description,
    status:data.status
  };

  const user = await prisma.serviceRecord.create({
    data: userData,
  });

  return user;
};

const getAllFromServicesController = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};

const getByIdServicesDB = async (id: string) => {
  console.log(id);
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });

  return result;
};

const  updateServicesIntoDBController = async (id: string, data: any) => {
  
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

const getPendingServices = async()=>{
  const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const services = await prisma.serviceRecord.findMany({
      where: {
        status: {
          in: ['pending', 'in_progress'],
        },
        serviceDate: {
          lt: sevenDaysAgo,
        },
      },
    });
    return services
}


export const ServicesService = {
  CreateServices,
  getAllFromServicesController,
  getByIdServicesDB,
  updateServicesIntoDBController,
  getPendingServices
};
