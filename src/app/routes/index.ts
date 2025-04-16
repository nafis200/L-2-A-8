import express from 'express'
import { userRoutes } from '../modules/User/user.route';



const router = express.Router();

const moduleRoutes = [
    {
        path:'/customers',
        route:userRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router