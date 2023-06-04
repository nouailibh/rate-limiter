import { NextFunction, Request, Response } from "express";

export const simpleErrorHandling = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).json({
    message: "Internal server error",
  });
};
