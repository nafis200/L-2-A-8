"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesRoutes = exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services_controller");
const router = express_1.default.Router();
router.post('/', services_controller_1.ServicesController.CreateServices);
router.get('/', services_controller_1.ServicesController.getAllFromServicesController);
router.get('/status', services_controller_1.ServicesController.getPendingServicesController);
router.get('/:id', services_controller_1.ServicesController.getByIdServicesDB);
router.put('/:id', services_controller_1.ServicesController.updateServicesIntoDBController);
exports.userRoutes = router;
exports.servicesRoutes = router;
