import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  completed: z.boolean().default(false),
});

export class CreateOrUpdateTaskDto {
  title: string;
  description: string;
  completed: boolean;

  constructor(data: unknown) {
    const parsed = CreateTaskSchema.parse(data);

    this.title = parsed.title;
    this.description = parsed.description;
    this.completed = parsed.completed;
  }
}
