import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

// ROSTAS USER -- //
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

export { router };
