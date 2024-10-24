import type { Request, Response, NextFunction } from "express";
import { validateData } from "../schemas/projectSchema";

export const projectMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { success } = validateData(req.body);

  if (!success) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  next();
};
