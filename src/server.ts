import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projectRoutes";
import { connectDb } from "./config/db";

connectDb();

const server = express();

server.use(cors());
server.use(express.json());

server.use("/projects", projectsRouter);

export default server;
