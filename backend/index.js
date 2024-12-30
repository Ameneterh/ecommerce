import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import bidsRouter from "./routes/bids.routes.js";
import notificationsRouter from "./routes/notification.route.js";
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDb Database!"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/backend/users", userRouter);
app.use("/backend/products", productRouter);
app.use("/backend/bids", bidsRouter);
app.use("/backend/notifications", notificationsRouter);

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
