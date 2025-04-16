import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';


const router = express.Router();

router.post('/',userController.CreateUser)
router.get('/',userController.getAllFromUserController)
router.get(
    '/:id',userController.getByIdFromDB
);

export const userRoutes = router;