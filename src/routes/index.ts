import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

const routes = Router();

routes.post("/tasks", TaskController.create);
routes.get("/tasks", TaskController.findAll);
routes.put("/tasks/:id", (TaskController.update as any));
routes.delete("/tasks/:id", (TaskController.delete as any));

export { routes }

