import express from 'express';
import { userController } from './user.controller';


const router = express.Router();

router.post('/',userController.CreateUser)
router.get('/',userController.getAllFromUserController)
router.get(
    '/:id',userController.getByIdFromDB
);
router.put('/:id',userController.updateUserIntoDBController)
export const userRoutes = router;

router.delete('/:id',userController.deleteUserFromDBController)