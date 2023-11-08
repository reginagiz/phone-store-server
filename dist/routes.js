"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("./db"));
const router = (0, express_1.Router)();
router.get("/products", (req, res) => {
    res.json(db_1.default.products);
});
router.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = db_1.default.products.find((p) => p.id === productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product not found" });
    }
});
exports.default = router;
