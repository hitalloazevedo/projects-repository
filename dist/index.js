"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController_1 = require("./controllers/projectController");
const cors_1 = __importDefault(require("cors"));
const projectController = new projectController_1.ProjectController();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.get('/', (_, response) => {
    response.status(200).json({ message: "hello world" });
});
app.get('/api/projects', projectController.getAll);
// app.post('/api/projects', projectController.create)
app.listen(3000, () => {
    console.log(`server running on port 3000`);
});
