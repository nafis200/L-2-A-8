import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, RequestHandler, Response } from "express";
import { userService } from "./user.services";
import httpStatus from "http-status";

const CreateUser:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await userService.createUser(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "User Created successfuly!",
        data: result
    })
})

const getAllFromUserController:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await userService.getAllFromUser();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "User Data retrived successfuly!",
        data: result
    })
})

export const userController = {
    CreateUser,
    getAllFromUserController
}