import type { Request, Response } from "express";
import { TaskModel } from "../models";
import { Error as MongooseError } from "mongoose";

export class TaskController {
  static async getTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await TaskModel.find();

      res.status(200).json(tasks);
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }
      res.status(500).json({ msg: "Server error, please try again later" });
    }
  }

  static async getTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const task = await TaskModel.findById(id);

      if (!task) {
        res.status(404).json({ msg: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }
      res.status(500).json({ error: "Server error, please try again later" });
    }
  }

  static async createTask(req: Request, res: Response): Promise<void> {
    const task = new TaskModel(req.body);

    try {
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const task = await TaskModel.findById(id);

      await task?.remove();

      res.status(200).json({ msg: "Task deleted successfully" });

      if (!task) {
        res.status(404).json({ msg: "Task not found" });
      }
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }
      res.status(500).json({ error: "Server error, please try again later" });
    }
  }

  static async updateTask(req: Request, res: Response): Promise<void> {
    const { params, body } = req;

    try {
      const task = await TaskModel.findByIdAndUpdate(params.id, body);

      if (!task) {
        res.status(404).json({ msg: "Task not found" });
      }

      res.status(200).json({ msg: "Task updated successfully" });
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }
      res.status(500).json({ error: "Server error, please try again later" });
    }
  }
}
