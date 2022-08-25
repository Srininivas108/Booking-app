const express =require("express");
const dotenv= require("dotenv");
const mongoose =require("mongoose")
const cookieParser =require("cookie-parser");
const authRoute = require("./routes/auth")
const hotelsRoute = require("./routes/hotels")
const roomsRoute = require("./routes/rooms")
const usersRoute = require("./routes/users")
const cors =require("cors")
const app=express();
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  //middleware
  app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(5000, ()=>{
    connect();
    console.log("connected too server ")
})