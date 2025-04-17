"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateServices = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        bikeId: data.bikeId,
        serviceDate: data.serviceDate,
        description: data.description,
        status: data.status
    };
    const user = yield prisma.serviceRecord.create({
        data: userData,
    });
    return user;
});
const getAllFromServicesController = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.serviceRecord.findMany({});
    return result;
});
const getByIdServicesDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const updateServicesIntoDBController = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    const result = yield prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data,
    });
    return result;
});
const getPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const services = yield prisma.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress'],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return services;
});
exports.ServicesService = {
    CreateServices,
    getAllFromServicesController,
    getByIdServicesDB,
    updateServicesIntoDBController,
    getPendingServices
};
