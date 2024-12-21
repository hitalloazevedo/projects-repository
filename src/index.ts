import Express, { Request, Response } from "express";
import { ProjectController } from "./controllers/projectController";
import cors from 'cors'

const projectController = new ProjectController();

const app = Express();

app.use(Express.json())
app.use(cors({ origin: "*" }))

app.get('/', (_: Request, response: Response) => {
    response.status(200).json({ message: "hello world"})
})

app.get('/api/projects', projectController.getAll)
// app.post('/api/projects', projectController.create)

app.listen(3000, () => {
    console.log(`server running on port 3000`);
})