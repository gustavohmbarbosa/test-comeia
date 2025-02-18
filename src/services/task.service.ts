import { TaskRepository } from "../repositories/task.repository";
import { ITask } from "../models/task";
import { CreateTaskDto } from "../dtos/create-task.dto";

export class TaskService {
  constructor(private repository: TaskRepository) {}

  static createInstance(repository: TaskRepository) {
    return new TaskService(repository);
  }

  async create(task: CreateTaskDto) {
    return await this.repository.create(task);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, task: Partial<ITask>) {
    return await this.repository.update(id, task);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}
