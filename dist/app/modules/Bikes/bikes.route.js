"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post('/', bike_controller_1.BikeController.CreateBikes);
router.get('/', bike_controller_1.BikeController.getAllBikesController);
router.get('/:id', bike_controller_1.BikeController.getByIdBikesDB);
exports.useBikeRoutes = router;
