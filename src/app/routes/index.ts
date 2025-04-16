import express from 'express'
import { userRoutes } from '../modules/User/user.route';
import { useBikeRoutes } from '../modules/Bikes/bikes.route';
import { userService } from '../modules/User/user.services';
import { servicesRoutes } from '../modules/services/services_route';




const router = express.Router();

const moduleRoutes = [
    {
        path:'/customers',
        route:userRoutes
    },
    {
        path:'/bikes',
        route:useBikeRoutes
    },
    {
        path:'/services',
        route:servicesRoutes
    },
    
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router