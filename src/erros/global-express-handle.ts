
import { Request, Response, NextFunction } from "express";

export function globalExpressHandle(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.status || err.statusCode || 500;

  console.error(`[ERROR] ${req.method} ${req.url} - ${statusCode}:`, err);

  res.status(statusCode).json({
    success: false,
    message: err.message || "Erro interno do servidor",
    statusCode,
  });
}

