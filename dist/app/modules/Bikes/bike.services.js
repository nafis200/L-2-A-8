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
exports.BikeService = void 0;
const client_1 = require("@prisma/client");
// import { PrismaClient } from "../../../generated/prisma";
const prisma = new client_1.PrismaClient();
const createBikes = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.customer.findUniqueOrThrow({
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
    const Bikes = yield prisma.bike.create({
        data: BikeData,
    });
    return Bikes;
});
const getAllFromBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findMany({});
    return result;
});
const getByIdBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: id,
        },
        include: {
            customer: true
        }
    });
    return result;
});
exports.BikeService = {
    createBikes,
    getAllFromBikes,
    getByIdBikeFromDB,
};
