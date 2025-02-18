import { Request, Response } from "express";
import { TaskService } from "../services/task.service";
import { taskServiceFactory } from "../services/task.service.factory";
import { CreateTaskDto } from "../dtos/create-task.dto";

export class TaskController {
  private static service: TaskService = taskServiceFactory();

  static async create(req: Request, res: Response) {
    try {
      const data = new CreateTaskDto(req.body);
      const task = await TaskController.service.create(data);
      res.status(201).json(task);
    } catch (e) {
      res.status(400).json(e)
    }
  }

  static async findAll(req: Request, res: Response) {
    const tasks = await TaskController.service.findAll();
    res.json(tasks);
  }

  static async findById(req: Request, res: Response) {
    const task = await TaskController.service.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  }

  static async update(req: Request, res: Response) {
    const task = await TaskController.service.update(req.params.id, req.body);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  }

  static async delete(req: Request, res: Response) {
    const task = await TaskController.service.delete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(204).send();
  }
}
