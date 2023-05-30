import { Request, Router,Response } from "express";
import CoffeController from "../controllers/CoffeController";

const router = Router();

router.get("/coffe", CoffeController.allItems)
router.post("/coffe", CoffeController.createItem)
router.patch("/coffe/:id", CoffeController.updateItem)


export {router}