import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({
    nome: "rota /",
  });
});

router.get("/teste", (req: Request, res: Response) => {
  return res.json({
    nome: "Caio",
  });
});

export { router };
