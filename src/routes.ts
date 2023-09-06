import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreatedCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

// ROTAS USER -- //
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/myuser", isAuthenticated, new DetailUserController().handle);

// Routes Category --//
router.post(
  "/category",
  isAuthenticated,
  new CreatedCategoryController().handle
);

export { router };
