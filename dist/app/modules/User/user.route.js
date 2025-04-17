"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/', user_controller_1.userController.CreateUser);
router.get('/', user_controller_1.userController.getAllFromUserController);
router.get('/:id', user_controller_1.userController.getByIdFromDB);
router.put('/:id', user_controller_1.userController.updateUserIntoDBController);
exports.userRoutes = router;
router.delete('/:id', user_controller_1.userController.deleteUserFromDBController);
exports.useRoutes = router;
