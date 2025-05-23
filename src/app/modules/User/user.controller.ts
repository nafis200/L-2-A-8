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

const getByIdFromDB:RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await userService.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User data fetched by id!",
        data: result
    });
})

const updateUserIntoDBController:RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await userService.updateUserIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User data updated!",
        data: result
    })
})

const deleteUserFromDBController:RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await userService.deleteUserFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User data deleted!",
        data: result
    })
})


export const userController = {
    CreateUser,
    getAllFromUserController,
    getByIdFromDB,
    updateUserIntoDBController,
    deleteUserFromDBController
}