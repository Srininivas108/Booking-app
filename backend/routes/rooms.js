const express =require("express");
const { createRoom, updateRoomAvailability, updateRoom, deleteRoom, getRoom, getRooms } = require("../controllers/room");
const router =express.Router(); 
const {verifyAdmin} = require("../utils/verifyToken")

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);


module.exports = router;