import { CreateOrUpdateTaskDto } from "../dtos/create-task.dto";
import { Task, ITask } from "../models/task";

export class TaskRepository {
  async create(task: CreateOrUpdateTaskDto) {
    console.log(task);
    return await Task.create(task);
  }

  async findAll() {
    return await Task.find();
  }

  async findById(id: string) {
    return await Task.findById(id);
  }

  async update(id: string, task: CreateOrUpdateTaskDto) {
    return await Task.findByIdAndUpdate(id, task, { new: true });
  }

  async delete(id: string) {
    return await Task.findByIdAndDelete(id);
  }
}
