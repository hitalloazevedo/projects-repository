"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const supabaseUrl = String(process.env.SUPABASE_URL);
const supabaseKey = String(process.env.SUPABASE_API_KEY);
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);