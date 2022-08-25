const express =require("express");
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } = require("../controllers/hotel");

const router =express.Router(); 


//create
router.post("/",createHotel);



//update

router.put("/:id",updateHotel)

// delete
router.delete("/:id",deleteHotel)
//get 
router.get("/find/:id",getHotel)
//get all

router.get("/", getHotels);
router.get("/countByCity", countByCity);
 router.get("/countByType", countByType);
  router.get("/room/:id", getHotelRooms);




module.exports = router;
