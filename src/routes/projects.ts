import { Router } from "express";

const projectsRouter = Router();

projectsRouter.get("/", (req, res) => res.send("yes"));

export default projectsRouter;
