import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotels.js";


const route = express.Router();

//  CREATE
route.post("/", createHotel);

// UPDATE
route.put("/:id", updateHotel);

//DELETE
route.delete("/:id", deleteHotel);
// GET
route.get("/:id", getHotel);
// GET ALL
route.get("/", getAllHotel);

export default route;
