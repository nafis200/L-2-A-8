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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
// import { PrismaClient } from "../../../generated/prisma";
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield prisma.customer.findFirst({
        where: {
            email: data.email,
        },
    });
    if (existingUser) {
        throw new ApiError_1.default(http_status_1.default.FOUND, "Email already exists");
    }
    const userData = {
        email: data.email,
        name: data.name,
        phone: data.phone,
    };
    const user = yield prisma.customer.create({
        data: userData,
    });
    return user;
});
const getAllFromUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return result;
});
const updateUserIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    const result = yield prisma.customer.update({
        where: {
            customerId: id,
        },
        data,
    });
    return result;
});
const deleteUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    const result = yield prisma.customer.delete({
        where: { customerId: id },
    });
    return result;
});
exports.userService = {
    createUser,
    getAllFromUser,
    getByIdFromDB,
    updateUserIntoDB,
    deleteUserFromDB,
};
