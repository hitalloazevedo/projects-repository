"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const projectsService_1 = require("../services/projectsService");
const projectService = new projectsService_1.ProjectService();
class ProjectController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProject = request.body;
                yield projectService.create(newProject);
                response.status(201).json({
                    status: "created",
                    message: "project created",
                });
            }
            catch (err) {
                if (err instanceof Error) {
                    response.status(500).json({
                        status: "error",
                        message: err.message
                    });
                }
            }
        });
    }
    getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield projectService.getAll();
            response.status(200).json({
                data: projects
            });
        });
    }
}
exports.ProjectController = ProjectController;
