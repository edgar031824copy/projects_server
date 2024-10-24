import type { PopulatedDoc } from "mongoose";
import { model, Schema } from "mongoose";
import type { TaskType } from "./Tasks";

export type ProjectType = Document & {
  projectName: string;
  clientName: string;
  description: string;
  tasks: PopulatedDoc<TaskType>[];
};

const ProjectSchema = new Schema<ProjectType>(
  {
    projectName: { type: String, required: true, trim: true },
    clientName: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true },
);

export const projectModel = model<ProjectType>("Project", ProjectSchema);
