import express from 'express';
import { ServicesController } from './services_controller';


const router = express.Router();

router.post('/',ServicesController.CreateServices)
router.get('/',ServicesController.getAllFromServicesController)
router.get(
    '/:id',ServicesController.getByIdServicesDB
);
router.put('/:id',ServicesController.updateServicesIntoDBController)
export const userRoutes = router;


export const servicesRoutes = router;