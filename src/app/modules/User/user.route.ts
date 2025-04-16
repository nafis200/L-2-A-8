import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';


const router = express.Router();

router.post('/',userController.CreateUser)


export const userRoutes = router;