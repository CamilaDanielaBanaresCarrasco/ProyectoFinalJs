import { Router } from "express";
import { pruebaConexion } from "../controllers/pruebaControllers.js";

const routerConexion = Router();

routerConexion.get("/", pruebaConexion);

export { routerConexion };