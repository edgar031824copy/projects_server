import type { Request, Response } from "express";
import { projectModel } from "../models";
import { Error as MongooseError } from "mongoose";

export class ProjectController {
  static getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
      const projects = await projectModel.find();
      res.status(200).json(projects);
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }

      res.status(500).json({ msg: "Server error, please try again later" });
    }
  };

  static getProject = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const project = await projectModel.findById(id);

      if (!project) {
        res.status(404).json({ msg: "Project not found" });
      }

      res.status(200).json(project);
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }

      res.status(500).json({ error: "Server error, please try again later" });
    }
  };

  static createProject = async (req: Request, res: Response): Promise<void> => {
    const project = new projectModel(req.body);

    try {
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      console.log(error);
    }
  };

  static deleteProject = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const project = await projectModel.findById(id);

      if (!project) {
        res.status(404).json({ msg: "Project not found" });
      }

      await project?.remove();

      res.status(200).json({ msg: "Project deleted successfully" });
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }
      res.status(500).json({ msg: "Server error, please try again later" });
    }
  };

  static updateProject = async (req: Request, res: Response): Promise<void> => {
    const { body, params } = req;
    try {
      const project = await projectModel.findByIdAndUpdate(params.id, body);

      if (!project) {
        res.status(404).json({ msg: "Project not found" });
      }

      await project?.save();

      res.status(200).json({ msg: "Project updated successfully" });
    } catch (error) {
      if (error instanceof MongooseError) {
        res.status(400).json({ msg: error.message });
      }
      res.status(500).json({ msg: "Server error, please try again later" });
    }
  };
}
