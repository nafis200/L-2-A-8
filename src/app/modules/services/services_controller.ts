import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, RequestHandler, Response } from "express";

import httpStatus from "http-status";
import { ServicesService } from "./services_service";


const CreateServices:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await ServicesService.CreateServices(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Services Created successfuly!",
        data: result
    })
})

const getAllFromServicesController:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await ServicesService.getAllFromServicesController();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Services Data retrived successfuly!",
        data: result
    })
})

const getByIdServicesDB:RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await ServicesService.getByIdServicesDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Services data fetched by id!",
        data: result
    });
})

const updateServicesIntoDBController:RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await ServicesService.updateServicesIntoDBController(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Services data updated!",
        data: result
    })
})

const getPendingServicesController:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await ServicesService.getPendingServices();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result
    })
})




export const ServicesController = {
    CreateServices,
    getAllFromServicesController,
    getByIdServicesDB,
    updateServicesIntoDBController,
    getPendingServicesController
}