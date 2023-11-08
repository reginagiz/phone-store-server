import { Request, Response, Router } from "express";
import db from "./db";

const router = Router();

router.get("/products", (req: Request, res: Response) => {
  res.json(db.products);
});

router.get("/products/:id", (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const product = db.products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
