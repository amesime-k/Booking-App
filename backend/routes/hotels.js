import express from "express";
import Hotel from "../models/Hotel.js";

const route = express.Router();

//  CREATE
route.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
route.put("/:id", async (req, res) => {


  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id , {$set : req.body});
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});


export default route;
