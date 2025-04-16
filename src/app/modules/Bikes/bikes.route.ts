import express from 'express';
import { BikeController } from './bike.controller';



const router = express.Router();

router.post('/',BikeController.CreateBikes)
router.get('/',BikeController.getAllBikesController)
router.get(
    '/:id',BikeController.getByIdBikesDB
);

export const useBikeRoutes = router;