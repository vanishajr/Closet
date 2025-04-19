import express from 'express';
import { createCloset, deleteCloset, getClosets, updateCloset } from '../controllers/closet.controller.js';

const router = express.Router();

router.get("/", getClosets);
router.post("/", createCloset);
router.put("/:id", updateCloset);
router.delete("/:id", deleteCloset);

export default router;