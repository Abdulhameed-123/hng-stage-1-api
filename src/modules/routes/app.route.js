import { Router } from "express";
import { getHello,  } from "../controllers/app.controller.js";

const router = Router();

export const appRoutes = () => {
  /**
   * get user
   */
  router.get("/", getHello);

  return router;
};
