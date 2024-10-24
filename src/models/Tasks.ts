import { model, Schema } from "mongoose";

const taskStatus = {
  PENDING: "pending",
  ON_HOLD: "onHold",
  IN_PROGRESS: "inProgress",
  UNDER_REVIEW: "underReview",
  COMPLETED: "completed",
} as const;

type TaskStatusType = typeof taskStatus;

export type TaskType = Document & {
  name: string;
  description: string;
  project: Schema.Types.ObjectId;
  status: TaskStatusType[keyof TaskStatusType];
};

const TaskSchema = new Schema<TaskType>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    status: {
      type: String,
      enum: Object.values(taskStatus),
      default: taskStatus.PENDING,
    },
  },
  { timestamps: true },
);

export const TaskModel = model<TaskType>("Task", TaskSchema);
