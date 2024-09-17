import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects";
import dotenv from "dotenv";
import { connectDb } from "./config/db";

dotenv.config();

connectDb();

const server = express();

server.use(cors());
server.use(express.json());

server.use("/projects", projectsRouter);

export default server;
