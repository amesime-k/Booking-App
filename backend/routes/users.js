import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/users.js";
import { verifyToken } from "../utils/verifyToken.js";

const route = express.Router();

route.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("Hello user you are logged in")
})

// UPDATE
route.put("/:id", updateUser);

//DELETE
route.delete("/:id", deleteUser);
// GET
route.get("/:id", getUser);
// GET ALL
route.get("/", getAllUser);

export default route;
