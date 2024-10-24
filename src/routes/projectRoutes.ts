import { Router } from "express";
import { ProjectController, TaskController } from "../controllers";
import { projectMiddleware } from "../middlewares/projectMiddleware";

const projectsRouter = Router();

projectsRouter.get("/", ProjectController.getProjects);
projectsRouter.get("/:id", ProjectController.getProject);
projectsRouter.post("/", projectMiddleware, ProjectController.createProject);
projectsRouter.delete("/:id", ProjectController.deleteProject);
projectsRouter.put("/:id", projectMiddleware, ProjectController.updateProject);

// task endpoints
projectsRouter.post("/:id/tasks", TaskController.createTask);
projectsRouter.get("/:id/tasks", TaskController.getTasks);
projectsRouter.get("/:id/tasks/:taskId", TaskController.getTask);
projectsRouter.delete("/:id/tasks/:taskId", TaskController.deleteTask);
projectsRouter.put("/:id/tasks/:taskId", TaskController.updateTask);

export default projectsRouter;
