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
exports.ProjectService = void 0;
const supabaseInstance_1 = require("./supabaseInstance");
class ProjectService {
    create(project) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield supabaseInstance_1.supabase
                .from('projects')
                .insert({
                title: project.title,
                description: project.description,
                image_url: project.imageUrl,
                tech_stack: project.techStack,
                deploy_link: project.deployLink,
                github_link: project.githubLink
            });
            if (error) {
                console.log(error);
                throw new Error("Não foi possível criar registro");
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabaseInstance_1.supabase
                .from('projects')
                .select();
            if (error) {
                console.log(error);
                throw new Error("Erro ao buscar projetos");
            }
            return data;
        });
    }
}
exports.ProjectService = ProjectService;
