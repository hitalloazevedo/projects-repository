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
exports.AppService = void 0;
const supabaseInstance_1 = require("./supabaseInstance");
class AppService {
    getProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabaseInstance_1.supabase
                .from('projects')
                .select();
            if (data) {
                return data;
            }
        });
    }
}
exports.AppService = AppService;
