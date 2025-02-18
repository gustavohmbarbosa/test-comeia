import { TaskRepository } from "../repositories/task.repository";
import { TaskService } from "./task.service";

export function taskServiceFactory() {
    return new TaskService(new TaskRepository());
}
