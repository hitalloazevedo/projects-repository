import { TProject } from "../types";
import { supabase } from "./supabaseInstance";

export class ProjectService {

    async create(project: Omit<TProject, "id">){
        const { error } = await supabase
            .from('projects')
            .insert({
                title: project.title,
                description: project.description,
                image_url: project.imageUrl,
                tech_stack: project.techStack,
                deploy_link: project.deployLink,
                github_link: project.githubLink
            })
        
        if (error){
            console.log(error)
            throw new Error("Não foi possível criar registro")
        }
    }

    async getAll(){
        const { data, error } = await supabase
            .from('projects')
            .select();

        if (error){
            console.log(error)
            throw new Error("Erro ao buscar projetos")
        }
        
        return data;
    }
}