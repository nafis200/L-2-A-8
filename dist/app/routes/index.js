"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/User/user.route");
const bikes_route_1 = require("../modules/Bikes/bikes.route");
const services_route_1 = require("../modules/services/services_route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/customers',
        route: user_route_1.userRoutes
    },
    {
        path: '/bikes',
        route: bikes_route_1.useBikeRoutes
    },
    {
        path: '/services',
        route: services_route_1.servicesRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
