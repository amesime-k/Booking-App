import express from "express";
import { login, register } from "../controllers/auth.js";

const route = express.Router();

route.post("/register", register);
route.get("/login", login)

export default route;
