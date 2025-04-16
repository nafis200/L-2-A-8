import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BikeService } from "./bike.services";


const CreateBikes:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await BikeService.createBikes(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike Created successfuly!",
        data: result
    })
})

const getAllBikesController:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await BikeService.getAllFromBikes();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike Data retrived successfuly!",
        data: result
    })
})

const getByIdBikesDB:RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await BikeService.getByIdBikeFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike data fetched by id!",
        data: result
    });
})

export const BikeController = {
    CreateBikes,
    getAllBikesController,
    getByIdBikesDB
}