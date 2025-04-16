import express from 'express'
import { userRoutes } from '../modules/User/user.route';
import { useBikeRoutes } from '../modules/Bikes/bikes.route';




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
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router