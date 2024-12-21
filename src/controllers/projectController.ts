import { Request, Response } from "express";
import { ProjectService } from "../services/projectsService";
import { TProject } from "../types";

const projectService = new ProjectService()

export class ProjectController {
    async create(request: Request, response: Response){
        try {
            const newProject: Omit<TProject, "id"> = request.body;
    
            await projectService.create(newProject)
    
            response.status(201).json({
                status: "created",
                message: "project created",
            })

        } catch (err){
            if (err instanceof Error){
                response.status(500).json({
                    status: "error",
                    message: err.message
                })
            }
        }
    }

    async getAll(request: Request, response: Response){
        const projects = await projectService.getAll();
        response.status(200).json({
            data: projects
        })
    }
}