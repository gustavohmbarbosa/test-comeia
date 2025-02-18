import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
}

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Task = model<ITask>("Task", TaskSchema);
